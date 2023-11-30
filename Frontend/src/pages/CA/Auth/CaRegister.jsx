import React from "react";
import CaRegisterForm from "../../components/Forms/CaRegisterForm";
import styled from "styled-components";
import { useState } from "react";
import { axiosInstance } from "../../../config/config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../config/firebase-config";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const CaRegister = () => {
  const getCaUser = useSelector((state) => state.ca).result;

  //Check if completing the profile for the first time or fresh start
  const [initialPage, setInitialPage] = useState(0);
  const [loading, setLoading] = useState({ google: false, normal: false });
  const [user, setUser] = useState({
    email: getCaUser.email,
    password: "",
    cpassword: "",
    name: "",
    gender: "",
    phone: null,
    dob: "",
    passingYear: null,
    college: "",
    collegeState: "",
    referral: "",
    points: 0,
    invites: 0,
    rank: -1,
    google: false,
    isAdmin: false,
    history: [0],
  });

  const handleRegister = async () => {
    setLoading({ ...loading, normal: true });
    axiosInstance
      .post("/register", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        setLoading({ ...loading, normal: false });
        toast.info("Verification Email Sent!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        });
        setTimeout(() => {
          setInitialPage(1);
        }, 1000);
      })
      .catch((err) => {
        if (err.response.data.code === "auth/email-already-in-use") {
          axiosInstance
            .get("/ca-user", {
              params: { email: user.email },
            })
            .then((res) => {
              setLoading({ ...loading, normal: false });
              toast.info("Already registered", {
                position: "top-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: "dark",
              });
              setUser({ ...user, email: "", password: "", cpassword: "" });
            })
            .catch((err) => {
              if (err.response.status === 500) {
                setLoading({ ...loading, google: false });
                toast.error("Server error! Try again later", {
                  position: "top-center",
                  autoClose: 800,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  pauseOnFocusLoss: false,
                  draggable: true,
                  theme: "dark",
                });
              } else {
                setLoading({ ...loading, normal: false });
                toast.info("Complete your profile", {
                  position: "top-center",
                  autoClose: 800,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  pauseOnFocusLoss: false,
                  draggable: true,
                  theme: "dark",
                });
                setTimeout(() => {
                  setInitialPage(1);
                }, 1000);
              }
            });
        } else if (err.response.data.code === "auth/invalid-email") {
          setLoading({ ...loading, normal: false });
          toast.error("Invalid Email address", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          });
          setUser({ ...user, email: "", password: "", cpassword: "" });
        } else if (err.response.data.code === "auth/weak-password") {
          setLoading({ ...loading, normal: false });
          toast.info("Choose a strong password", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          });
          setUser({ ...user, password: "", cpassword: "" });
        }
      });
  };

  const handleGoogleRegister = async () => {
    setLoading({ ...loading, google: true });
    setTimeout(() => {
      setLoading({ ...loading, google: false });
    }, 5000);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        axiosInstance
          .get("/ca-user", {
            params: { email: result.user.email },
          })
          .then((res) => {
            setLoading({ ...loading, google: false });
            toast.info("Email already in use.", {
              position: "top-center",
              autoClose: 800,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              pauseOnFocusLoss: false,
              draggable: true,
              theme: "dark",
            });
          })
          .catch((err) => {
            setLoading({ ...loading, google: false });
            toast.info("Please fill in the details.", {
              position: "top-center",
              autoClose: 800,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              pauseOnFocusLoss: false,
              draggable: true,
              theme: "dark",
            });
            setUser({ ...user, email: result.user.email, google: true });
            setInitialPage(1);
          });
      })
      .catch((error) => {
        //popup closed by user
      });
  };

  return (
    <RegisterContainer>
      <ToastContainer />
      <CaRegisterForm
        user={user}
        initialPage={initialPage}
        setUser={setUser}
        handleRegister={handleRegister}
        handleGoogleRegister={handleGoogleRegister}
        loading={loading}
        setLoading={setLoading}
      />
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
`;
