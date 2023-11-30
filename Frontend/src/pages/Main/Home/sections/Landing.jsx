import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import track from "../../resources/train-track.svg";
import { ToastContainer, toast } from "react-toastify";

function Landing() {
  const [scrollY, setScrollY] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    // Initial calculation and event listeners
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Calculate the translation percentage based on the dynamic maxScroll
    setTranslateX((scrollY / window.innerHeight) * 100);
  }, [scrollY]);
  return (
    <LandingContainer className="main-landing">
      <div className="center-logo">
        <motion.img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Flogo.svg?alt=media&token=a8e0f23e-9c7d-4bd8-a2c6-040a3ddeed03"
          alt=""
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
        />
      </div>
      <a
        className="buy-tickets-container"
        href="https://in.bookmyshow.com/special/zeitgeist-a-retro-renaissance/ET00374450?webview=true"
        target="_blank"
      >
        <motion.div
          className="buy-tickets"
          initial={{ rotate: -6, y: 50, opacity: 0 }}
          animate={{ rotate: 6, y: 0, opacity: 1 }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 1.6,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <motion.img
            className="left-lamp"
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FLampLeft.svg?alt=media&token=5e170f6e-e1ec-45a1-ae2d-2177227b9c1b"
            alt=""
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{
              delay: 1,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 4,
            }}
          />
          <img
            className="wooden-board"
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fwooden%20board.svg?alt=media&token=b2e1a406-627b-470c-8fd7-fab34864fca2"
            alt=""
          />
          <motion.img
            className="right-lamp"
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FLampRight.svg?alt=media&token=5425b43e-1f11-4182-a31b-9bc96f8b50f6"
            alt=""
            initial={{ rotateY: 90 }}
            animate={{ rotateY: 0 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 4,
            }}
          />
        </motion.div>
      </a>
      <div className="lamp-train">
        <div className="lamp-post"></div>
        <div className="track"></div>
        <motion.div
          transition={{ ease: "linear" }}
          className="train"
          style={{ translateX: `${translateX}%` }}
        ></motion.div>
      </div>
      <div className="godly-rays">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Frays.svg?alt=media&token=50f145c5-94a6-4066-8a8a-e9664eec28a1"
          alt=""
        />
      </div>
      <ToastContainer></ToastContainer>
    </LandingContainer>
  );
}
const LandingContainer = styled.main`
  width: 100%;
  height: 100vh;
  background: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FLandingBg.png?alt=media&token=3d8b679b-facb-42c0-b80a-000dc7d2c4d5"),
    #a3724f;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  .godly-rays {
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    height: calc(55vmin + 3.17vw);
    @media screen and (max-width: 725px) {
      height: calc(65vmin + 9.65vw);
    }
    display: flex;
    justify-content: center;
    align-items: flex-start;
    img {
      translate: 0 50%;
      @media screen and (max-width: 768px) {
        translate: 0 0;
      }
      width: 100vw;
      height: 100vh;
      scale: 3;
      animation: mela 0.3s steps(2) infinite;
      @keyframes mela {
        from {
          rotate: -9deg;
        }
        to {
          rotate: 9deg;
        }
      }
      mix-blend-mode: soft-light;
    }
  }
  .center-logo {
    height: 45vmin;
    margin-top: calc(3.17vw + 10vmin);
    @media screen and (max-width: 725px) {
      margin-top: calc(9.65vw + 20vmin);
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    > img {
      z-index: 1;
      height: 100%;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(
        270deg,
        rgba(169, 123, 90, 0) 0%,
        #a97b5a 22.96%,
        #a97b5a 78.88%,
        rgba(169, 123, 90, 0) 100%
      );
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FAudience.svg?alt=media&token=d515734d-4ec3-4ec0-b627-a979f12a02d9");
      background-repeat: repeat-x;
      background-position: bottom;
      background-size: contain;
      z-index: 0;
      mix-blend-mode: darken;
      animation: jump linear 1.5s infinite alternate-reverse;
      @keyframes jump {
        from {
          translate: 0 6%;
        }
        to {
          translate: 0%;
        }
      }
    }
  }
  .buy-tickets-container {
    display: flex;
    justify-content: center;
    .buy-tickets {
      display: flex;
      justify-content: center;
      translate: 4%;
      max-width: 300px;
      width: 50%;
      background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fwheel%20rays.svg?alt=media&token=5e393e82-d5e4-4375-aeec-c2d88d684f9e");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      transform-origin: center top;
      .wooden-board {
        cursor: pointer;
        width: 60%;
        aspect-ratio: 1.2/1;
      }
      .left-lamp,
      .right-lamp {
        /* align-self: flex-end; */

        padding-top: 20%;
        width: 15%;
      }
      .left-lamp {
        transform-origin: right;
        translate: 6px;
      }
      .right-lamp {
        transform-origin: left;
        translate: -6px;
      }
    }
  }
  .lamp-train {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    flex: 1;
    max-height: 300px;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      max-height: 200px;
    }
    margin: auto 0 0 0;
    position: relative;
    .lamp-post {
      margin-right: 5vw;
      height: calc(100% - 5px);
      aspect-ratio: 115/300;
      background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Flamp-post.svg?alt=media&token=220c0478-4f33-4107-bf87-c4cd250e21b7");
      background-size: contain;
      background-position: bottom;
    }
    .track {
      height: 6px;
      width: 100%;
      border-bottom: 2px solid var(--darkestt, #723e30);
      background-image: url(${track});
      background-size: contain;
    }
    .train {
      position: absolute;
      bottom: 0;
      height: 60%;
      aspect-ratio: 27/2;
      margin-right: 100px;
      background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Ftrain.svg?alt=media&token=76765b48-e58a-4fd7-ab68-2ef2a9531902");
      background-position: left bottom;
      background-size: cover;
      background-repeat: no-repeat;
      transform-origin: left;
      translate: ${-window.innerWidth + 200 + "px"};
    }
  }
`;
export default Landing;
