import React from 'react'
import LoginForm from '../components/Forms/LoginForm'
import styled from 'styled-components'
import { useState } from 'react'
import { axiosInstance } from '../../config/config';
import { useDispatch, useSelector } from 'react-redux'
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getCaUser = useSelector((state) => state.ca).result

  const [user, setUser] = useState({
    email: getCaUser.email,
    password: "",
  });

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        //Successful login
        axiosInstance.get("/user", {
          params: { email: result.user.email }
        }).then((res) => {
          //Profile completed already
          //Setting in redux
          
          dispatch({
            type: "GET_CA_ACTION",
            payload: { ...res.data, isVerified: true }
          })
          //Fetching leaderboard
          axiosInstance.get("/leaderboard").then(res => {
            //Setting in redux
            dispatch({
              type: "GET_LEADERBOARD_ACTION",
              payload: res.data
            })
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
            })
            setTimeout(() => { navigate("../dashboard") }, 2000)
          }).catch((err) => {
            toast.error("Error")
          })
        }).catch((error) => {
          toast.error(error.response.data, {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          })
        })
      }
      )
    }
  const handleLogin = async () => {
      axiosInstance.post("/login", {
        email: user.email,
        password: user.password,
      }).then((response) => {
        //Correct credentials
        //Fetching logged in user's data
        axiosInstance.get("/user", {
          params: {
            email: response.data.email
          }
        }).then(
          //Successful login
          (res) => {
            //Setting in redux
            dispatch({
              type: "GET_CA_ACTION",
              payload: { ...res.data, isVerified: true }
            })
            //Fetching leaderboard
            axiosInstance.get("/leaderboard").then(res => {
              //Setting in redux
              dispatch({
                type: "GET_LEADERBOARD_ACTION",
                payload: res.data
              })
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
              })
              setTimeout(() => { navigate("../dashboard") }, 2000)
            }).catch(err => console.log(err))
          }
        ).catch(err => {
          //Profile not completed
          dispatch({
            type: "GET_CA_ACTION",
            payload: {
              email: response.data.email
            }
          })
          toast.info("Please complete registration!", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          })
          setTimeout(() => { navigate("../register") }, 2000)
        })
      }).catch((error) => {
        toast.error(error.response.data, {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        })
        setUser({ ...user, password: "" })
      })
    }

    const resetPassword = async () => {
      axiosInstance.get("/user", {
        params: {
          email: user.email
        }
      }).then((res) => {
        if (res.data.google) {
          toast.error("A google account uses this email", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          })
        }
        else sendPasswordResetEmail(auth, res.data.email)
          .then(() => {
            toast.success("Password reset link sent!", {
              position: "top-center",
              autoClose: 800,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              pauseOnFocusLoss: false,
              draggable: true,
              theme: "dark",
            })

          }).catch((error) => {
            toast.error(error.response.data.code, {
              position: "top-center",
              autoClose: 800,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              pauseOnFocusLoss: false,
              draggable: true,
              theme: "dark",
            })
          })

      }).catch((err) => {
        toast.error("User does not exist!", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        })
      })
    }

    return (
      <LoginContainer>
        <ToastContainer />
        <LoginForm user={user} setUser={setUser} handleLogin={handleLogin} handleGoogleLogin={handleGoogleLogin} resetPassword={resetPassword} />
      </LoginContainer>
    )
  }


  const LoginContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
  overflow: hidden;
`