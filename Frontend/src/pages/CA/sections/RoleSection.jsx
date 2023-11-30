import { styled } from "styled-components";
import React from "react";
import { SideLines } from "../SideLines";
import { RoleCard } from "../../components/Cards/RoleCard";

export const RoleSection = () => {
  const points = [
    {
      heading: "Liaison Role",
      point1:
        "Ensure all updates from the Zeitgeist 23 Team reach college students.",
      point2: "Handle any queries between students and the Zeitgeist 23 Team.",
    },
    {
      heading: "Promotion",
      point1:
        "Drive publicity via social media, posters, campaigns, and more !",
      point2:
        "Publicaly promote host Zeitgeist 23 - related events and workshops.",
    },
    {
      heading: "Coordination",
      point1:
        "Facilitate the organizing of Zeitgeist' s publicity drives and flash mobs in your college.",
      point2: "Collect and relay ground-level feedback from your college peers",
    },
  ];

  const images = [
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fpuzzle.png?alt=media&token=941a6b84-22e9-43a5-8083-7de6271aed42",
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fspeaker.png?alt=media&token=108fddbc-896b-4934-a2e2-c8a66dc7318f",
    "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fshake.png?alt=media&token=6c956274-371f-43db-a222-5321b08db5e0",
  ];
  return (
    <RoleContainer className="section role">
      <SideLines></SideLines>
      <div className="heading">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDarkArrow.svg?alt=media&token=5abc1a03-3f83-469b-b2c0-91c7d062b47f"
          alt=""
        />
        <span>What will you do?</span>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDarkArrow.svg?alt=media&token=5abc1a03-3f83-469b-b2c0-91c7d062b47f"
          alt=""
        />
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDotted2.svg?alt=media&token=7c859de8-4395-4998-9751-c88735fb0780"
        alt=""
      />
      <div className="cards">
        {points.map((card, cardIndex) => {
          return (
            <RoleCard
              key={cardIndex}
              heading={card.heading}
              point1={card.point1}
              point2={card.point2}
              image={images[cardIndex]}
            />
          );
        })}
      </div>
    </RoleContainer>
  );
};

export const RoleContainer = styled.section`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fbackgrounds%2Fdiamond.png?alt=media&token=eff36787-ce66-4811-a18f-f212df732a40");
  .cards {
    width: 85%;
    padding: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .Card:first-child {
      translate: 0 -20%;
    }
    .Card:last-child {
      translate: 0 20%;
    }
    @media screen and (max-width: 820px) {
      flex-direction: column;
      gap: 70px;
      .Card {
        width: 70vw;
        height: 63vw;
        padding: 7%;
      }
      .Card:first-child {
        translate: 0 0%;
      }
      .Card:last-child {
        translate: 0 0%;
      }
    }
  }
  > img {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    width: 100%;
    z-index: 0;
    @media screen and (max-width: 820px) {
      rotate: 55deg;
      scale: 2.5;
    }
  }
`;
