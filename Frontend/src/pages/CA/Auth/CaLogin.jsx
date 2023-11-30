import React from "react";
import CaLoginForm from "../../components/Forms/CaLoginForm";
import styled from "styled-components";
import { useState } from "react";
import { axiosInstance } from "../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../config/firebase-config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const CaLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getCaUser = useSelector((state) => state.ca).result;

  const [loading, setLoading] = useState({ google: false, normal: false });
  const [user, setUser] = useState({
    email: getCaUser.email,
    password: "",
  });

  const handleGoogleLogin = async () => {
    setLoading({ ...loading, google: true });
    setTimeout(() => {
      setLoading({ ...loading, google: false });
    }, 5000);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        //Successful login
        axiosInstance
          .get("/ca-user", {
            params: { email: result.user.email },
          })
          .then((res) => {
            //Profile completed already
            //Setting in redux
            dispatch({
              type: "GET_CA_ACTION",
              payload: { ...res.data, isVerified: true },
            });
            //Fetching leaderboard
            axiosInstance
              .get("/leaderboard")
              .then((res) => {
                setLoading({ ...loading, google: false });
                //Setting in redux
                dispatch({
                  type: "GET_LEADERBOARD_ACTION",
                  payload: res.data,
                });
                //Redirect to dashboard
                toast.success("Success", {
                  position: "top-center",
                  autoClose: 500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  pauseOnFocusLoss: false,
                  draggable: true,
                  theme: "dark",
                });
                setTimeout(() => {
                  navigate("../dashboard");
                }, 2000);
              })
              .catch((err) => {
                setLoading({ ...loading, google: false });
                toast.error("Error loading leaderboard", {
                  position: "top-center",
                  autoClose: 800,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  pauseOnFocusLoss: false,
                  draggable: true,
                  theme: "dark",
                });
              });
          })
          .catch((error) => {
            if (error.response.status === 500) {
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
              dispatch({
                type: "GET_CA_ACTION",
                payload: {
                  email: error.response.data.email,
                },
              });
              toast.error("Please complete Registration!", {
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
                navigate("../register");
              }, 2000);
            }
          });
      })
      .catch((err) => {
        //Popup closed by user
      });
  };
  const handleLogin = async () => {
    setLoading({ ...loading, normal: true });
    axiosInstance
      .post("/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        //Correct credentials and verified
        //Fetching logged in user's data
        axiosInstance
          .get("/ca-user", {
            params: {
              email: response.data.email,
            },
          })
          .then(
            //Successful login
            (res) => {
              //Setting in redux
              dispatch({
                type: "GET_CA_ACTION",
                payload: { ...res.data, isVerified: true },
              });
              //Fetching leaderboard
              axiosInstance
                .get("/leaderboard")
                .then((res) => {
                  //Setting in redux
                  setLoading({ ...loading, normal: false });
                  dispatch({
                    type: "GET_LEADERBOARD_ACTION",
                    payload: res.data,
                  });
                  //Redirect to dashboard
                  toast.success("Success", {
                    position: "top-center",
                    autoClose: 500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    pauseOnFocusLoss: false,
                    draggable: true,
                    theme: "dark",
                  });
                  setTimeout(() => {
                    navigate("../dashboard");
                  }, 2000);
                })
                .catch((err) => setLoading({ ...loading, normal: false }));
            }
          )
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
              //Profile not completed
              setLoading({ ...loading, normal: false });
              dispatch({
                type: "GET_CA_ACTION",
                payload: {
                  email: response.data.email,
                },
              });
              toast.info("Please complete registration!", {
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
                navigate("../register");
              }, 2000);
            }
          });
      })
      .catch((error) => {
        setLoading({ ...loading, normal: false });
        //Email Not Verified or Invalid credentials
        toast.error(error.response.data, {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        });
        setUser({ ...user, password: "" });
      });
  };
  const resetPassword = async () => {
    setLoading({ ...loading, normal: true });
    axiosInstance
      .get("/ca-user", {
        params: {
          email: user.email,
        },
      })
      .then((res) => {
        if (res.data.google) {
          setLoading({ ...loading, normal: false });
          toast.error("A google account uses this email", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          });
        } else
          sendPasswordResetEmail(auth, res.data.email)
            .then(() => {
              setLoading({ ...loading, normal: false });
              toast.success("Password reset link sent!", {
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
            .catch((error) => {
              setLoading({ ...loading, normal: false });
              toast.error(error.response.data.code, {
                position: "top-center",
                autoClose: 800,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: false,
                draggable: true,
                theme: "dark",
              });
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
          setLoading({ ...loading, normal: false });
          toast.error("User does not exist!", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          });
        }
      });
  };

  return (
    <LoginContainer>
      <ToastContainer />
      <CaLoginForm
        user={user}
        setUser={setUser}
        handleLogin={handleLogin}
        handleGoogleLogin={handleGoogleLogin}
        resetPassword={resetPassword}
        loading={loading}
      />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
  overflow: hidden;
`;
