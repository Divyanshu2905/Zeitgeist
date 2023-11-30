import { styled } from "styled-components";
import { CircularCard } from "../../components/Cards/CircularCard";
import React from "react";
import { SideLines } from "../SideLines";

export const ParticipateSection = () => {
  const description = [
    {
      title: "Benifits and Perks",
      content:
        "Free entry with 60+ participation Certificates of participation eligible for display in your resume as a marketing internship. Exclusive access to events & night shows. Free entry for star nights and events at 50+ points.",
    },
    {
      title: "Skill Development",
      content:
        "Refine your oratory and managerial skills. Boost your CV and increase your chances with top-tier companies.",
    },
    {
      title: "Networking and Recognition",
      content:
        "Engage with a nationwide student community. Connect and interact with like-minded peers. Represent your college at a national level, showcasing leadership.",
    },
  ];
  const images = [
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fgift.png?alt=media&token=d4ad7fe4-0a7e-4b9a-8fb6-af4724245f1c",
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fbulb.png?alt=media&token=1d3a483c-e58a-4b2e-b0f8-3d7955e7607f",
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fnetwork.png?alt=media&token=5b14f780-d2c0-4805-a2f2-c76602d4fbf4",
  ];
  return (
    <ParticipateContainer className="section participate">
      <SideLines></SideLines>
      <div className="heading">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
          alt=""
        />
        <span>Why Participate?</span>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
          alt=""
        />
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDotted1.svg?alt=media&token=a41eaa3f-01aa-4363-b1a0-b2486a5ae8ef"
        alt=""
      />
      <div className="cards">
        {description.map((element, index) => (
          <CircularCard
            key={index}
            heading={element.title}
            direction={index === 1 ? "360deg" : "-360deg"}
            description={element.content}
            image={images[index]}
          ></CircularCard>
        ))}
      </div>
    </ParticipateContainer>
  );
};
const ParticipateContainer = styled.section`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fbackgrounds%2Fmountains.png?alt=media&token=a08a1bce-22cb-4c34-97a3-2a0df781cc7a");
  .cards {
    width: 85%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    > div:nth-child(2) {
      translate: 0 -25%;
    }
    @media screen and (max-width: 820px) {
      flex-direction: column;
      > div:nth-child(2) {
        translate: 0 0;
      }
      gap: 24px;
      .circular-card {
        width: 25vh;
      }
    }
  }
  > img {
    width: 100%;
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    z-index: 0;
    @media screen and (max-width: 820px) {
      rotate: 60deg;
      scale: 2.5;
    }
  }
`;
