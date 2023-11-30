import React from "react";
import { styled } from "styled-components";
export const TicketButton = ({ text, onclick }) => {
  return (
    <ButtonContainer onClick={onclick}>
      <span>{text?text:'BUTTON'}</span>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.button`
  display: flex;
  max-width: 100px;
  min-width: 90px;
  aspect-ratio: 2.5/1;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: var(--lightest, #f8f2d8);
  box-shadow: 4px 4px 0px 0px rgba(114, 62, 48, 0.8);
  span {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    padding: 4.608px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2.4px dashed var(--darkestt, #723e30);
    border-bottom: 2.4px dashed var(--darkestt, #723e30);
    border-width: 2px 0;
    color: var(--dark-2, #a3724f);
    font-family: 'Jost';
    font-size: max(1vw, 1.4vh);
    font-weight: 500;
    text-transform: uppercase;
  }
`;
