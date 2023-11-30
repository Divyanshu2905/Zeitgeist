import React from "react";
import { styled } from "styled-components";
// import EllipseBorder from "../../CA/resources/Ellipse.png";


export const CircularCard = ({ direction, heading, description, image }) => {
  const rotating = {
    animationName: `chakri${direction}`,
    animationDuration: '4s',
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite'

  }
  const keyframes = 
    ` @keyframes chakri${direction}{
      0%{
        transform: rotate(0deg)
      }
      100%{
        transform: rotate(${direction})
      }
    }
  }`
  return (
    <CardContainer className="circular-card" direction={direction} >
      <style>{keyframes}</style>
      <div className="rotating" style={{ ...rotating }}></div>
      <div
        className="carry"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "66% 66%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="content">
        <div className="headline">{heading}</div>
        <div className="description">{description}</div>
      </div>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  width: 25vw;
  aspect-ratio: 1/1;
  background: var(--lightest, #f8f2d8);
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .rotating {
    
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FEllipse.png?alt=media&token=01a84f07-64dc-45de-9758-39d723adec8b");
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    height: 100%;
    z-index: 0;
    
  }
  .carry {
    position: absolute;
    top: 0;
    left: 0;
    width: 28%;
    height: 28%;
    border-radius: 50%;
    border: 2px solid var(--darkestt, #723e30);
    background-color: var(--lightest, #f8f2d8);
  }
  .content {
    width: 70%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    padding: 2vw 2vw;
    .headline {
      color: #4c281e;
      font-family: "Jost";
      font-weight: 500;
      text-align: center;
      font-size: 1.6vmax;
    }
    .description {
      color: var(--darkestt, #723e30);
      text-align: center;
      font-family: "Jost";
      font-weight: 400;
      text-align: center;
      font-size: 1vmax;
    }
  }
`;
