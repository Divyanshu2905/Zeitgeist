import React from "react";
import MainRegisterForm from "../../components/Forms/MainRegisterForm";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../../config/config";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../../config/firebase-config";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export const MainRegister = () => {
  const getMainUser = useSelector((state) => state.user).result;
  const navigate = useNavigate();
  //Check if completing the profile for the first time or fresh start
  const [initialPage, setInitialPage] = useState(0);
  const [loading, setLoading] = useState({ google: false, normal: false });
  const [user, setUser] = useState({
    email: getMainUser.email,
    password: "",
    cpassword: "",
    name: "",
    gender: "",
    phone: null,
    dob: "",
    referral: "",
    google: false,
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
            .get("/main-user", {
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
    //Disable loader after 5 seconds of popup appearance
    setTimeout(() => {
      setLoading({ ...loading, google: false });
    }, 5000);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        axiosInstance
          .get("/main-user", {
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
            }
          });
      })
      .catch((error) => {
        // toast.error("Pop-up closed by user!", {
        //   position: "top-center",
        //   autoClose: 800,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   pauseOnFocusLoss: false,
        //   draggable: true,
        //   theme: "dark",
        // });
      });
  };

  return (
    <RegisterContainer>
      <svg
        onClick={() => navigate("/home")}
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        style={{ fill: "#723e30" }}
      >
        {" "}
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z" />
      </svg>
      <ToastContainer />
      <MainRegisterForm
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
  > svg {
    position: absolute;
    z-index: 100;
    margin-top: 20px;
    margin-left: 20px;
    cursor: pointer;
  }
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
`;
