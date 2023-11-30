import React from "react";
import { styled } from "styled-components";

export const Fancy = ({ text, onClick, variant}) => {
  return (
    <ButtonContainer className="fancy-btn" onClick={onClick} variant={variant}>
      <div className="left" />
      <button>{text}</button>
      <div className="right" />
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  //Use ratio as 5.358:1 when importing somewhere
  width: 40vmin;
  aspect-ratio: 5.358/1;
  > div {
    width: 18.03%;
    height: 69.643%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  > .left {
    background-position: bottom right;
    background-image: ${(props) =>
      props.variant === "light"
        ? "url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FFancyBtnPartLeft1.png?alt=media&token=96d52e5c-f7ce-45c9-99f1-551a437f74d3)"
        : "url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FFancyBtnLeft.svg?alt=media&token=9bc2a85f-b588-4f65-85f1-d40edabb11f0)"};

    translate: 39%;
    border: none;
  }
  > .right {
    border: none;
    translate: -39%;
    background-position: bottom left;
    background-image: ${(props) =>
      props.variant === "light"
        ? "url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FFancyBtnPartRight1.png?alt=media&token=76198434-76a1-4f18-9b2e-aac62c1e1e12)"
        : "url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FFancyBtnRight.svg?alt=media&token=44ea46fe-5fef-498a-8537-f202cfff48d1)"};
  }
  button {
    padding-bottom: 4%;
    height: 100%;
    width: 63.94%;
    flex: 1;
    font-size: 2vmin;
    background-image: ${(props) =>
      props.variant === "light"
        ? "url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FFancyBtn_base.png?alt=media&token=49d2c6da-2336-462a-9a23-b7c66e3939b4)"
        : "url(https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FFancyBtnCenter.svg?alt=media&token=d9bf05b7-f9a8-437c-85d0-9cf916525cd2)"};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    color: ${(props) =>
      props.variant === "light"
        ? "var(--darkestt, #723e30)"
        : "var(--lightest, #F8F2D8)"};
    text-align: center;
    font-family: "Jost";
    font-weight: 600;
    letter-spacing: 2px;
  }
`;
