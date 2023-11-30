import { styled } from "styled-components";
import {useNavigate} from "react-router-dom"
import React from "react";
import { Fancy } from "../../components/Buttons/Fancy";
import { SideLines } from "../../components/SideLines";

export const LandingSection = ({isVerified}) => {
  const navigate = useNavigate();

  const handleAuth = ()=>{
    if(!isVerified){
      navigate("register")
    }
    else{
      navigate("dashboard")
    }
  }
  return (
    <LandingContainer className="home" >
      <SideLines iconsPresent={true}></SideLines>
      <svg
        className="spotlight"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1067 931"
        fill="none"
      >
        <path
          d="M0 867.132C445.477 952.768 616.481 951.81 1067 867.132L786.109 6.10352e-05H305.317L0 867.132Z"
          fill="url(#paint0_linear_167_3896)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_167_3896"
            x1="538.5"
            y1="952.458"
            x2="538.5"
            y2="0.000104671"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="shadow"></div>
      <div className="logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLogo%20Ornate.svg?alt=media&token=0afb06f7-2c62-454e-af5c-5b840963fceb" alt="" />
      </div>
      <div className="title">
        <span>Campus</span>
        <span>Ambassador</span>
        <span>Program</span>
      </div>
      <div className="btn-container">
        <Fancy onClick={handleAuth} text={isVerified?"PROFILE":"JOIN US"} ></Fancy>
      </div>
    </LandingContainer>
  );
};

const LandingContainer = styled.section`
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 15px;
    display: block;
    bottom: 0;
    background: linear-gradient(
        -45deg,
        transparent 35%,
        #e6d6b5 35%,
        #e6d6b5 66%,
        transparent 66%
      ),
      linear-gradient(
        45deg,
        transparent 35%,
        #e6d6b5 35%,
        #e6d6b5 66%,
        transparent 66%
      );
    background-size: 30px 60px;
    transform: rotateY(180deg);
  }
  .title {
    translate: 0 -40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
      color: var(--light1, #e6d6b5);
      text-align: center;
      font-family: "Vast Shadow";
      font-size: 6vmin;
      font-weight: 400;
      text-transform: uppercase;
    }
  }
  .logo {
    width: 100%;
    display: flex;
    justify-content: center;
    img{
      width: 60vmin;
      @media screen and (max-width: 425px){
        width: 80vmin;
      }
    }
  }
  >svg {
    position: absolute;
    top: -10%;
    width: 50vw;
    animation: swing 3s ease-in-out infinite;
    transform-origin: center top;
    mix-blend-mode: soft-light;
    @keyframes swing {
      0%,
      100% {
        transform: rotate(-10deg);
      }
      50% {
        transform: rotate(10deg);
      }
    }
  }
  .shadow {
    position: absolute;
    bottom: 15px;
    left: 50%;
    translate: -50% 0;
    width: 70vw;
    height: 51px;
    border-radius: 100%;
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(71, 15, 0, 0.527) 0%,
      rgba(71, 15, 0, 0) 100%
    );
    filter: blur(6px);
    animation: follow 3s ease-in-out infinite;
    @keyframes follow {
      0%,
      100% {
        transform: translateX(100px);
      }
      50% {
        transform: translateX(-100px);
      }
    }
  }
  .btn-container{
    translate: 0 -40%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 425px){
      .fancy-btn{
        width: 50vw;
      }
    }
  }
  @media screen and (max-width: 640px) {
    >svg, .shadow{
      display: none;
    }
  }
`;
