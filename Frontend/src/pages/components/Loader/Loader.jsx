import React from "react";
import complex from "../resources/complex.svg";
import styled from "styled-components";
export const Loader = () => {
  return (
    <LoaderContainer className="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 512 512"
        style={{ fill: "#885243" }}
      >
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-96-32a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zM96 240c0-35 17.5-71.1 45.2-98.8S205 96 240 96c8.8 0 16-7.2 16-16s-7.2-16-16-16c-45.4 0-89.2 22.3-121.5 54.5S64 194.6 64 240c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
      </svg>
      <img src={complex} alt="" />
    </LoaderContainer>
  );
};
const LoaderContainer = styled.div`
  height: 100%;
  min-height: 30px;
  max-height: 100px;
  aspect-ratio: 1/1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  > svg {
    width: 60%;
    height: 60%;
    z-index: 1;
    animation: rotatingDisk 2s linear infinite;
    @keyframes rotatingDisk {
      from {
        rotate: 0deg;
      }
      to {
        rotate: 360deg;
      }
    }
  }
  > img {
    position: absolute;
    width: 40%;
    height: 40%;
    z-index: 2;
    top: 23%;
    right: 0%;
  }
`;
