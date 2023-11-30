import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styled from "styled-components";
import { axiosInstance } from "../../../config/config";
import { Loader } from "../../components/Loader/Loader";

import reel from "../resources/reelSponsorBg.svg";

export const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    axiosInstance.get("/sponsors").then((res) => {
      setloading(false);
      setSponsors(res.data);
    });
  }, []);
  return (
    <SponsorContainer>
      <Navbar></Navbar>
      <div className="main">
        <div className="heading">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowL.svg?alt=media&token=b901daf4-0523-4d18-83e3-3b47ac3c135d"
            alt=""
          />
          <span>Our Sponsors</span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowR.svg?alt=media&token=251b9fca-c871-4e00-80d5-3ee33b695145"
            alt=""
          />
        </div>
        <div class="sponsor-wrapper">
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className="sponsor-track">
                {sponsors.map((sponsor) => (
                  <div className="sponsor">
                    <img src={sponsor.url} alt="" />
                  </div>
                ))}
                {sponsors.map((sponsor) => (
                  <div className="sponsor">
                    <img src={sponsor.url} alt="" />
                  </div>
                ))}
              </div>
              <div className="sponsor-track">
                {sponsors.map((sponsor) => (
                  <div className="sponsor">
                    <img src={sponsor.url} alt="" />
                  </div>
                ))}
                {sponsors.map((sponsor) => (
                  <div className="sponsor">
                    <img src={sponsor.url} alt="" />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </SponsorContainer>
  );
};

const SponsorContainer = styled.div`
  background-color: #c8b897;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FEventsPageBg.png?alt=media&token=45e2f985-febe-495a-ab11-090c40d08761");
  background-size: cover;
  background-blend-mode: overlay;
  width: 100vw;
  height: 100vh;
  animation: flicker 0.8s steps(3) infinite;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > .main {
    position: relative;
    padding: 2vh 0vw;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
      }
      span {
        color: #723e30;
        font-family: "Oleo Script";
        font-size: max(4vw, 32px);
        font-weight: 400;
      }
    }
    > .sponsor-wrapper {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      .loader {
        margin: auto;
      }
      .sponsor-track {
        width: calc(24 * 300px);
        height: 200px;
        display: flex;
        background: url(${reel});
        background-position: center left;
        background-size: contain;
        background-repeat: repeat-x;
        background-blend-mode: color-burn;
        &:last-child {
          animation: scroll-2 30s linear infinite reverse;
          @keyframes scroll-2 {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-300px * 12));
            }
          }
        }
        animation: scroll-1 40s linear infinite;
        @keyframes scroll-1 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-300px * 12));
          }
        }
        .sponsor {
          height: 100%;
          aspect-ratio: 3/2;
          > img {
            padding: 20px;
            width: 300px;
            height: 200px;
            object-fit: contain;
          }
        }
      }
    }
  }
`;
