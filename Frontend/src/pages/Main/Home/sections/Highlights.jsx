import React from "react";
import styled from "styled-components";
import bg from "../../resources/highlightsBg.svg";
import reel from "../../resources/highlightsBg-reel.svg";
import rightLight from "../../resources/rightLight.svg";

import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { axiosInstance } from "../../../../config/config";
import { useState } from "react";
import { Loader } from "../../../components/Loader/Loader";

function Highlights() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll();
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [1700, height * -2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [2200, height * -2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [1600, height * -1.5]);
  const y4 = useTransform(scrollYProgress, [0, 1], [1900, height * -1.75]);

  useEffect(() => {
    const resize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get("/highlights")
      .then((res) => {
        setLoading(false);
        setImages(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  return (
    <HighlightsContainer>
      <div className="heading-wrapper">
        <div className="camera left-camera"></div>
        <div className="heading-content">
          H<span>ighlights</span>
        </div>
        <div className="camera right-camera"></div>
      </div>
      {loading || images.length === 0 ? (
        <Loader />
      ) : (
        <div className="container gallery overflow-hidden gap-4 flex justify-center box-border">
          <Column
            className="Column"
            images={[
              images[0],
              images[1],
              images[2],
              images[3],
              images[4],
              images[5],
            ]}
            y={y}
          />
          <Column
            className="Column"
            images={[
              images[6],
              images[7],
              images[8],
              images[9],
              images[10],
              images[11],
            ]}
            y={y2}
          />
          <Column
            className="Column"
            images={[
              images[12],
              images[13],
              images[14],
              images[15],
              images[16],
              images[17],
            ]}
            y={y3}
          />
          <Column
            className="Column"
            images={[
              images[18],
              images[19],
              images[20],
              images[21],
              images[22],
              images[23],
            ]}
            y={y4}
          />
        </div>
      )}
    </HighlightsContainer>
  );
}
const Column = ({ images, y }) => {
  return (
    <motion.div
      className="Column relative h-fit-content gap-2 flex flex-col "
      style={{
        y,
        border: "1px solid var(--dark2, #A3724F)",
        background: "rgba(114, 62, 48, 0.60)",
        padding: "1%",
      }}
    >
      {images.map((image, index) => {
        return (
          <div className=" rounded-md" key={index}>
            <img src={image.url}></img>
          </div>
        );
      })}
    </motion.div>
  );
};
const HighlightsContainer = styled.div`
  width: 100%;
  aspect-ratio: 2/1;
  background: url(${bg}), var(--dark2, #a3724f);
  background-blend-mode: soft-light;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: url(${reel});
    background-repeat: repeat-x;
    background-size: contain;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: url(${reel});
    background-repeat: repeat-x;
    background-size: contain;
  }
  .heading-wrapper {
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .left-camera {
      background-image: url(${rightLight});
      rotate: y 180deg;
    }
    .right-camera {
      background-image: url(${rightLight});
    }
    .camera {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.25;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .heading-content {
      position: absolute;
      color: var(--lightest, #f8f2d8);
      font-family: Grenze Gotisch;
      font-size: clamp(12px, 5vw, 6rem);
      font-weight: 500;
      span {
        color: var(--lightest, #f8f2d8);
        font-family: Grenze Gotisch;
        font-size: clamp(10px, 4vw, 5rem);
        font-weight: 500;
      }
    }
  }
  .container {
    width: 100%;
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
    > .image-wrapper {
      position: absolute;
      width: 100%;
      height: 60%;
    }
  }
`;
export default Highlights;
