import React from "react";
import { styled } from "styled-components";

export const Fancy = ({ text, onClick }) => {
  return (
    <ButtonContainer className="fancy-btn" onClick={onClick}>
      <div className="left"/>
        <button>{text}</button>
      <div className="right"/>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  //Use ratio as 5.358:1 when importing somewhere
  width: 40vmin;
  aspect-ratio: 5.358/1;
  >div{
    width: 18.03%;
    height: 69.643%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .left {
    background-position:bottom right;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FFancyBtnPartLeft1.png?alt=media&token=96d52e5c-f7ce-45c9-99f1-551a437f74d3");
    translate: 39%;
  }
  .right {
    translate: -39%;
    background-position:bottom left;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FFancyBtnPartRight1.png?alt=media&token=76198434-76a1-4f18-9b2e-aac62c1e1e12");
  }
  button {
    padding-bottom: 4%;
    height: 100%;
    width: 63.94%;
    flex: 1;
    font-size: 2vmin;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FFancyBtn_base.png?alt=media&token=49d2c6da-2336-462a-9a23-b7c66e3939b4");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    color: var(--darkestt, #723e30);
    text-align: center;
    font-family: 'Jost';
    font-weight: 600;
    letter-spacing: 2px;
  }
`;
