import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SideLines } from "../../SideLines";
import { Testimonials } from "../../../components/Cards/TestimonialCard";
import { TestimonialDetailedCard } from "../../../components/Cards/TestimonialDetailedCard";

//Ca data
import CA_DATA from "./Data.json";

export const TestimonialsSection = () => {
  const testimonialsArray = CA_DATA.testimonials;
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <TestimonialsContainer className="section testimonials">
      <SideLines></SideLines>
      <div className="heading">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDarkArrow.svg?alt=media&token=5abc1a03-3f83-469b-b2c0-91c7d062b47f"
          alt=""
        />

        <span>Testimonials</span>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDarkArrow.svg?alt=media&token=5abc1a03-3f83-469b-b2c0-91c7d062b47f"
          alt=""
        />
      </div>
      <div className="wrapper">
        <div className="list-container">
          {testimonialsArray.map((element, index) => (
            <Testimonials
              key={index}
              name={element.name}
              details={element.college}
              testimonial={element.description}
              selected={index === selected ? true : false}
            />
          ))}
        </div>
        <div className="nav-btn">
          <button
            className={`btn ${selected === 0 ? "active" : ""}`}
            onClick={() => {
              setSelected(0);
            }}
          ></button>
          <button
            className={`btn ${selected === 1 ? "active" : ""}`}
            onClick={() => {
              setSelected(1);
            }}
          ></button>
          <button
            className={`btn ${selected === 2 ? "active" : ""}`}
            onClick={() => {
              setSelected(2);
            }}
          ></button>
        </div>
        <div className="full-container">
          <div className="detailed-view">
            <TestimonialDetailedCard
              name={testimonialsArray[selected].name}
              college={testimonialsArray[selected].college}
              description={testimonialsArray[selected].description}
            />
          </div>
        </div>
      </div>
    </TestimonialsContainer>
  );
};
const TestimonialsContainer = styled.section`
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fbackgrounds%2Fdiamond.png?alt=media&token=eff36787-ce66-4811-a18f-f212df732a40");
  .wrapper {
    width: 80%;
    aspect-ratio: 1.8/1;
    border-radius: 20px;
    background: var(--dark-extra-2, #b2805c);
    box-shadow: 4px 6px 0px 0px rgba(114, 62, 48, 0.8);
    padding: 25px;
    display: flex;
    justify-content: space-between;
    > div {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .list-container {
      justify-content: space-between;
      width: 50%;
    }
    .nav-btn {
      justify-content: center;
      z-index: 1;
      .btn {
        cursor: pointer;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #8e6053;
        transition: all ease-out 0.3s;
        margin: 5px 15px;
        &.active {
          background-color: var(--lightest, #f8f2d8);
        }
      }
    }
    .full-container {
      flex: 1;
      justify-content: center;
      padding: 10% 0;
      display: flex;
      .detailed-view {
        flex: 1;
        width: 100%;
        display: flex;
        padding: 12px 24px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        border-radius: 12px;
        background: var(--lightest, #f8f2d8);
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
      flex: 1;
      .list-container {
        display: none;
      }
      .nav-btn {
        flex-direction: row;
        height: fit-content;
        .btn {
          margin: 0px 5px;
          width: 10px;
          height: 10px;
        }
      }
      .full-container {
        padding: 3% 0;
      }
    }
  }
`;
