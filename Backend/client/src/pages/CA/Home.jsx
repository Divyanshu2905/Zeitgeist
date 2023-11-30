import React, { useEffect, useState } from "react";
import { styled } from "styled-components";


import { OffersSection } from "./sections/OffersSection";
import { RoleSection } from "./sections/RoleSection";
import { LandingSection } from "./sections/LandingSection";
import { AboutSection } from "./sections/AboutSection";
import { TestimonialsSection } from "./sections/Testimonials/TestimonialsSection";
import { ParticipateSection } from "./sections/ParticipateSection";

import Footer from "./sections/Footer/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


export const Home = () => {
  const dispatch = useDispatch()
  const getCaUser = useSelector(state => state.ca).result
  const [authenticating, setAuthenticating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const logout = () => {
    dispatch({
      type: "GET_CA_ACTION",
      payload: {}
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    if(location.pathname!=="/campus-ambassador"){
      navigate("/campus-ambassador")
    }
  }

  useEffect(() => {
    if (window.location.pathname === '/campus-ambassador/login' || window.location.pathname === '/campus-ambassador/register') {
      setAuthenticating(true)
    }
    else {
      setAuthenticating(false)
    }
  }, [location])

  return (
    <>
      <HeaderContainer>
        <nav onClick={scrollToTop}>
          {
            getCaUser.isVerified ? <>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:"15vmax", aspectRatio:"3.23/1"}} viewBox="0 0 268 83" fill="none">
                <path d="M0.5 0.5H267.5V56.9166L134 82.4909L0.5 56.9166V0.5Z" fill="#6B3522" stroke="#F8F2D8" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:"14.25vmax", aspectRatio:"3.23/1"}} viewBox="0 0 253 77" fill="none">
                <path d="M1 0.5H0.5V1V52.1134V52.5305L0.910298 52.6053L126.41 75.4919L126.5 75.5082L126.59 75.4919L252.09 52.6053L252.5 52.5305V52.1134V1V0.5H252H1Z" stroke="#F8F2D8" />
              </svg>
            </> :
              <>
                <svg xmlns="http://www.w3.org/2000/svg" style={{width:"8vmax", aspectRatio:"1.69/1", translate: "0 -20%"}} viewBox="0 0 145 83" fill="none">
                  <path d="M0.5 0.5H144.5V56.9765L72.5 82.4696L0.5 56.9765V0.5Z" fill="#6B3522" stroke="#F8F2D8" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" style={{width:"8.5vmax", aspectRatio:"1.69/1", translate: "0 -20%"}} viewBox="0 0 130 77" fill="none">
                  <path d="M1 0.5H0.5V1V52.1134V52.4656L0.83164 52.5842L64.8316 75.4708L65 75.531L65.1684 75.4708L129.168 52.5842L129.5 52.4656V52.1134V1V0.5H129H1Z" stroke="#F8F2D8" />
                </svg>
              </>
          }


          <div className="navbar">
            <button>Home</button>
            {
              getCaUser.isVerified ? <button onClick={logout}>Logout</button> : null
            }
          </div>
        </nav>
      </HeaderContainer>
      <MainContainer>
        <LandingSection isVerified={getCaUser.isVerified} />
        {
          authenticating ? <Outlet></Outlet> :
            <>
              <AboutSection />
              <ParticipateSection />
              <RoleSection />
              <OffersSection />
              <TestimonialsSection />
            </>
        }
      </MainContainer>
      {
        authenticating ? null : <footer>
          <Footer />
        </footer>
      }

    </>
  );
};
const HeaderContainer = styled.header`
  nav {
    width: 20vmin;
    display: flex;
    justify-content: center;
    position: fixed;
    right: 10vw;
    top: 0;
    z-index: 110;
    cursor: pointer;
    >svg {
      position: absolute;
      top: -2px;
      height: fit-content;
      &:first-child{
        width: 20vmin;
      }
      &:nth-child(2){
        width: calc(20vmin - 8px);
      }
    }
    .navbar {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      z-index: 2;
      >*{
        color: var(--lightest, #f8f2d8);
        text-shadow: 1px 1px 0px rgba(114, 62, 48, 0.6);
        font-family: 'Jost';
        font-size: 1.5vmax;
        font-weight: 500;
      }
      button{
        padding: 0 10px;
      }
    }
  }
`;
const MainContainer = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  .home {
    padding-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100vh;
    background: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fbackgrounds%2Fwave.png?alt=media&token=d151a47d-6aa7-489c-af05-89c856cbcc76"), #723e30;
    background-blend-mode: difference;
    background-size: cover;
    background-repeat: no-repeat;
    .line{
      background-color: #8c6244;
    }
  }
  .section:not(.home) {
    &:nth-child(even) {
      background-color: var(--light-1, #e6d6b5);
      >.heading {
        span {
          color: #a3724f;
        }
        path {
          fill: #a3724f;
        }
      }
      .line{
        background-color: #c2a189;
      }
    }
    &:nth-child(odd) {
      background-color: var(--dark2, #a3724f);
      >.heading {
        color: #f8f2d8;
        path {
          fill: #f8f2d8;
        }
      }
      .line{
        background-color: #b48461;
      }
    }
    background-blend-mode: soft-light;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    min-height: 100vh;
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow:hidden;
    gap: 20vmin;
    @media screen and (max-width: 820px){
    gap : 10vmin;
    }
    >.heading {
      width: 100%;
      margin-top: 54px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      img{
        width: max(10vw, 80px);
        &:last-child{
          rotate: 180deg;
        }
      }
      span {
        font-family: "Grenze Gotisch";
        font-size: max(4vw, 20px);
        font-weight: 400;
      }
    }
  }
  
`;
