import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../config/firebase-config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { axiosInstance } from "../../../config/config";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

import MainLoginForm from "../../components/Forms/MainLoginForm";

export const MainLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getMainUser = useSelector((state) => state.user).result;
  const [loading, setLoading] = useState({ google: false, normal: false });

  const [user, setUser] = useState({
    email: getMainUser.email,
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
          .get("/main-user", {
            params: { email: result.user.email },
          })
          .then((res) => {
            setLoading({ ...loading, google: false });
            //Profile completed already
            //Setting in redux
            dispatch({
              type: "GET_USER_ACTION",
              payload: { ...res.data, isVerified: true },
            });
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
              navigate("../home");
            }, 2000);
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
              if (!error.response.data.error) {
                dispatch({
                  type: "GET_USER_ACTION",
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
            }
          });
      })
      .catch((err) => {
        // toast.info("Pop-up closed by user", {
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
          .get("/main-user", {
            params: {
              email: response.data.email,
            },
          })
          .then(
            //Successful login
            (res) => {
              setLoading({ ...loading, normal: false });
              //Setting in redux
              dispatch({
                type: "GET_USER_ACTION",
                payload: { ...res.data, isVerified: true },
              });
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
                navigate("../home");
              }, 2000);
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
              setLoading({ ...loading, normal: false });
              //Profile not completed
              dispatch({
                type: "GET_USER_ACTION",
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
      .get("/main-user", {
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
      <MainLoginForm
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
  overflow: hidden;
`;
