import React, { useState } from "react";

import { FormInput } from "../Buttons/FormInput";
import { AuthButton } from "../Buttons/AuthButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader/Loader";

function CaLoginForm({
  handleLogin,
  user,
  setUser,
  handleGoogleLogin,
  resetPassword,
  loading
}) {
  const star =
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fstar.png?alt=media&token=3a2c48a1-3f20-4a73-a67f-aac8db4bcbb1";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [page, setPage] = useState(false);

  const handleClick = () => {
    if (user.email === "" || user.password === "") {
      toast.info("Fill in the credentials", {
        position: "top-center",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        pauseOnFocusLoss: false,
        draggable: true,
        theme: "dark",
      });
    } else handleLogin();
  };
  return (
    <>
      <ToastContainer />
      {/* // Main Div */}
      <div className="bg-[#cebd98d5] flex items-center justify-center h-full w-full">
        {/* Radial lines in Background */}
        <div
          className="h-full w-full absolute top-0 left-0 flex justify-center items-center overflow-hidden"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fbg-lines.png?alt=media&token=93d937be-bfb9-484b-bb03-ce3b341b3bd0)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        {/* Card */}
        <div
          className="z-10 aspect-[0.56/1] h-[80%] bg-contain bg-no-repeat flex flex-col gap items-center justify-evenly"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fbg-card.png?alt=media&token=29f2f6bb-9a40-4b6d-9381-a0c365167c42)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          {/* Stars */}
          <div className="w-full h-[3%] flex z-20 justify-around">
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
          </div>

          {/* Content */}
          <div className="w-[80%] h-[80%] bg-[#E6D6B5] flex flex-col items-center px-[10%] justify-evenly">
            <div className="text-[3.4vh] font-[Jost] text-[#723e30] font-semibold">
              {!page ? "Login" : "Enter Email"}
            </div>

            <FormInput
              placeholder={"Email"}
              onchange={onInputChange}
              value={user.email}
              name="email"
            />

            {!page ? (
              <FormInput
                placeholder={"Password"}
                onchange={onInputChange}
                value={user.password}
                name="password"
              />
            ) : null}

            <div className="w-full font-[Jost] hover:text-[#482318] text-[#723e30] text-[2vh] transition-all flex justify-end ">
              <a
              style={{cursor:"pointer"}}
                className=""
                onClick={() => {
                  setPage((prev) => !prev);
                }}
              >
                {!page ? "Forgot Password?" : "Go back to login"}
              </a>
            </div>
            {!page ? (
              <>
                {loading.normal? <Loader/> : 
                <AuthButton
                isGoogle={false}
                registered={true}
                text={"LOGIN"}
                onclick={handleClick}
                />
              }

                <div className="font-[Jost]  text-[#b17f5b] text-[2vh]">OR</div>
                {loading.google? <Loader/> : 
                <AuthButton
                isGoogle={true}
                registered={true}
                onclick={handleGoogleLogin}
                />
              }

                <div className="font-[Jost] text-[1.6vh] lg:text-md">
                  <span className="text-[#a3724f]">Don't have an account?</span>
                  <a
                    className="text-[#723e30] font-bold cursor-pointer"
                    onClick={() => {
                      dispatch({
                        type: "GET_CA_ACTION",
                        payload: {},
                      });
                      navigate("../register");
                    }}
                  >
                    SignUp
                  </a>
                </div>
              </>
            ) : (
              loading.normal? <Loader/> : 
              <AuthButton
                isGoogle={false}
                registered={false}
                text={"SEND LINK"}
                onclick={resetPassword}
              />
            )}
          </div>

          <div className="w-full h-[3%] flex z-20 justify-around">
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CaLoginForm;
