import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar/Navbar'
import { EventCard } from '../../components/Cards/EventCard'

export const Events = () => {
  return (
    <EventContainer>
        <Navbar></Navbar>
        <div className="heading">
            <img src="" alt="" />
            <span>Events</span>
            <img src="" alt="" />
        </div>
        <EventCard></EventCard>
    </EventContainer>
  )
}

const EventContainer = styled.div`
    background-color: #C8B897;
    background-image: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2FBackgrounds%2FEventsPageBg.png?alt=media&token=45e2f985-febe-495a-ab11-090c40d08761");
    background-blend-mode: overlay;
    width: 100vw;
    height: 100vh;
    animation: flicker 0.8s steps(3) infinite;
    >.heading {
      margin-bottom: 100px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      img{
        width: max(10vw, 80px);
        &:last-child{
          rotate: 180deg;
        }
      }
      span {
        color: #723E30;
        font-family: "Oleo Script";
        font-size: max(4vw, 20px);
        font-weight: 400;
      }
    }
    @keyframes flicker {
        0%,100%{
            background-color: #c8b897;
        }
        50%{
            background-color: #c8b897c3;
        }
    }
`