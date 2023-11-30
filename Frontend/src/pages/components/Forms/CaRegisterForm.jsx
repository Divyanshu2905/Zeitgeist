import React, { useEffect, useState } from "react";
import { FormInput } from "../Buttons/FormInput";
import { AuthButton } from "../Buttons/AuthButton";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../Loader/Loader";

function CaRegisterForm({
  handleRegister,
  user,
  setUser,
  handleGoogleRegister,
  initialPage,
  loading,
  setLoading,
}) {
  const star =
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fstar.png?alt=media&token=3a2c48a1-3f20-4a73-a67f-aac8db4bcbb1";
  const navigate = useNavigate();
  const FormTitles = ["Register", "Personal Details", "College Details"];
  const [page, setPage] = useState(initialPage);
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleNext = () => {
    if (page === 0) {
      if (user.email === "" || user.password === "" || user.cpassword === "") {
        toast.info("Fill in the all the details", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        });
      } else if (user.password !== user.cpassword) {
        toast.error("Passwords do not match", {
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
        handleRegister();
      }
    } else if (page === 1) {
      if (
        user.name === "" ||
        user.gender === "" ||
        user.gender === "Gender" ||
        user.dob === "" ||
        user.phone === null
      ) {
        toast.info("Fill in the all the details", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        });
      } else if (user.dob.length !== 4 || user.dob > 2008 || user.dob < 1980) {
        toast.info("Enter valid birth year", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        });
      } else if (user.phone.length !== 10) {
        toast.info("Enter valid phone number", {
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
        setPage(2);
      }
    } else {
      if (
        user.college === "" ||
        user.collegeState === "" ||
        user.passingYear === null
      ) {
        toast.info("Fill in the all the details", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        });
      } else if (user.passingYear < 2023) {
        toast.info("Enter valid passing year", {
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
        const { password, cpassword, ...details } = user;
        setLoading({ ...loading, normal: true });
        axiosInstance
          .post("/ca-data", details)
          .then((res) => setLoading({ ...loading, normal: false }))
          .catch((err) => setLoading({ ...loading, normal: false }));
        toast.success("Registered! Please Login", {
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
          navigate("../login");
        }, 2000);
      }
    }
  };
  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  let componentToRender;

  useEffect(() => {
    setPage(initialPage);
  }, [initialPage]);

  switch (page) {
    case 0:
      componentToRender = (
        <>
          <FormInput
            key={0}
            type={"text"}
            placeholder={"Email"}
            onchange={onInputChange}
            value={user.email}
            name="email"
          />
          <FormInput
            key={1}
            type={"password"}
            placeholder={"Password"}
            onchange={onInputChange}
            value={user.password}
            name="password"
          />
          <FormInput
            key={2}
            type={"password"}
            placeholder={"Confirm Password"}
            onchange={onInputChange}
            value={user.cpassword}
            name="cpassword"
          />
        </>
      );
      break;

    case 1:
      componentToRender = (
        <>
          <FormInput
            key={3}
            type={"text"}
            placeholder={"Name"}
            onchange={onInputChange}
            value={user.name}
            name="name"
          />
          <FormInput
            key={4}
            type={"select"}
            placeholder={"Gender"}
            onchange={onInputChange}
            value={user.gender}
            name="gender"
          />
          <FormInput
            key={5}
            type={"number"}
            placeholder={"Birth Year"}
            onchange={onInputChange}
            value={user.dob}
            name="dob"
          />
          <FormInput
            key={6}
            type={"number"}
            placeholder={"Phone number"}
            onchange={onInputChange}
            value={user.phone}
            name="phone"
          />
        </>
      );
      break;

    case 2:
      componentToRender = (
        <>
          <FormInput
            key={7}
            type={"text"}
            placeholder={"College"}
            onchange={onInputChange}
            value={user.college}
            name="college"
          />
          <FormInput
            key={8}
            type={"text"}
            placeholder={"College State"}
            onchange={onInputChange}
            value={user.collegeState}
            name="collegeState"
          />
          <FormInput
            key={9}
            type={"number"}
            placeholder={"Passing Year"}
            onchange={onInputChange}
            value={user.passingYear}
            name="passingYear"
          />
        </>
      );
      break;

    default:
      break;
  }
  return (
    // Main Div
    <>
      <div className="bg-[#cebd98d5] flex items-center justify-center h-full w-full">
        <div
          className="h-full w-full absolute top-0 left-0 flex justify-center items-center overflow-hidden"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fbg-lines.png?alt=media&token=93d937be-bfb9-484b-bb03-ce3b341b3bd0)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="z-10 aspect-[0.56/1] h-[80%] bg-contain bg-no-repeat flex flex-col gap items-center justify-evenly"
          style={{
            backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fbg-card.png?alt=media&token=29f2f6bb-9a40-4b6d-9381-a0c365167c42)`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-[3%] flex z-20 justify-around">
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
            <img src={star} className="" alt="" />
          </div>

          <div className="w-[80%] h-[80%] bg-[#E6D6B5] flex flex-col items-center px-[10%] justify-evenly ">
            <div className="text-[3.4vh] font-[Jost] text-[#723e30] font-semibold">
              {FormTitles[page]}
            </div>
            {componentToRender}
            {loading.normal ? (
              <Loader />
            ) : (
              <AuthButton
                isGoogle={false}
                registered={false}
                text={page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
                onclick={handleNext}
              />
            )}
            {page !== 0 ? (
              <AuthButton
                isGoogle={false}
                registered={false}
                text="PREV"
                onclick={handlePrev}
              />
            ) : null}
            {page !== 0 ? null : (
              <>
                <div className="font-[Jost]  text-[#b17f5b] text-[2vh]">OR</div>
                {loading.google ? (
                  <Loader />
                ) : (
                  <AuthButton
                    isGoogle={true}
                    registered={false}
                    onclick={handleGoogleRegister}
                  />
                )}
              </>
            )}
            {page === 0 ? (
              <>
                <div className="font-[Jost] text-[1.6vh] lg:text-md">
                  <span className="text-[#a3724f]">
                    Already have an account?
                  </span>
                  <a
                    className="text-[#723e30] font-bold cursor-pointer"
                    onClick={() => {
                      navigate("../login");
                    }}
                  >
                    Login
                  </a>
                </div>
              </>
            ) : null}
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
      <ToastContainer />
    </>
  );
}

export default CaRegisterForm;
