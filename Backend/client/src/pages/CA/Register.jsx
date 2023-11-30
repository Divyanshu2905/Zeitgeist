import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm'
import styled from 'styled-components'
import { useState } from 'react'
import { axiosInstance } from '../../config/config';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../config/firebase-config';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
  const getCaUser = useSelector((state) => state.ca).result
  const dispatch = useDispatch()

  //Check if completing the profile for the first time or fresh start
  const [initialPage, setInitialPage] = useState(getCaUser.email === "" || getCaUser.email === undefined ? 0 : 1)
  const navigate = useNavigate()
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
    referral:"",
    points:0,
    invites:0,
    rank: -1,
    google: false,
    isAdmin:false
  });

  const handleRegister = async () => {
    axiosInstance.post("/register", {
      email: user.email,
      password: user.password,
    }).then(res => {
      toast.info("Verification Email Sent!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        pauseOnFocusLoss: false,
        draggable: true,
        theme: "dark",
      })
      setTimeout(()=>{setInitialPage(1)}, 1000)
    }).catch(err => {
      if (err.response.data.code === "auth/email-already-in-use") {
        axiosInstance.get("/user", {
          params: { email: user.email }
        }).then((res) => {
          toast.info("Already registered", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          })
          setUser({ ...user, email: "", password: "", cpassword: "" })
        }).catch((err) => {
          toast.info("Complete your profile", {
            position: "top-center",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            pauseOnFocusLoss: false,
            draggable: true,
            theme: "dark",
          })
          // setTimeout(()=>{setInitialPage(1)}, 1000)
          setInitialPage(1)
        })
      }
      else if (err.response.data.code === "auth/invalid-email") {
        toast.error("Invalid Email address", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        })
        setUser({ ...user, email: "", password: "", cpassword: "" })
      }
      else if (err.response.data.code === "auth/weak-password") {
        toast.info("Choose a strong password", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        })
        setUser({ ...user, password: "", cpassword: "" })
      }
    })
  }
  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        axiosInstance.get("/user", {
          params: { email: result.user.email}
        }).then((res) => {
          //Already registered, navigate to login
          navigate("../login")
        }).catch((err) => {
          setUser({...user, email: result.user.email, google:true})
          setInitialPage(1)
        })
      }).catch((error) => {
        toast.error(error.response, {
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
    <RegisterContainer>
      <RegisterForm user={user} initialPage={initialPage} setUser={setUser} handleRegister={handleRegister} handleGoogleRegister={handleGoogleRegister} />
      <ToastContainer />
    </RegisterContainer>
  )
}

const RegisterContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(5px);
`