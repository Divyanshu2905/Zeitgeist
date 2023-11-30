import React, { useEffect, useRef } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import styled from "styled-components";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "../../components/Loader/Loader";
import { axiosInstance } from "../../../config/config";
import { toast } from "react-toastify";

import clapBoard from "../resources/clapBoard.svg";
import videoRecorder from "../resources/VideoRecorder.svg";
import leftLine from "../resources/leftLine.svg";
import rightLine from "../resources/rightLine.svg";

export const Schedule = () => {
  const [day, setDay] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const days = [1, 2, 3];
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setDay(option);
    setIsOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/schedule")
      .then((res) => {
        setEvents(
          res.data.filter((event) => {
            return event.day === day;
          })
        );
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Some error occured", {
          position: "top-center",
          autoClose: 800,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          pauseOnFocusLoss: false,
          draggable: true,
          theme: "dark",
        });
      });
  }, [day]);
  return (
    <ScheduleContainer>
      <Navbar />
      <div className="main">
        <div className="heading">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowL.svg?alt=media&token=b901daf4-0523-4d18-83e3-3b47ac3c135d"
            alt=""
          />
          <span>Schedule</span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowR.svg?alt=media&token=251b9fca-c871-4e00-80d5-3ee33b695145"
            alt=""
          />
        </div>
        <div className="schedule-container">
          <div className="day-selector">
            <button className="day-button" onClick={toggleDropdown}>
              {`DAY-${day}`}{" "}
              <FaCaretDown className={`${isOpen ? "opened" : ""}`} />
              <AnimatePresence>
                {isOpen && (
                  <motion.ul
                    className="dropdown-options"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ opacity: 0 }}
                  >
                    {days.map((option, index) => (
                      <motion.li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        initial={{ y: -10 }}
                        animate={{ y: 0, transition: { duration: 0.3 } }}
                      >
                        DAY-{option}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </button>
          </div>
          <div className="vertical-partition"></div>
          <div className="schedule">
            {loading ? (
              <Loader />
            ) : (
              events
                .sort(
                  (a, b) =>
                    parseInt(a.beginTime.slice(0, 2)) -
                    parseInt(b.beginTime.slice(0, 2))
                )
                .map((event, index) => (
                  <div className="event" key={index}>
                    <div className={`leaf-details`}>
                      <div className="name-schedule">{event.name}</div>
                      <div className="heading">{event.heading}</div>
                      <div className="venue">Venue : {event.venue}</div>
                    </div>
                    <div className="stem-details">
                      <div className="time">{`${event.beginTime} - ${event.endTime}`}</div>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
        <img src={clapBoard} alt="" className="clap-board" />
        <img src={videoRecorder} alt="" className="video-recorder" />
      </div>
    </ScheduleContainer>
  );
};

const ScheduleContainer = styled.div`
  background-color: #c8b897;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FEventsPageBg.png?alt=media&token=45e2f985-febe-495a-ab11-090c40d08761");
  background-size: cover;
  background-blend-mode: overlay;
  width: 100vw;
  height: 100vh;
  animation: flicker 0.8s steps(3) infinite;
  @keyframes flicker {
    0%,
    100% {
      background-color: #c8b897;
    }
    50% {
      background-color: #c8b897c3;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > .main {
    position: relative;
    padding: 2vh 5vw 0 5vw;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;
    > .heading {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      img {
        display: flex;
        align-items: center;
        width: 10vw;
        max-width: 160px;
        min-width: 80px;
      }
      span {
        color: #723e30;
        font-family: "Oleo Script";
        font-size: max(4vw, 32px);
        font-weight: 400;
      }
    }
    > .schedule-container {
      flex: 1;
      overflow: hidden;
      position: relative;
      padding: 0 7.5vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (max-width: 725px) {
        padding: 0;
      }
      .day-selector {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25vmax;
        font-family: "Viga";
        z-index: 2;
        .day-button {
          position: relative;
          padding: 8px 16px;
          background-color: #723e30;
          border-radius: 3px 3px 0 0;
          color: var(--lightest, #f8f2d8);
          font-weight: 400;
          letter-spacing: 0.4px;
          display: flex;
          gap: 8px;
          align-items: center;
          &:active {
            border: none;
          }
          > svg {
            transition: all 0.3s ease;
            &.opened {
              transform: rotateZ(180deg);
            }
          }
        }
        .dropdown-options {
          position: absolute;
          left: 0;
          top: 100%;
          width: 100%;
          cursor: pointer;
          background-color: #723e30;
          border-radius: 0 0 3px 3px;
          > li {
            padding: 8px 16px;
          }
        }
      }
      .vertical-partition {
        width: 1vw;
        height: 100%;
        background: var(--light1, #e6d6b5);
        position: absolute;
        left: 50%;
        translate: -50%;
        max-width: 8px;
      }
      .schedule {
        width: 100%;
        flex: 1;
        z-index: 1;
        padding: 12px 6px 12px 12px;
        overflow-y: auto;
        overflow-x: hidden;
        @media screen and (max-width: 725px) {
          padding: 0;
        }
        > div:first-child {
          margin: auto;
        }
        .event {
          display: flex;
          width: 100%;
          height: 20%;
          align-items: center;
          .leaf-details {
            display: flex;
            flex-direction: column;
            padding: 12px;
            .name-schedule {
              color: var(--more-darkest, #4c281e);
              font-family: Jost;
              font-size: 1.25vmax;
              font-weight: 600;
            }
            .heading {
              color: var(--darkestt, #723e30);
              font-family: Jost;
              font-size: 1vmax;
              font-weight: 400;
            }
            .venue {
              color: var(--darkestt, #723e30);
              font-family: Jost;
              font-size: 1vmax;
              font-weight: 500;
            }
            width: 20%;
            text-align: right;
          }
          .stem-details {
            width: 32%;
            height: 100%;
            background-image: url(${leftLine});
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center right;
            position: relative;
            .time {
              position: absolute;
              top: 30%;
              translate: 0 -50%;
              font-size: 1.25vmax;
              padding: 12px;
              color: var(--more-darkest, #4c281e);
              font-family: Jost;
              font-weight: 600;
            }
          }
          &:nth-child(odd) {
            flex-direction: row-reverse;
            .leaf-details {
              text-align: left;
            }
            .stem-details {
              background-image: url(${rightLine});
              background-position: center left;
              .time {
                right: 0;
              }
            }
          }
        }
      }
    }
    > img {
      position: absolute;
      bottom: 10px;
      width: 20vw;
      @media screen and (max-width: 725px) {
        display: none;
      }
      &.clap-board {
        left: 0;
      }
      &.video-recorder {
        right: 0;
      }
    }
  }
`;
