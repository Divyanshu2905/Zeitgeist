import React, { useState } from "react";
import { styled } from "styled-components";
export const FormInput = ({ placeholder, onchange, value, name, type }) => {
  const [visibility, setVisibility] = useState(
    type === "password" ? false : true
  );
  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <InputContainer>
      {type === "select" ? (
        <>
          <select
            id="genderSelect"
            name={name}
            value={value}
            onChange={onchange}
          >
            <option name="gender" value="Gender">
              Gender
            </option>
            <option name="gender" value="Male">
              Male
            </option>
            <option name="gender" value="Female">
              Female
            </option>
            <option name="gender" value="Prefer not say">
              Prefer not say
            </option>
          </select>
        </>
      ) : (
        <input
          type={visibility ? (type === "password" ? "text" : type) : "password"}
          placeholder={placeholder ? placeholder : "Input field"}
          name={name}
          onChange={onchange}
          value={value}
        />
      )}

      {placeholder === "Password" || placeholder === "Confirm Password" ? (
        <div className="eye" onClick={toggleVisibility}>
          {visibility ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17ZM12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5Z"
                  fill="#723E30"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g opacity="0.4">
                <path
                  d="M9.84 6.08039C10.5178 5.76893 11.2541 5.60531 12 5.60039C13.4322 5.60039 14.8057 6.16932 15.8184 7.18201C16.8311 8.19471 17.4 9.56822 17.4 11.0004C17.3986 11.6364 17.2806 12.2668 17.052 12.8604L20.4 15.9684C21.8948 14.5474 23.1151 12.8633 24 11.0004C24 11.0004 20.4 2.60039 12 2.60039C10.3454 2.59284 8.70853 2.94068 7.2 3.62039L9.84 6.08039ZM2.4 1.40039L1.2 2.60039L4.26 5.48039C2.46672 6.99948 1.01496 8.88063 0 11.0004C0 11.0004 3.6 19.4004 12 19.4004C13.9433 19.4099 15.8578 18.9313 17.568 18.0084L21.6 21.8004L22.8 20.6004L2.4 1.40039ZM12 16.4004C10.5678 16.4004 9.19432 15.8315 8.18162 14.8188C7.16893 13.8061 6.6 12.4326 6.6 11.0004C6.60663 10.0728 6.85477 9.16292 7.32 8.36039L9.156 10.0884C9.05658 10.3823 9.00394 10.6901 9 11.0004C8.99879 11.4888 9.11731 11.9701 9.3452 12.402C9.57309 12.834 9.9034 13.2035 10.3072 13.4783C10.711 13.753 11.176 13.9246 11.6615 13.9779C12.147 14.0313 12.6382 13.9648 13.092 13.7844L14.94 15.5244C14.0662 16.0964 13.0444 16.4008 12 16.4004Z"
                  fill="#723E30"
                />
              </g>
            </svg>
          )}
        </div>
      ) : null}
    </InputContainer>
  );
};
const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 4px 8px;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  border: 2px solid var(--darkestt, #723e30);
  /* margin-bottom: 24px; */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  input,
  select {
    width: 80%;
    background-color: transparent;
    color: #926154;
    font-size: max(1vw, 1.6vh);
    font-weight: 500;
    &:focus {
      outline: none;
    }
    &::placeholder {
      user-select: none;
      color: #926154;
      font-family: Jost;
      font-size: max(1vw, 1.6vh);
      font-weight: 400;
    }
  }
  .eye {
    svg {
      width: max(1vw, 1.6vh);
      aspect-ratio: 1/1;
    }
  }
`;
