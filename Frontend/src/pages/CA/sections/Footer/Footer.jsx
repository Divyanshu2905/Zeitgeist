import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Fancy } from "../../../components/Buttons/Fancy";

function Footer() {
  return (
    <Container className="relative w-[100vw] bg-[#A3724F] opacity-100">
      {/* Placing Images */}
      <div className="rangoli-container">
        <div
          className="absolute top-0 left-[7.5vw] mix-blend-soft-light"
          style={{ translate: "-50%" }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fleft.svg?alt=media&token=468b258a-f2d7-46e3-9a95-1598a249746f"
            alt=""
            style={{ width: "3vw" }}
          />
        </div>

        <div
          className="absolute top-0 right-[7.5vw] mix-blend-soft-light"
          style={{ translate: "50%" }}
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fright.svg?alt=media&token=aef31858-862a-4fac-b688-0141974d9d8c"
            alt=""
            style={{ width: "3vw" }}
          />
        </div>
        <div className="top">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FtopLeft.png?alt=media&token=4924fb52-27da-467e-9fb0-4b07c1a05ece"
            alt=""
            style={{ width: "20vw", mixBlendMode: "soft-light" }}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FtopCenter.png?alt=media&token=ec935c4a-539c-4395-bf2a-6a94754b9b0a"
            alt=""
            style={{ width: "30vw", mixBlendMode: "soft-light" }}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FtopRight.png?alt=media&token=fa4c9e6c-33c8-4fe3-a605-aab53866705f"
            alt=""
            style={{ width: "20vw", mixBlendMode: "soft-light" }}
          />
        </div>
        <div className="bottom">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FbackLeft.png?alt=media&token=03156be1-7327-4537-9198-793f33c0b2de"
            alt=""
            style={{ width: "9vw", mixBlendMode: "soft-light" }}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FbackCenter1.png?alt=media&token=8cd9d3b8-a26d-4972-9868-c185d43126bd"
            alt=""
            style={{ width: "24vw", mixBlendMode: "soft-light" }}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FbackCenter2.png?alt=media&token=0bc45ef3-3b52-4333-b370-f10467af4e5e"
            alt=""
            style={{ width: "17vw", mixBlendMode: "soft-light" }}
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FbackRight.png?alt=media&token=113d55e0-50f8-418f-93a2-3193ab0ae125"
            alt=""
            style={{ width: "11vw", mixBlendMode: "soft-light" }}
          />
        </div>
      </div>
      {/* Images Placed */}

      <div className="flex flex-col justify-between items-center z-20 h-full">
        <div className="fancy-btn-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
            alt=""
          />
          <Fancy text="FOLLOW US" variant="light"></Fancy>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
            alt=""
          />
        </div>

        <div className="flex z-10 justify-around w-[40vw]">
          <a
            href="https://www.facebook.com/zeitgeist.iitrpr?mibextid=ZbWKwL"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-[5vmin] text-[#F8F2D8]"
            />
          </a>
          <a
            href="https://twitter.com/Zeitgeist_rpr?t=PM5KFpsToXu7FEZdTJwWlA&s=08"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              className="text-[5vmin] text-[#F8F2D8]"
            />
          </a>
          <a
            href="https://instagram.com/zeitgeist_iitrpr?igshid=MzRlODBiNWFlZA=="
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-[5vmin] text-[#F8F2D8]"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/zeitgeist-iit-ropar/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[5vmin] text-[#F8F2D8]"
            />
          </a>
          <a
            href="https://youtube.com/@ZeitgeistIITRopar?feature=shared"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-[5vmin] text-[#F8F2D8]"
            />
          </a>
        </div>

        <div className=" z-10 mb-5 text-[#E6D6B5] text-[2vmin] font-[Jost]">
          <a href="/" className=" hover:text-[#ffffff] transition-all">
            Privacy Policy |{" "}
          </a>
          Copyright @ Zeitgeist 23
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 25vw;
  @media screen and (max-width: 768px) {
    height: 20vh;
  }
  .rangoli-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: transparent;
    .bottom,
    .top {
      display: flex;
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      align-items: flex-end;
      overflow: hidden;
    }
    .top {
      justify-content: space-evenly;
      > img {
        translate: 0 30%;
        animation: gol-gol-cw 30s linear infinite;
        @keyframes gol-gol-cw {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
      }
    }
    .bottom {
      justify-content: space-between;
      > img {
        translate: 0 20%;
        animation: gol-gol-acw 30s linear infinite;
        @keyframes gol-gol-acw {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: -360deg;
          }
        }
      }
    }
  }
  .left-hanger,
  .right-hanger {
    mix-blend-mode: soft-light;
    img {
      width: 3vmax;
    }
  }
  .fancy-btn-container {
    width: 100%;
    display: flex;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 10vw;
      &:last-child {
        rotate: 180deg;
      }
    }
    button {
      pointer-events: none;
      cursor: default;
    }
  }
`;
export default Footer;
