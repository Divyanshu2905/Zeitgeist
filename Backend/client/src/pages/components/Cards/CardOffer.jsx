import React from "react";
import { styled } from "styled-components";

export const CardOffer = ({ imageUrl, description, heading }) => {
  return (
    <CardContainer className="img">
      <div className="wrapper">
        <div className="image-container">
          <img src={imageUrl} alt="" />
        </div>
        <div className="description-container">
          <div className="heading">{heading}</div>
          <div className="description">{description}</div>
        </div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  width: 390px;
  height: 552px;
  padding: 55px 39px 56px 39px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: linear-gradient(
    to top,
    rgba(248, 242, 216, 0.5) 0%,
    rgba(248, 242, 216, 0.2) 100%
  );
  backdrop-filter: blur(2px);
  transform-style: preserve-3d;
  position: absolute;
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    .image-container {
      display: flex;
      width: 312px;
      height: 170px;
      justify-content: center;
      align-items: center;
      img {
        margin: auto;
        height: 100%;
      }
    }
    .description-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      .heading {
        color: #632f21;
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15);
        font-family: Jost;
        font-size: 28px;
        font-weight: 500;
        text-align: center;
      }
      .description {
        width: 278px;
        color: var(--darkestt, #723e30);
        text-align: center;
        text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.15);
        font-family: Jost;
        font-size: 20px;
        font-weight: 400;
      }
    }
  }
`;
