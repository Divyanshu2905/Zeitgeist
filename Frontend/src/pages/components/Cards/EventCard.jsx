import React, { useState } from "react";
import styled from "styled-components";
import { Fancy } from "../Buttons/Fancy";
import { AiFillCaretRight } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { EventDetailedCard } from "./eventDetailedCard";

export const EventCard = ({ event }) => {
  const [detailedView, setView] = useState(false);
  const openDetailedView = () => {
    setView(true);
    console.log("detailed clicked");
  };
  const closeDetailedView = () => {
    setView(false);
  };
  
  return (
    <>
      {detailedView ? (
        <EventDetailedCard
          closeDetailedView={closeDetailedView}
          event={event}
        />
      ) : (
        <CardContainer>
          <div className="event-wrapper">
            <div className="top-stars">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
              <span className="category">{event.category}</span>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
            </div>
            <div className="event-details">
              <Fancy text={event.name} variant="dark" />
              <div className="heading">{event.heading}</div>
              <div className="online-status">
                {event.isOnline ? "ONLINE" : "OFFLINE"}
              </div>
              <div className="poster-frame">
                <img src={event.poster} alt="" />
              </div>
              <div className="poc">POC: {event.poc.name}</div>
              <div className="rulebook-btn">
                <button>
                  <FiDownload />
                  <span>
                    <a href={event.rulebook} target="_blank">
                      Rulebook
                    </a>
                  </span>
                </button>
              </div>
              <div className="event-buttons">
                <div className="register-btn">
                  <button>
                    <span>
                      <a href={event.register} target="_blank">
                        Register
                      </a>
                    </span>
                  </button>
                </div>
                <div className="explore-btn">
                  <button onClick={openDetailedView}>
                    <span>Explore</span>
                    <AiFillCaretRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom-stars">
              <img
                src=" https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
              <img
                src=" https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
              <img
                src=" https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
              <img
                src=" https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
              <img
                src=" https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FStar.svg?alt=media&token=f58755fd-815b-4470-8b11-85599c5bfe9d"
                alt=""
              />
            </div>
          </div>
          <div className="bg-pattern">
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
            <span className="pattern-name">{event.name}</span>
          </div>
        </CardContainer>
      )}
    </>
  );
};

const CardContainer = styled.div`
  flex-basis: calc(25% - 40px);
  min-width: 200px;
  max-width: 300px;
  aspect-ratio: 0.56/1;
  padding: 2%;

  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FEventCard.png?alt=media&token=cc685d5a-68c5-4dc0-9ea0-e709a41bae49");
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
  overflow: hidden;
  .bg-pattern {
    user-select: none;
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    translate: -50%;
    bottom: 0;
    right: 0;
    padding: 4%;
    display: flex;
    flex-direction: column;

    .pattern-name {
      width: 100%;
      color: transparent;
      font-weight: 900;
      -webkit-text-stroke: 2px #a3724f11;
      text-align: center;
      letter-spacing: 6px;
      height: 10%;
      font-size: 2vmax;
    }
  }
  .side-text {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    transform: rotate(-90deg);

    > span {
      font-size: 50px;
      text-align: center;
      letter-spacing: 6px;
      -webkit-text-stroke: 2px #a3724f;
      color: transparent;
      font-weight: 900;
    }
  }
  .event-wrapper {
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    .event-details {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 4px;
      .heading {
        color: var(--more-darkest, #4c281e);
        font-family: Jost;
        font-size: min(16px, 1.2vmax);
        font-style: italic;
        font-weight: 600;
        text-align: center;
      }
      .online-status {
        color: var(--more-darkest, #4c281e);
        font-family: Jost;
        font-size: min(12px, 1vmax);
        font-style: italic;
      }
      .poc {
        color: var(--more-darkest, #4c281e);
        font-family: Jost;
        font-size: min(16px, 1.2vmax);
        font-style: italic;
      }

      .poster-frame {
        background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fposter.svg?alt=media&token=cb247b4e-067f-4753-8150-346fa2838c32");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 8px;
        width: 75%;
        aspect-ratio: 1/1;
        filter: sepia(0.5);
        transition: all 0.3s ease;
      }
      .rulebook-btn {
        z-index: 1;
        width: fit-content;
        > button {
          padding: 2px 8px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          border-radius: 2px;
          background: var(--darkestt, #723e30);
          cursor: pointer;

          span {
            color: var(--lightest, #f8f2d8);
            font-family: "Viga";
            font-size: min(16px, 1.2vmax);
            font-weight: 400;
            letter-spacing: 0.32px;
          }
          svg {
            color: #f8f2d8;
            margin-right: 5px;
          }
        }
      }
      .event-buttons {
        z-index: 1;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        button {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          padding: 2px 8px;
          cursor: pointer;
        }
        .register-btn {
          border-radius: 2px;
          background: var(--darkestt, #723e30);
          cursor: pointer;
          span {
            color: var(--lightest, #f8f2d8);
            font-family: "Viga";
            font-size: min(16px, 1.2vmax);
            font-weight: 400;
            letter-spacing: 0.32px;
          }
        }
        .explore-btn {
          box-sizing: border-box;
          color: var(--lightest, #723e30);
          font-family: "Viga";
          font-size: min(16px, 1.2vmax);
          font-weight: 700;
          letter-spacing: 0.32px;
          border-radius: 2px;
          border: 1px solid var(--darkestt, #723e30);
          cursor: pointer;
        }
      }
      .fancy-btn {
        width: 120%;
        button {
          font-weight: 500;
          font-size: 14px;
          @media screen and (max-width: 768px) {
            font-size: 12px;
          }
          cursor: default;
          letter-spacing: 0;
        }
      }
    }
    .top-stars,
    .bottom-stars {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-evenly;
      img {
        width: 15px;
        @media screen and (max-width: 725px) {
          width: 10px;
        }
      }
      span {
        color: var(--LAAL, #a73500);
        text-align: center;
        font-family: Oleo Script;
        font-size: min(18px, 1.2vmax);
        font-weight: 400;
        letter-spacing: 0.36px;
      }
    }
    .top-stars {
      border-bottom: 1px solid #723e307b;
    }
    .bottom-stars {
      border-top: 1px solid #723e307b;
      padding-top: 5px;
    }
  }
`;
