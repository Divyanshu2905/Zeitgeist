import { useState } from "react";
import styled from "styled-components";
export default function Questions(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <QuestionsContainer className="question-container">
      <div className="c3" onClick={toggleDropdown}>
        <div className="c2">
          <svg
            width="16"
            height="16"
            id="star"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Star 2"
              d="M7.05176 1.33137C7.3565 0.421458 8.6435 0.421456 8.94824 1.33137L10.066 4.66886C10.2015 5.07338 10.5786 5.34741 11.0052 5.35125L14.5248 5.38294C15.4843 5.39158 15.882 6.6156 15.1108 7.1866L12.2821 9.28097C11.9392 9.53482 11.7951 9.97822 11.9233 10.3851L12.9808 13.7422C13.2691 14.6574 12.2278 15.4139 11.4465 14.8569L8.58048 12.8138C8.23311 12.5662 7.76689 12.5662 7.41952 12.8138L4.55352 14.8569C3.77216 15.4139 2.73095 14.6574 3.01924 13.7422L4.0767 10.3851C4.20487 9.97822 4.0608 9.53482 3.71795 9.28097L0.889204 7.1866C0.117996 6.6156 0.515701 5.39158 1.47524 5.38294L4.99479 5.35125C5.42137 5.34741 5.79855 5.07338 5.93402 4.66886L7.05176 1.33137Z"
              fill="#F8F2D8"
            />
          </svg>

          <h2 className="typ">{props.ques}</h2>
        </div>
        <div>
          {!isExpanded && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="19"
              id="arrow1"
              viewBox="0 0 17 19"
              fill="none"
            >
              <g clip-path="url(#clip0_504_1980)">
                <path
                  d="M4.40735 16.5483L11.8197 9.19673C11.8986 9.1185 11.8986 8.99096 11.8197 8.91273L4.68718 1.83866"
                  stroke="#F8F2D8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_504_1980">
                  <rect
                    width="19"
                    height="17"
                    fill="white"
                    transform="matrix(0 -1 1 0 0 19)"
                  />
                </clipPath>
              </defs>
            </svg>
          )}
          {isExpanded && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="17"
              id="arrow2"
              viewBox="0 0 19 17"
              fill="none"
            >
              <path
                d="M16.5483 12.5928L9.19673 5.18039C9.1185 5.10151 8.99096 5.10151 8.91273 5.18039L1.83866 12.3129"
                stroke="#F8F2D8"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="dropdown-content">
          {/* Additional content goes here */}
          <p className="ans">{props.ans}</p>
        </div>
      )}
    </QuestionsContainer>
  );
}

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 0.1px solid rgba(230, 214, 181, 0.9); /* Using RGBA color notation */
  padding: 1.5% 0;
  cursor: pointer;
  .c3 {
    display: flex;
    padding: 0% 0px;
    justify-content: space-between;
    align-items: center;
    gap: 2px;
    .c2 {
      display: flex;
      padding: 0;
      align-items: center;
      gap: 1rem;
      .typ {
        color: var(--lightest, #f8f2d8);
        font-family: Jost;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: capitalize;
        margin: 0;
        @media (max-width: 1200px) {
          font-size: 18px;
        }
        @media (max-width: 1067px) {
          font-size: 17px;
        }
        @media (max-width: 768px) {
          font-size: 16px;
        }
      }
    }
    .dropdown-content {
      padding: 0 2rem;
      .ans {
        color: var(--lightest, #f8f2d8);
        font-family: Jost;
        font-size: 20px;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        text-transform: capitalize;
        margin: 0;
        padding-top: 1.2%;
        @media (max-width: 1200px) {
          font-size: 17px;
        }
        @media (max-width: 1067px) {
          font-size: 16px;
        }
        @media (max-width: 768px) {
          font-size: 15px;
        }
      }
    }
  }
`;
