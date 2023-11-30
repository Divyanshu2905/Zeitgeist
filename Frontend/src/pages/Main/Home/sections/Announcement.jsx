import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { axiosInstance } from "../../../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../components/Loader/Loader";
import { motion, useInView } from "framer-motion";

import recFrame from "../../resources/rectangle-frames.svg";
import leftmegaphone from "../../resources/Left-MegaPhone.svg";
import leftheadinggrp from "../../resources/Group 3633.svg";
import rightmegaphone from "../../resources/Right-MegaPhone.svg";
import rightheadinggrp from "../../resources/Group 3632.svg";
import { useRef } from "react";

const Announcement = () => {
  const [loading, setLoading] = useState(false);
  const ref = useRef(null)
  const isInView = useInView(ref, {once: false})
  const dispatch = useDispatch();
  const getAnnouncement = useSelector((state) => state.announcement).result;
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/announcements")
      .then(async (response) => {
        dispatch({ type: "GET_ANNOUNCEMENT_ACTION", payload: response.data });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <AnnouncementsContainer>
      <div className="announcement-wrapper">
        <motion.img
          className="leftmegaphone"
          src={leftmegaphone}
          initial={{ scale: 1 }}
          animate={{
            scale: 1.1,
            transition: {
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <img className="recFrame" src={recFrame} />
        <motion.img
          className="rightmegaphone"
          src={rightmegaphone}
          initial={{ scale: 1 }}
          animate={{
            scale: 1.1,
            transition: {
              repeat: Infinity,
              duration: 1.5,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        />
        <div className="heading-container">
          <img className="headinggrp" src={leftheadinggrp} />
          <p className="heading">Announcement</p>
          <img className="headinggrp" src={rightheadinggrp} />
        </div>
        <ul className="announcements-container" ref={ref}>
          {loading ? (
            <Loader />
          ) : (
            getAnnouncement.map((value, index) => {
              return (
                <>
                  <motion.li
                    className="bullets"
                    key={index}
                    style={{
                      opacity: `${isInView ? "1" : "0"}`,
                      translateY: `${isInView ? "0" : "50px"}`,
                    }}
                  >
                    {value.data}
                  </motion.li>
                </>
              );
            })
          )}
        </ul>
      </div>
    </AnnouncementsContainer>
  );
};

const AnnouncementsContainer = styled.div`
  width: 100%;
  aspect-ratio: 2.9/1;
  padding: 5%;
  background: url("https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fbg.png?alt=media&token=b1004a2b-3168-47ab-8cbd-ecb148e09c90"),
    #e6d6b5;
  background-blend-mode: color-burn;
  background-size: cover;
  background-position: center;
  padding: 1;
  .announcement-wrapper {
    width: 100%;
    aspect-ratio: 2.9/1;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px 5%;
  }

  .announcements-container {
    flex: 1;
    width: 100%;
    padding: 20px 5vw;
    overflow-y: auto;
    list-style-type: disc;
    list-style-position: inside;
    z-index: 1;
    box-sizing: border-box;
    > div {
      margin: auto;
    }
  }

  .heading-container {
    height: 45%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heading {
    color: #723e30;
    font-family: Grenze Gotisch;
    font-size: clamp(12px, 5vmax, 6rem);
    font-weight: 600;
    padding-inline: 10px;
  }

  .recFrame {
    width: 100%;
    position: absolute;
    aspect-ratio: 2.9/1;
    z-index: 1;
  }

  .headinggrp {
    width: 9.45vmax;
  }

  .leftmegaphone {
    position: absolute;
    top: 0;
    left: 0;
    width: 13.69vw;
    translate: 50% 10%;
  }

  .rightmegaphone {
    position: absolute;
    top: 0;
    right: 0;
    width: 13.69vw;
    translate: -50% 10%;
  }

  .bullets {
    color: var(--dark2, #a3724f);
    font-family: Jost;
    font-size: 1.5vmax;
    font-weight: 500;
    border-bottom: 1px solid var(--dark-extra-2, #b2805c);
    margin-inline: 15px;
    margin-bottom: 20px;
    transition: all 0.5s ease-out;
  }
  @media screen and (max-width: 768px) {
    height: 40vh;
    padding: 0;
    .announcement-wrapper {
      height: 100%;
    }
    .heading-container {
      height: fit-content;
    }
    .heading {
      font-size: 5vw;
    }
    .recFrame {
      display: none;
    }
    .rightmegaphone,
    .leftmegaphone {
      display: none;
    }
  }
`;

export default Announcement;
