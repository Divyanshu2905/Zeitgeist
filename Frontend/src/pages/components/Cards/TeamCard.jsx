import React from "react";
import styled from "styled-components";
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

import pin from "../resources/pin.svg";
import frame from "../resources/frame.svg";

export const TeamCard = ({ data }) => {
  return (
    <CardContainer>
      <div className="pin"></div>
      <div className="frame">
        <img src={data.Image} alt="" />
        <div className="social-media">
          <a href={data.Instagram} target="_blank">
            <FaInstagram />
          </a>
          <a href={data.LinkedIn} target="_blank">
            <FaLinkedin />
          </a>
          <a href={`https://wa.me/+91${data.Number}`} target="_blank">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="contact-details">
        <div className="name">{data.Name}</div>
        <div className="position">{data.Position}</div>
      </div>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 21%;
  @media screen and (max-width: 820px) {
    width: 40%;
  }
  aspect-ratio: 23/30;
  border-radius: 2px;
  background: #fff;
  box-shadow: 1.6px 1.6px 6.4px 0px rgba(0, 0, 0, 0.25),
    -1.6px -1.6px 6.4px 0px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: visible;
  .pin {
    background-image: url(${pin});
    position: absolute;
    top: 0;
    left: 50%;
    translate: -50% -50%;
    width: 10%;
    aspect-ratio: 4/5;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .frame {
    overflow: hidden;
    aspect-ratio: 1/1;
    width: 90%;
    background-image: url(${frame});
    background-position: center;
    background-size: cover;
    border-radius: 2px;
    border: 0.8px solid var(--dark2, #a3724f);
    position: relative;
    cursor: pointer;
    box-shadow: 1.6px 1.6px 3.2px 0px rgba(0, 0, 0, 0.25) inset,
      -1.6px -1.6px 3.2px 0px rgba(0, 0, 0, 0.25) inset;
    > img {
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
      object-position: center bottom;
    }
    &:hover {
      .social-media {
        bottom: -2px;
      }
    }
    .social-media {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: -50%;
      transition: all 0.3s ease-in-out;
      background: rgba(114, 62, 48, 0.45);
      backdrop-filter: blur(5px);
      gap: 10px;
      > a {
        width: 20%;
        aspect-ratio: 1/1;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 70%;
          height: 70%;
          fill: var(--lightest, #f8f2d8);
        }
      }
    }
  }
  .contact-details {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
    .name {
      color: var(--more-darkest, #4c281e);
      text-align: center;
      font-family: "Viga";
      font-size: 1.25vmax;
      font-weight: 400;
      text-transform: capitalize;
    }
    .position {
      color: var(--darkestt, #723e30);
      text-align: center;
      font-family: "Jost";
      font-size: 1vmax;
      font-weight: 400;
    }
  }
`;
