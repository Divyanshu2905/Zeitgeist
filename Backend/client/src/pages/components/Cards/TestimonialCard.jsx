import React from "react";
import { styled } from "styled-components";
export const Testimonials = ({ name, details, testimonial, selected }) => {
  return (
    <CardContainer selected={(selected)}>
      <div className="heading">
        <div className="name">{name ? name : "Jatin Verma"}</div>
        <div className="details">
          {details
            ? details
            : "Institute of Hotel Management, Catering Technology and Applied Nutrition, Mumbai [IHM Mumbai]"}
        </div>
      </div>
      <div className="testimonial">
        {testimonial
          ? testimonial
          : "Being a Campus Ambassador for IIT Ropar was a great learning curve. I got a chance to work with some great minds and improve my professional skills."}
      </div>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  border-width: 2px;
  border-style: solid;
  padding: 10px 16px;
  border-color: ${(props) => (props.selected ? "#F8F2D8" : "transparent")};
  transition: border-color ease 0.3s;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 32%;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 6px;
  background: rgba(61, 13, 0, 0.3);
  > .heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 50%;
    overflow-y: hidden;
    .name {
      display: inline-block;
      color: var(--light-1, #e6d6b5);
      font-family: "Jost";
      font-size: 2vmax;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      height: 50%;
    }
    .details {
      height: 50%;
      color: var(--light-1, #e6d6b5);
      font-family: "Jost";
      font-size: 1vmax;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .testimonial {
    width: 100%;
    height: fit-content;
    color: var(--lightest, #f8f2d8);
    font-family: "Jost";
    font-size: 1.2vmax;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
