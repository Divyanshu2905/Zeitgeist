import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import {data} from "./TermsAndConditions" 

export const TnC = () => {

  return (
    <TncContainer>
      <Navbar></Navbar>
      <div className="main">
        <div className="heading">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
            alt=""
          />
          <span>T & C</span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
            alt=""
          />
        </div>
        <div className="content-wrapper">
          {data.map((ele) => (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M7.05176 1.33137C7.3565 0.421458 8.6435 0.421456 8.94824 1.33137L10.066 4.66886C10.2015 5.07338 10.5786 5.34741 11.0052 5.35125L14.5248 5.38294C15.4843 5.39158 15.882 6.6156 15.1108 7.1866L12.2821 9.28097C11.9392 9.53482 11.7951 9.97822 11.9233 10.3851L12.9808 13.7422C13.2691 14.6574 12.2278 15.4139 11.4465 14.8569L8.58048 12.8138C8.23311 12.5662 7.76689 12.5662 7.41952 12.8138L4.55352 14.8569C3.77216 15.4139 2.73095 14.6574 3.01924 13.7422L4.0767 10.3851C4.20487 9.97822 4.0608 9.53482 3.71795 9.28097L0.889204 7.1866C0.117996 6.6156 0.515701 5.39158 1.47524 5.38294L4.99479 5.35125C5.42137 5.34741 5.79855 5.07338 5.93402 4.66886L7.05176 1.33137Z"
                  fill="#F8F2D8"
                />
              </svg>
              <span>{ele}</span>
            </div>
          ))}
        </div>
        <div className="final-clause">
          Any misbehavior/ unethical conduct shall result in all passes of the
          said individual being terminated with no refund. Action will be taken
          by all involved authorities.
        </div>
      </div>
    </TncContainer>
  );
};
const TncContainer = styled.div`
  background-color: #a57052;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FFaqBg.png?alt=media&token=cba57bce-2f84-4480-880a-9db382a79f80");
  background-size: cover;
  background-blend-mode: luminosity;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > .main {
    position: relative;
    padding: 2vh 5vw;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    > .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      img {
        display: flex;
        align-items: center;
        width: 10vw;
        max-width: 160px;
        min-width: 80px;
        &:last-child {
          scale: -1;
        }
      }
      span {
        color: var(--light1, #e6d6b5);
        font-family: "Oleo Script";
        font-size: max(3vw, 28px);
        font-weight: 400;
      }
    }
    > .content-wrapper {
      flex: 1;
      overflow: auto;
      > div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 20px;
        span {
          width: 90%;
        }
      }
      color: var(--light1, #e6d6b5);
      font-family: "Oleo Script";
      font-size: 1.5vmax;
      font-weight: 400;
    }
    .final-clause {
      text-transform: uppercase;
      color: var(--light1, #e6d6b5);
      font-family: "Oleo Script";
      font-size: 2vmax;
      font-weight: 500;
      text-align: center;
    }
  }
`;
