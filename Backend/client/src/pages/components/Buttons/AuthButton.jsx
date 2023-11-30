import React from "react";
import { styled } from "styled-components";

export const AuthButton = ({isGoogle , text, registered, onclick}) => {
  const googleText = registered ? "SignIn with Google" : "SignUp with Google";
  return (
    <ButtonContainer>
      <button onClick={onclick}>
        {isGoogle ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M16.9663 8.97479L16.8913 8.68313H10.6913V11.3165H14.3996C14.1927 12.12 13.7222 12.8309 13.0636 13.3355C12.4049 13.8401 11.596 14.1092 10.7663 14.0998C9.68362 14.0909 8.64338 13.6777 7.8496 12.9415C7.45939 12.5568 7.14887 12.0991 6.9358 11.5943C6.72274 11.0895 6.61132 10.5477 6.60793 9.99979C6.62053 8.89935 7.0562 7.84597 7.8246 7.05813C8.60718 6.31676 9.64664 5.90755 10.7246 5.91646C11.6478 5.92357 12.5367 6.26728 13.2246 6.88313L15.0579 4.99979C13.8496 3.92176 12.2856 3.32819 10.6663 3.33313C9.77546 3.32784 8.89234 3.49805 8.06732 3.83407C7.24231 4.17008 6.49155 4.6653 5.85793 5.29146C4.65268 6.54336 3.97315 8.20963 3.9592 9.94735C3.94525 11.6851 4.59794 13.362 5.78293 14.6331C6.43947 15.2872 7.21978 15.8039 8.07827 16.1531C8.93676 16.5022 9.85622 16.6767 10.7829 16.6665C11.6233 16.6727 12.4562 16.5083 13.2311 16.1831C14.0061 15.8579 14.707 15.3788 15.2913 14.7748C16.4379 13.514 17.0581 11.862 17.0246 10.1581C17.0336 9.76279 17.0141 9.36733 16.9663 8.97479Z"
              fill="#F8F2D8"
            />
          </svg>
        ) : null}

        <span>{isGoogle ? googleText : text}</span>
      </button>
    </ButtonContainer>
  );
};
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6px 0px;
  margin-bottom: 1vmin;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background: var(--darkestt, #723e30);
  button {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-size: max(1vw, 1.6vh);
    &:disabled{
      background-color: red;
    }
  }
  svg {
    width: max(1vw, 1.6vh);
    aspect-ratio: 1/1;
  }
  span {
    color: var(--lightest, #f8f2d8);
    font-family: Jost;
    font-weight: 400;
  }
`;
