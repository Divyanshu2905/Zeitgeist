import React, { useState } from "react";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import underline from "../resources/Underline.svg"
import dabba from "../resources/dabba.svg";
import Accomodations  from "./Categories/Accomodation"
import Competitions  from "./Categories/Competetions"
import Registrations  from "./Categories/Registrations";

export const Faq = () => {
  const categories = ["Registrations", "Amenities/Passes", "Participation"]
  const [category, setCategory] = useState("Registrations"); 
   return (
     <FaqContainer>
       <Navbar></Navbar>
       <div className="main">
         <div className="heading">
           <img
             src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
             alt=""
           />
           <span>FAQs</span>
           <img
             src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLightArrow.svg?alt=media&token=400a5de8-8ec6-4e18-a1c7-2b0de6974136"
             alt=""
           />
         </div>
         <div className="categories">
           {categories.map((element) => (
             <>
               <div
                 className={`category ${category === element ? "active" : ""}`}
                 key={element}
                 onClick={() => setCategory(element)}
               >
                 {element}
               </div>

               {category === element ? (
                 <div className="mobile-questions">
                   {category === "Registrations" ? (
                     <Registrations />
                   ) : category === "Participation" ? (
                     <Competitions />
                   ) : (
                     <Accomodations />
                   )}
                 </div>
               ) : null}
             </>
           ))}
         </div>
         <div className="faq-wrapper">
           <div className="faq-container">
             {category === "Registrations" ? (
               <Registrations />
             ) : category === "Participation" ? (
               <Competitions />
             ) : (
               <Accomodations />
             )}
           </div>
         </div>
       </div>
     </FaqContainer>
   );
};
const FaqContainer = styled.div`
  background-color: #a57052;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FFaqBg.png?alt=media&token=cba57bce-2f84-4480-880a-9db382a79f80");
  background-size: cover;
  background-blend-mode: luminosity;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > .main {
    position: relative;
    padding: 2vh 5vw;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      img {
        display: flex;
        align-items: center;
        width: 10vw;
        max-width: 160px;
        min-width: 80px;
        &:last-child {
          scale: -1;
        }
      }
      span {
        color: var(--light1, #e6d6b5);
        font-family: "Oleo Script";
        font-size: max(3vw, 28px);
        font-weight: 400;
      }
    }
    > .categories {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      font-size: 1.75vmax;
      @media screen and (max-width: 1024px) {
        font-size: 2vmax;
        flex-direction: column;
        flex: 1;
        justify-content: space-evenly;
      }
      .category {
        width: 33.33%;
        text-align: center;
        color: var(--light1, #e6d6b5);
        font-family: Oleo Script;
        font-weight: 400;
        text-transform: capitalize;
        cursor: pointer;
        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 14px;
          top: 100%;
          left: 0;
          background-image: url(${underline});
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          transform-origin: center;
          transform: scaleX(0);
          transition: all 0.2s ease-in-out;
        }
        &.active {
          position: relative;
          &::after {
            transform: scaleX(1);
          }
        }
      }
      .mobile-questions {
        display: none;
        @media screen and (max-width: 1024px) {
          display: block;
        }
      }
    }
    > .faq-wrapper {
      @media screen and (max-width: 1024px) {
        display: none;
      }
      height: 80%;
      display: flex;
      align-items: center;
      > .faq-container {
        height: 90%;
        max-width: 100%;
        margin: auto;
        aspect-ratio: 1.97/1;
        background-image: url(${dabba});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        display: flex;
        align-items: center;
        .questions-wrapper {
          margin: auto;
          overflow-y: auto;
          width: 80%;
          height: 80%;
        }
      }
    }
  }
`;
