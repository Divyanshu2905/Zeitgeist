import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-toastify";

export const Leaderboard = ({ data, admin, submitPoints }) => {
  const [searchValue, setValue] = useState("");
  const [searchedCA, setSearchedCA] = useState([]);
  const onInputChange = (e) => {
    setValue(e.target.value);
    findClosestMatch(data, searchValue);
  };
  
  const findClosestMatch = (objects, searchStr = "") => {
    if (searchStr === "") {
      setSearchedCA(objects);
    }
    const matches = objects.filter((object) => {
      const { name, college } = object;
      const lowerCaseSearchStr = searchStr.toLowerCase();
      return (
        name.toLowerCase().includes(lowerCaseSearchStr) ||
        college.toLowerCase().includes(lowerCaseSearchStr)
      );
    });
    setSearchedCA(matches);
  };

  return (
    <>
      <ToastContainer />
      <LeaderboardContainer>
        <div className="headline">
          <span className="title">Leaderboard</span>
        </div>
        <div className="main-container">
          <div className="search-bar">
            <AiOutlineSearch></AiOutlineSearch>
            <input
              type="text"
              placeholder="Search here..."
              onChange={onInputChange}
              value={searchValue}
            />
          </div>
          <div className="leaderboard-wrapper">
            <div className="leaderboard">
              <div className="tr">
                <div className="td">Rank</div>
                <div className="td">Name</div>
                <div className="td">College</div>
                <div className="td">Points</div>
              </div>
              {searchValue === ""
                ? data.map((element) => (
                    <div className="tr" key={uuidv4()}>
                      <div className="td">{element.rank}</div>
                      <div className="td">{element.name}</div>
                      <div className="td">{element.college}</div>
                      <div className="td">{element.points}</div>
                      {admin ? (
                        <>
                          <button
                            onClick={submitPoints}
                            className={element.email}
                          >
                            Submit
                          </button>
                          <input type="number" />
                        </>
                      ) : null}
                    </div>
                  ))
                : searchedCA.map((element) => (
                    <div className="tr" key={uuidv4()}>
                      <div className="td">{element.rank}</div>
                      <div className="td">{element.name}</div>
                      <div className="td">{element.college}</div>
                      <div className="td">{element.points}</div>
                      {admin ? (
                        <>
                          <button
                            onClick={submitPoints}
                            className={element.email}
                          >
                            Submit
                          </button>
                          <input type="number" />
                        </>
                      ) : null}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </LeaderboardContainer>
    </>
  );
};

const LeaderboardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  padding: 20px min(60px, 2.5vw);
  border-radius: 8px;
  background: var(--dark2, #a3724f);
  box-shadow: 4px 6px 0px 0px rgba(114, 62, 48, 0.8);
  > div {
    width: 100%;
  }
  .headline {
    position: relative;
    width: fit-content;
    padding: 10px 0px;
    font-size: 1.4vmax;
    @media screen and (max-width: 820px) {
      font-size: 2.2vmax;
    }
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: var(--light1, #e6d6b5);
    }
  }
  .main-container {
    display: flex;
    flex-direction: column;
    height: 80%;
    gap: 20px;
  }
  .search-bar {
    width: 100%;
    min-height: 40px;
    display: flex;
    gap: 24px;
    padding: 4px 12px;
    border-radius: 12px;
    border: 2px solid var(--lightest, #f8f2d8);
    opacity: 0.6;
    background: rgba(255, 255, 255, 0.2);
    svg {
      scale: 1.6;
      height: 100%;
    }
    input {
      background: transparent;
      color: #f8f2d8;
      font-size: 1vmax;
      flex: 1;
      &::placeholder {
        color: #f8f2d8;
        font-size: 1.2vmax;
        @media screen and (max-width: 820px) {
          font-size: 1.8vmax;
        }
      }
      &:focus {
        outline: none;
      }
    }
  }
  .leaderboard-wrapper {
    width: 100%;
    height: 80%;
    display: flex;
    font-size: 1.4vmax;
    flex-direction: column;
    align-items: stretch;
    border-radius: 12px;
    border: 2px solid rgba(248, 242, 216, 0.6);
    padding: 20px 23px;
    @media screen and (max-width: 820px) {
      padding: 10px;
    }
    .leaderboard {
      flex: 1;
      overflow-y: scroll;
      overflow-x: hidden;
      padding-right: 20px;
      @media screen and (max-width: 820px) {
        padding: 10px;
      }
      .tr {
        display: grid;
        grid-template-columns: 15% 35% 35% 15%;
        @media screen and (max-width: 820px) {
          grid-template-columns: 20% 30% 30% 20%;
        }
        justify-content: space-between;
        &:nth-child(even) {
          background: #b2805c;
        }
        &:nth-child(odd) {
          background: #ad7b57;
        }
        &:first-child {
          background: var(--dark2, #a3724f);
        }
        .td {
          &:nth-child(3) {
            @media screen and (max-width: 820px) {
              display: none;
            }
          }
          &:nth-child(2) {
            @media screen and (max-width: 820px) {
              grid-column-end: 4;
              grid-column-start: 2;
            }
          }
          border: 1px solid rgba(230, 214, 181, 0.2);
        }
      }
      input {
        color: black;
        padding: 12px;
      }
      button {
        background-color: #e6d6b5;
        color: #a3724f;
        grid-column-start: 2;
      }
    }
  }
`;
