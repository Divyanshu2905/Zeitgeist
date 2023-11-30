import { Carousel } from "../../components/Carousel/Carousel";
import { SideLines } from "../SideLines";
import { styled } from "styled-components";
import React from "react";

export const OffersSection = () => {
  return (
    <OffersContainer className="section offers">
      <SideLines></SideLines>
      <div className="heading">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
          alt=""
        />
        <span>What we offer!</span>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
          alt=""
        />
      </div>
      <Carousel />
    </OffersContainer>
  );
};

export const OffersContainer = styled.section`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fbackgrounds%2Fmesh.png?alt=media&token=1185c5bf-a2c4-47a8-825f-5e3b89fa26c0");
  gap: 0 !important;
  height: 100vh !important;
`;
