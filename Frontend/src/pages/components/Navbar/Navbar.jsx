import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { TicketButton } from "../Buttons/TicketButton";
import { useDispatch, useSelector } from "react-redux";

import closeIcon from "./close.svg";
import openIcon from "./open.svg";
import navLogoBg from "./NavLogoBg.svg"

export const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const getMainUser = useSelector((state) => state.user).result;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Disable scrolling when menu is open
  useEffect(()=>{
    if (hamburger) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "visible";
    }
  },[hamburger])

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 725) {
        setHamburger(false);
      }
    });
  }, []);

  const signIn = () => {
    navigate("/register");
  };
  const signOut = () => {
    navigate("/");
    dispatch({ type: "GET_USER_ACTION", payload: {} });
    dispatch({ type: "GET_EVENTS_ACTION", payload: [] });
  };

  return (
    <NavbarContainer>
      <div className={`background ${hamburger ? "visible" : ""}`}>
        <NavLink to={"/events"}>Events</NavLink>
        <NavLink to={"/sponsors"}>Sponsors</NavLink>
        <NavLink to={"/schedule"}>Schedule</NavLink>
        <NavLink to={"/team"}>Team</NavLink>
        <NavLink to={"/faq"}>FAQs</NavLink>
        <NavLink to={"/t&c"}>T&C</NavLink>
      </div>

      <div className="nav-bar">
        <div
          className="hamburger"
          onClick={() => {
            setHamburger((prev) => !prev);
          }}
        >
          {hamburger ? (
            <img src={closeIcon} alt="" />
          ) : (
            <img src={openIcon} alt="" />
          )}
        </div>
        <div className="left-nav">
          <NavLink to={"/events"}>Events</NavLink>
          <NavLink to={"/sponsors"}>Sponsors</NavLink>
          <NavLink to={"/schedule"}>Schedule</NavLink>
        </div>
        <NavLink to={"/home"} className="home-button">
          <img src={navLogoBg} alt="" className="logo-bg" />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLogo%20Ornate.svg?alt=media&token=17255890-cbdc-42c3-b3a2-a5a691e838fe"
            alt=""
            className="logo"
          />
        </NavLink>
        <div className="right-nav">
          <NavLink to={"/team"}>Team</NavLink>
          <NavLink to={"/faq"}>FAQs</NavLink>
          <NavLink to={"/t&c"}>T&C</NavLink>
          <NavLink to={!getMainUser.isVerified ? "/register" : "/home"}>
            <TicketButton
              text={!getMainUser.isVerified ? "REGISTER" : "LOG OUT"}
              onclick={!getMainUser.isVerified ? signIn : signOut}
            ></TicketButton>
          </NavLink>
        </div>
        <div className="reg-button">
          <TicketButton
            text={!getMainUser.isVerified ? "REGISTER" : "LOG OUT"}
            onclick={!getMainUser.isVerified ? signIn : signOut}
          ></TicketButton>
        </div>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vmin 0vw;
  z-index: 10;
  .background {
    visibility: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    width: 100vw;
    height: 0;
    transition: all 0.3s ease-out;
    &.visible {
      z-index: 2;
      visibility: visible;
      height: 100vh;
      background: #d1b8a7;
      a {
        opacity: 1;
      }
    }
    a {
      color: var(--lightest, #f8f2d8);
      font-family: "Jost";
      font-size: 32px;
      opacity: 0;
      font-weight: 500;
      transition: all 0.1s ease-out;
      &.active {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          border-radius: 1px;
          background-color: #b48362c8;
        }
      }
    }
  }
  .nav-bar {
    z-index: 2;
    .hamburger {
      display: none;
      > img {
        height: 36px;
      }
      @media screen and (max-width: 725px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .reg-button {
      display: none;
      > img {
        height: 50%;
      }
      @media screen and (max-width: 725px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20vw;
      }
    }
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FNavBg.svg?alt=media&token=a986d55d-03d8-4ecb-ae35-b3e1de4a27ec");
    position: relative;
    width: 90%;
    aspect-ratio: 28.4/1;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 725px) {
      background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FSmallNavBg.svg?alt=media&token=642aae21-0950-4b4b-b981-3779a8a4625c");
      aspect-ratio: 9.3/1;
      justify-content: space-between;
      padding-inline: 5vw;
    }

    .left-nav,
    .right-nav {
      width: 40%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      font-size: clamp(12px, 1.5vmax, 22px);
      color: var(--lightest, #f8f2d8);
      font-family: "Jost";
      font-weight: 500;
      @media screen and (max-width: 725px) {
        display: none;
      }
      a {
        position: relative;
        transition: all 0.1s linear;
        &:hover,
        &.active {
          &::before {
            transform: scaleX(1);
          }
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          border-radius: 2px;
          background-color: #f8f2d8;
          transition: all 0.1s linear;
          transform-origin: center;
        }
      }
    }
    .right-nav {
      a:last-child {
        &::before {
          background-color: transparent;
        }
      }
    }
    button {
      box-shadow: none;
      border: 2px solid var(--darkestt, #723e30e1);
      @media screen and (max-width: 725px) {
        width: 100%;
      }
      span {
        font-weight: 600;
        color: #723e30;
        @media screen and (max-width: 725px) {
          font-size: min(14px, 1.4vmax);
        }
      }
    }
    .home-button {
      position: absolute;
      left: 50%;
      translate: -50%;
      .logo-bg {
        width: 10vw;
        @media screen and (max-width: 725px) {
          width: 25vw;
        }
      }
      .logo {
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
        padding: 5% 0 11% 0;
      }
    }
  }
`;
