import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { Navbar } from "../../components/Navbar/Navbar";
import { EventCard } from "../../components/Cards/EventCard";
import { findClosestMatch } from "../../../utils/searchFunctionality";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../../../config/config";
import { Loader } from "../../components/Loader/Loader";

export const Events = () => {
  const [category, setCategory] = useState("all");
  const [inputValue, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const events = useSelector((state) => state.events).result;
  const [filteredEvents, setFilteredEvents] = useState([]);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  //Fetching events
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/allEvents")
      .then(async (response) => {
        dispatch({ type: "GET_EVENTS_ACTION", payload: response.data });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  //Achieve that arrow navigation design
  useEffect(() => {
    const arr = Array.from(document.querySelector(".categories").childNodes);
    arr.forEach((element, index) => {
      element.style.translate = `${-7 * index}px`;
    });
  }, []);

  //Searching
  useEffect(() => {
    setFilteredEvents(findClosestMatch(events, category));
    setValue("");
  }, [category, loading]);
  useEffect(() => {
    setFilteredEvents(findClosestMatch(events, inputValue));
  }, [inputValue]);

  return (
    <EventContainer>
      <Navbar></Navbar>
      <div className="main">
        <div className="heading">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowL.svg?alt=media&token=b901daf4-0523-4d18-83e3-3b47ac3c135d"
            alt=""
          />
          <span>Events</span>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FdarkestArrowR.svg?alt=media&token=251b9fca-c871-4e00-80d5-3ee33b695145"
            alt=""
          />
        </div>
        <div className="filter">
          <div className="categories">
            <div
              onClick={() => {
                setCategory("all");
              }}
              className={category === "all" ? "active" : ""}
            >
              <span>All</span>
            </div>
            <div
              onClick={() => {
                setCategory("cultural");
              }}
              className={category === "cultural" ? "active" : ""}
            >
              <span>Cultural</span>
            </div>
            <div
              onClick={() => {
                setCategory("fashion");
              }}
              className={category === "fashion" ? "active" : ""}
            >
              <span>Fashion</span>
            </div>
            <div
              onClick={() => {
                setCategory("literary");
              }}
              className={category === "literary" ? "active" : ""}
            >
              <span>Literary</span>
            </div>
            {/* <div
              onClick={() => {
                setCategory("workshop");
              }}
              className={category === "workshop" ? "active" : ""}
            >
              <span>Workshop</span>
            </div> */}
          </div>
          <div className="search-events">
            <BiSearch />
            <input
              type="text"
              placeholder="Search here..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="events-list">
          {loading ? (
            <div className="loader-container">
              <Loader />
            </div>
          ) : (
            filteredEvents.map((event) => (
              <EventCard key={event.name} event={event}></EventCard>
            ))
          )}
        </div>
      </div>
    </EventContainer>
  );
};

const EventContainer = styled.div`
  background-color: #c8b897;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FEventsPageBg.png?alt=media&token=45e2f985-febe-495a-ab11-090c40d08761");
  background-size: cover;
  background-blend-mode: overlay;
  width: 100vw;
  height: 100vh;
  animation: flicker 0.8s steps(3) infinite;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  > .main {
    position: relative;
    padding: 2vh 5vw;
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
    > .filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-inline: 10px;
      @media screen and (max-width: 725px) {
        justify-content: flex-end;
      }
      .categories {
        @media screen and (max-width: 725px) {
          display: none;
        }
        height: 40px;
        display: flex;
        align-items: stretch;
        justify-content: space-evenly;
        > div {
          border-radius: 2px;
          background-color: #723e30;
          position: relative;
          padding: 0 20px;
          height: 100%;
          display: grid;
          place-items: center;
          cursor: pointer;
          > span {
            color: #723e30;
            color: var(--darkestt, #723e30);
            text-align: center;
            font-family: Oleo Script;
            font-size: 2.4vmin;
            font-weight: 400;
          }
          clip-path: polygon(
            calc(100% - 10px) 0%,
            100% 50%,
            calc(100% - 10px) 100%,
            0% 100%,
            10px 50%,
            0% 0%
          );
          &:first-child {
            clip-path: polygon(
              calc(100% - 10px) 0%,
              100% 50%,
              calc(100% - 10px) 100%,
              0% 100%,
              0% 50%,
              0% 0%
            );
          }
          &::before {
            transition: all 0.2s ease;
            content: "";
            background-color: #e6d6b5;
            position: absolute;
            clip-path: polygon(
              calc(100% - 11px) 2px,
              calc(100% - 2px) 50%,
              calc(100% - 11px) calc(100% - 2px),
              3px calc(100% - 2px),
              12px 50%,
              3px 2px
            );
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
          }
          &.active::before {
            clip-path: polygon(
              calc(100% - 12px) 4px,
              calc(100% - 4px) 50%,
              calc(100% - 12px) calc(100% - 4px),
              6px calc(100% - 4px),
              14px 50%,
              6px 4px
            );
          }
          &:first-child:before {
            content: "";
            background-color: #e6d6b5;
            position: absolute;
            clip-path: polygon(
              calc(100% - 11px) 2px,
              calc(100% - 2px) 50%,
              calc(100% - 11px) calc(100% - 2px),
              2px calc(100% - 2px),
              2px 50%,
              2px 2px
            );
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
          }
          &:first-child.active::before {
            clip-path: polygon(
              calc(100% - 12px) 4px,
              calc(100% - 4px) 50%,
              calc(100% - 12px) calc(100% - 4px),
              4px calc(100% - 4px),
              4px 50%,
              4px 4px
            );
          }
        }
      }
      .search-events {
        max-width: 318px;
        width: 60%;
        aspect-ratio: 8/1;
        background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FsearchContainer.svg?alt=media&token=bb75ac94-ad30-4a3e-b5d3-4d6ea599005e");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        svg {
          color: #723e30;
          height: 24px;
          width: 24px;
          stroke-width: 1px;
        }
        input {
          background-color: transparent;
          width: 70%;
          border: none;
          font-family: "Jost";
          font-style: italic;
          font-size: 14px;
          color: #b2805c;
          &:focus {
            outline: none;
          }
          &::placeholder {
            color: #b2805c;
          }
        }
      }
    }
    > .events-list {
      display: flex;
      overflow-y: auto;
      flex-wrap: wrap;
      justify-content: space-evenly;
      gap: 40px;
      padding-right: 10px;
      .loader-container {
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  @keyframes flicker {
    0%,
    100% {
      background-color: #c8b897;
    }
    50% {
      background-color: #c8b897c3;
    }
  }
`;
