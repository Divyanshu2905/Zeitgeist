import React from "react";
import styled from "styled-components";
import { Navbar } from "../../components/Navbar/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import { axiosInstance } from "../../../config/config";
import { Loader } from "../../components/Loader/Loader";
import { TeamCard } from "../../components/Cards/TeamCard";

export const Team = () => {
  const teamCategories = [
    "Core",
    "Overall Convener",
    "Sponsorship",
    "Management",
    "Decoration",
    "Publicity",
    "Development",
    "Content & Anchoring",
    "Workshop",
  ];
  const [category, setCategory] = useState("Core");
  const [loading, setLoading] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState([]);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/team")
      .then((res) => {
        setLoading(false);
        setTeamList(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setSelectedTeam(teamList.filter((ele) => ele.Team === category));
  }, [category]);
  return (
    <TeamsContainer>
      <Navbar></Navbar>
      <div className="main">
        <div className="filter">
          <div className="heading">Our Team</div>
          <ul className="categories">
            {teamCategories.map((ele) => (
              <li
                key={ele}
                className={`${ele === category ? "active" : ""}`}
                onClick={() => {
                  setCategory(ele);
                }}
              >
                {ele}
              </li>
            ))}
          </ul>
        </div>
        <div className="team-list">
          {loading ? (
            <Loader />
          ) : selectedTeam.length === 0 ? (
            teamList.map((ele) => <TeamCard data={ele} />)
          ) : (
            selectedTeam.map((ele) => <TeamCard data={ele} />)
          )}
        </div>
      </div>
    </TeamsContainer>
  );
};
const TeamsContainer = styled.div`
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
    > .filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction : column;
      gap: 5vh;
      .heading {
        color: var(--darkestt, #723e30);
        font-family: "Oleo Script";
        font-size: 2.5vmax;
        font-weight: 500;
      }
      .categories {
        display: flex;
        font-size: 1.25vmax;
        flex-wrap: wrap;
        justify-content: center;
        height: 100%;
        align-items: center;
        row-gap: 20px;
        > li {
          margin-inline: 10px;
          padding: 4px 12px;
          height: fit-content;
          cursor: pointer;
          text-align: center;
          &.active {
            border-radius: 4px;
            border: 2px solid var(--darkestt, #723e30);
            background-color: var(--lightest, #f8f2d8);
            box-shadow: 2px 2px 0px 0px #723e30;
          }
          color: var(--darkestt, #723e30);
          font-family: "Jost";
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
        }
      }
    }
    > .team-list {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      overflow-y: auto;
      padding: 2%;
      gap: 25px;
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
