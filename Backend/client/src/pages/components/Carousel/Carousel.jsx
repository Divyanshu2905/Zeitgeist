import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import { CardOffer } from "../../components/Cards/CardOffer";

export const Carousel = () => {
  const offers = [
    {
      heading: "Free Goodies",
      description:
        "As a campus ambassador, you will receive goodies from several tech companies as you keep contributing and reaching specific milestones.",
      imageUrl: `https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FGiftBox.png?alt=media&token=a2337298-2f2e-4f7d-9f41-1cbe99cd59dc`,
    },
    {
      heading: "Free Entry",
      description:
        "All registered campus ambassadors with more than 50 points are eligible for free entry to the festival including all night events and workshops.",
      imageUrl: `https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FFreeEntry.png?alt=media&token=3d5fee9c-8fb1-49be-b4f2-5e8802d2c111`,
    },
    {
      heading: "Special Perks for Special CAs",
      description:
        "Top contributors at the end of the program will receive exclusive materialistic prizes, coupons, perks and passes for special paid events of Zeitgeist. ",
      imageUrl: `https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FDiscount.png?alt=media&token=aad5e22b-92d6-46ae-a1de-d1e9d3e0cd3c`,
    },
    {
      heading: "Internship Certification",
      description:
        "All registered campus ambassadors with more than 100 points would get official Zeitgeist certification for participation eligible for display in their resume as a 1-month marketing internship.",
      imageUrl: `https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FCertificate.png?alt=media&token=b28afd95-9ed8-4f96-b63c-120e93662707`,
    },
    {
      heading: "VIP Seats",
      description:
        "Top contributors will have the privilege of attending all the star nights, stand-up comedy shows from exclusive VIP front seats. ",
      imageUrl: `https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FWorkshop.png?alt=media&token=c5421967-3fb2-4e87-9a7a-3d95cc434968`,
    },
  ];
  
  useEffect(() => {
    const images = document.querySelectorAll(".img");
    images.forEach((img, index) => {
      img.style.transform = `rotateY(${index * 72}deg) translateZ(-380px)`;
      img.style.backfaceVisibility = `hidden`;
    });
    let xPos = 0;
    const carousel = document.querySelector(".carousel");
    const timeline = gsap.timeline();
    timeline.set(".carousel", { rotationY: 0, cursor: "grab" });

    window.addEventListener("mousedown", dragStart);
    window.addEventListener("mouseup", dragEnd);
    window.addEventListener("touchstart", dragStart);
    window.addEventListener("touchend", dragEnd);

    function dragStart(e) {
      if (e.touches) e.clientX = e.touches[0].clientX;
      xPos = Math.round(e.clientX);
      gsap.set(carousel, { cursor: "grabbing" });
      window.addEventListener("mousemove", drag);
      window.addEventListener("touchmove", drag);
    }

    function drag(e) {
      if (e.touches) e.clientX = e.touches[0].clientX;
      const img = document.querySelector(".img");
      gsap.to(carousel, {
        rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
        onUpdate: () => {
          gsap.set(img, { backgroundPosition: (i) => getBgPos(i) });
        },
      });

      xPos = Math.round(e.clientX);
    }

    function dragEnd(e) {
      window.removeEventListener("mousemove", drag);
      gsap.set(carousel, { cursor: "grab" });
    }

    function getBgPos(i) {
      return (
        100 -
        (gsap.utils.wrap(
          0,
          360,
          gsap.getProperty(carousel, "rotationY") - 180 - i * 36
        ) /
          360) *
          500 +
        "px 0px"
      );
    }
  });
  return (
    <CarouselContainer>
      <div className="container">
        <div className="carousel">
          {offers.map((item, index) => (
            <CardOffer
              key={index}
              imageUrl={item.imageUrl}
              description={item.description}
              heading={item.heading}
            />
          ))}
        </div>
      </div>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  user-select: none;
  overflow: hidden;
  z-index: 10;
  .container {
    position: absolute;
    width: 390px;
    height: 552px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    perspective: 1000px;
    .carousel {
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      position: absolute;
      .img{
        opacity: 0.5;
        transition: opacity ease-in-out 0.3s;
        &:hover{
          opacity: 1;
        }
      }
    }
  }
`;
