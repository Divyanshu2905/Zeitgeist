import React from "react";
import { styled } from "styled-components";
export const DashboardButton = ({ text, onclick }) => {
  return (
    <ButtonContainer onClick={onclick}>
      {text ? text : "Leaderboard"}
    </ButtonContainer>
  );
};
const ButtonContainer = styled.button`
  min-width: 10vmax; 
  padding: 10px 18px;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  border: 2px solid var(--dark-2, #a3724f);
  background: var(--lightest, #f8f2d8);
  box-shadow: 4px 4px 0px 0px rgba(114, 62, 48, 0.8);
  @media screen and (max-width: 768px){
    padding: 4px 4px;
    box-shadow: 2px 2px 0px 0px rgba(114, 62, 48, 0.8);
  }
  &.active {
    background: var(--dark-2, #a3724f);
    span{
      color: var(--lightest, #F8F2D8);
    }
  }
    color: var(--dark-2, #a3724f);
    font-family: 'Jost';
    font-size: 1.2vmax;
    font-weight: 500;
    text-transform: uppercase;
`;
