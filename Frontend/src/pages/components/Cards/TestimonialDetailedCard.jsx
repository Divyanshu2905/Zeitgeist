import React from "react";
import styled from "styled-components";

export const TestimonialDetailedCard = ({ name, college, description }) => {
  return (
    <CardContainer>
      <div className="name">{name}</div>
      <div className="college-details">{college}</div>
      <div className="review">
        <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fcommas.png?alt=media&token=b6de8c8b-cfdd-40f4-8c46-48413ad04d29" alt="" />
        {description}
        <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2Fcommas.png?alt=media&token=b6de8c8b-cfdd-40f4-8c46-48413ad04d29" alt="" style={{ transform: "scaleX(-1)" }} />
      </div>
    </CardContainer>
  );
};
const CardContainer = styled.div`
  .name {
    height: fit-content;
    color: var(--darkestt, #723e30);
    text-align: right;
    text-shadow: 2px 2px 0px rgba(114, 62, 48, 0.2);
    font-family: "Jost";
    font-size: 3vmax;
    font-weight: 500;
  }
  .college-details {
    color: var(--dark2, #a3724f);
    text-align: right;
    text-shadow: 1px 1px 0px rgba(114, 62, 48, 0.2);
    font-family: "Jost";
    font-size: 1.2vmax;
    font-weight: 400;
  }
  .review {
    color: var(--dark-extra-2, #b2805c);
    font-family: 'Jost';
    font-size: 1.3vmax;
    font-weight: 400;
    text-indent: 50px;
    text-align: justify;
    position: relative;
    img{
        width: 10%;
        position: absolute;
        &:first-child{
          top: 0;
            translate: -10% 0%;
        }
        &:last-child{
            right: 0;
            bottom: 0;
            translate: 0% 50%;
        }
    }
  }
  @media screen and (max-width: 768px){
    .name {
        font-size: 5vmax;
    }
    .college-details {
      font-size: 2.5vmax;
      
    }
    .review {
      font-size: 2vmax;
    img{
        &:first-child{
            translate: 0% 0%;
        }
        &:last-child{
            translate: 0% 0%;
        }
    }
    }
}
`;
