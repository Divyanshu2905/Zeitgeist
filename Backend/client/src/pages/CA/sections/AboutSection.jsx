import { SideLines } from "../../components/SideLines";
import { styled } from "styled-components";
import React from "react";

export const AboutSection = () => {
  return (
    <AboutContainer className="section about"> 
      <div className="heading">
        <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDarkArrow.svg?alt=media&token=5abc1a03-3f83-469b-b2c0-91c7d062b47f" alt="" />
        <span>About Us</span>
        <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDarkArrow.svg?alt=media&token=5abc1a03-3f83-469b-b2c0-91c7d062b47f" alt="" />
      </div>
      <div className="main">
        <div className="slideshow-wrapper">
          <div className="slideshow">
            <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FaboutPic.png?alt=media&token=86fdbc75-487c-4710-b014-f0790667d1b9" alt="" />
          </div>
        </div>
        <div className="content">
          <p>
            Considered to be one of the magnificent fests of North India,
            Zeitgeist is the annual fest of IIT Ropar. Inviting a footfall of
            over 40000 people from colleges all over North India, one can easily
            get lost in the maze of cultural events Zeitgeist has to offer. Over
            the course of the last few years, Zeitgeist has seen many phenomenal
            performances by outstanding talents including Vishal-Shekhar, Diljit
            Dosanjh, Mohit Chauhan, Zakir Khan, Sunanda Sharma. So, We invite
            you to collaborate with us as a Campus Ambassador and spread the
            word.
          </p>
        </div>
      </div>
      <SideLines></SideLines>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fbackgrounds%2FzigZag.png?alt=media&token=7955a26a-e4b5-424a-9932-39ca1bf21b0c");
  background-blend-mode: normal !important;
  .main{
    width: 75vw;
    display: flex;
    gap: 24px;
    .slideshow-wrapper{
      width: fit-content;
      aspect-ratio: 0.8/1;
      background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FAboutPicBg.svg?alt=media&token=14359176-38c0-4ea3-ba87-37f10aac0c17");
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      padding: min(46px, 3vmax);
      .slideshow{
        padding: 10px;
        width: 100%;
        height: 100%;
        aspect-ratio: 0.728/1;
        img{
          border: 4px solid var(--lightest, #F8F2D8);
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    .content {
      flex: 1;
      display: flex;
      align-items: center;
      padding-bottom: 26px;
      p {
        color: var(--darkestt, #723e30);
        text-align: justify;
        font-family: Jost;
        font-size: 1.6vw;
        font-weight: 400;
        letter-spacing: 0.52px;
      }
    }
  }
  @media screen and (max-width: 1280px) {
    .main{
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      .content{
        flex: 0;
        p{
          font-size: 2vh;
        }
      }
    }
  }
`;
