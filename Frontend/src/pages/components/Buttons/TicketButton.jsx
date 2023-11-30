import React from "react";
import { styled } from "styled-components";
export const TicketButton = ({ text, onclick }) => {
  return (
    <ButtonContainer onClick={onclick}>
      <div className="border-container">
        <span>{text ? text : "BUTTON"}</span>
      </div>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.button`
  display: flex;
  padding: 2px 4px;
  aspect-ratio: 2.5/1;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background: var(--lightest, #f8f2d8);
  box-shadow: 4px 4px 0px 0px rgba(114, 62, 48, 0.8);
  &.active{
    color: red;
  }
  .border-container {
    border-top: 1px dashed rgba(114, 62, 48, 0.5);
    border-bottom: 1px dashed rgba(114, 62, 48, 0.5);
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  span {
    padding: 0px 6px;
    color: var(--dark-2, #a3724f);
    font-family: "Jost";
    font-size: clamp(10px, 1vmax, 18px);
    font-weight: 500;
    text-transform: uppercase;
  }
`;
