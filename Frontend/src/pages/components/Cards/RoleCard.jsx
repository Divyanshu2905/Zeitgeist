import React from "react";
import styled from "styled-components";

export const RoleCard = ({ heading, point1, point2, image }) => {
  return (
    <CardContainer className="Card">
      <div className="content">
        <h1 className="head">{heading}</h1>
        <ul>
          <li className="points">{point1}</li>
          <li className="points">{point2}</li>
        </ul>
      </div>
      <div className="circle">
        <img src={image} alt="" />
      </div>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  position: relative;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fbackgrounds%2FroleCard.svg?alt=media&token=cd748fe5-bdab-48bc-9b90-114a27c9d1c0");
  background-size: contain;
  background-repeat: no-repeat;
  padding: 10px;
  width: 30%; /* Set the width to 100% to match the parent container */
  aspect-ratio: 1.11/1;
  color: #f8f2d8;
  font-family: "Jost";
  font-weight: 400;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      position: relative;
      font-size: 2vmax;
      font-weight: 500;
      &::before {
        content: "";
        width: 100%;
        position: absolute;
        bottom: 0;
        height: 1px;
        background-color: #f8f2d8b5;
      }
      @media screen and (max-width: 820px) {
        font-size: 3vh;
      }
    }
    ul {
      list-style-type: disc;
      padding-inline: 15%;
      height: 100%;
      @media screen and (max-width: 820px) {
        overflow-y: auto;
      }
      .points {
        margin: 12px 0;
        font-size: 2vmin;
        @media screen and (max-width: 820px) {
          margin: 24px 0;
          font-size: 1.8vh;
        }
      }
    }
  }
  .circle {
    position: absolute;
    width: 24%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    border: 2px solid var(--dark2, #a3724f);
    background: var(--light1, #e6d6b5);
    top: 0;
    left: 0;
    translate: -30% -30%;
    overflow: hidden;
    > img {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`;
