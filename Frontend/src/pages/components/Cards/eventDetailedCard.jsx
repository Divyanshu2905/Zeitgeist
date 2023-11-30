import React from "react";
import "./EventDetailed.css";
import { FaDownload } from "react-icons/fa";
export function EventDetailedCard({ closeDetailedView, event }) {
  return (
    <div className="page">
      <div className="boundary">
        <div className="sparkle-left"></div>
        <div className="sparkle-right"></div>
        <div className="close" onClick={closeDetailedView}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <line
              x1="1"
              y1="13.7284"
              x2="13.7279"
              y2="1.00044"
              stroke="#723E30"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="1.41421"
              y1="1"
              x2="14.1421"
              y2="13.7279"
              stroke="#723E30"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="top-op">
          <div className="details">
            <div className="name">{event.name}</div>
            <div className="type">{event.heading}</div>
            <div className="online">
              {event.isOnline ? "ONLINE" : "OFFLINE"}
            </div>
          </div>
          <div className="prize">
            <div className="cult">{event.category}</div>
            <div className="worth">Prizes Worth {event.worth}</div>
          </div>
        </div>
        <div className="mid">
          <div className="left">
            <div className="one">
              {event.day === 0
                ? ""
                : event.day === 1
                ? "Date: 3 Nov '23"
                : event.day === 2
                ? "Date: 4 Nov '23"
                : "Date: 5 Nov '23"}
            </div>
            <div className="two">{event.description}</div>
            <div className="three">
              Registration Fee: <b>{event.fee}/-</b>
            </div>
            <div className="four">
              Coordinator:{" "}
              <b>
                {event.poc.name} - {event.poc.number}
              </b>
            </div>
          </div>
          <div className="right">
            <div className="poster">
              <img src={event.poster} alt="" />
            </div>
          </div>
        </div>
        <div className="botton-op">
          <div className="btns-op">
            <button className="register">
              <a href={event.register} target="_blank">
                Register
              </a>
            </button>
            <button className="rulebook">
              <FaDownload />{" "}
              <span>
                <a href={event.rulebook} target="_blank">
                  Rulebook
                </a>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
