import React, { useEffect, useRef, useState } from "react";
import footerbg from "../../resources/pattern.svg";
import diamonds from "../../resources/diamonds.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {FiMail} from "react-icons/fi";
import {VscLocation} from "react-icons/vsc"
import {PiPhone} from "react-icons/pi"

import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Footer = () => {
  const [quantity, setQuantity] = useState(100);
  let diamonds = [];
  for (let i = 0; i < quantity; i++) {
    diamonds.push(
      <svg
      style={{rotate: `x ${-36*i}deg`}}
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="14"
        viewBox="0 0 24 14"
        fill="none"
      >
        <path
          d="M12 0.28941L23.5038 6.99851L12 13.7106L0.496159 6.9985L12 0.28941Z"
          fill="#723E30"
          stroke="#A3724F"
          stroke-width="0.5"
        />
        <path
          d="M12 3.28792L18.4961 6.99917L12 10.712L5.50389 6.99917L12 3.28792Z"
          stroke="#A3724F"
          stroke-width="0.5"
        />
      </svg>
    );
  }
  const setDiamonds = () => {
    setQuantity(window.innerWidth / 24);
  };
  useEffect(() => {
    window.addEventListener("resize", setDiamonds);
  });

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  return (
    <FooterContainer
      className=" bg-custom-yellow font-custom2 relative h-auto flex flex-col "
      ref={ref}
    >
      {/* footer content div */}
      <div className=" tracking-wide flex flex-col gap-16 md:flex-row  items-center py-6">
        <div className=" w-1/3 md:w-2/5  flex flex-col justify-center items-center text-light gap-2">
          <div className="footer-logo">
            <motion.img
              src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FCA%2Fresources%2FLogo%20Ornate.svg?alt=media&token=17255890-cbdc-42c3-b3a2-a5a691e838fe"
              style={{ width: "100%" }}
              initial={{
                y: 0,
              }}
              animate={{
                y: 10,
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                },
              }}
            ></motion.img>
          </div>
          <div className=" mb-8 text-center">
            <p className=" font-custom1 text-2xl">
              Indian Institute of Technology Ropar
            </p>
          </div>
          <div>
            <p className="font-bold text-xl">Follow Us On</p>
          </div>
          <div className="justify-center flex items-center font-medium mt-2">
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://www.facebook.com/zeitgeist.iitrpr?mibextid=ZbWKwL"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://instagram.com/zeitgeist_iitrpr?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://twitter.com/Zeitgeist_rpr?t=PM5KFpsToXu7FEZdTJwWlA&s=08"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/company/zeitgeist-iit-ropar/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
            <span className="mx-2 hover:cursor-pointer">
              <a
                href="https://youtube.com/@ZeitgeistIITRopar?feature=shared"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-[5vmin] text-[#F8F2D8]"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="flex justify-around w-3/4  md:w-3/5">
          <div className="w-1/3 md:w-1/3  md:flex flex-col ">
            <div className="border-b-2 w-3/5 md:mt-[24px] text-light border-dark-extra">
              <h2
                className="my-3 font-semibold text-xl"
                style={{
                  transform: isInView ? "none" : "translateX(-100%)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                Links
              </h2>
            </div>
            <div className="text-lighter my-3 flex flex-col gap-1 font-medium">
              <p>
                <NavLink to="/home">Home</NavLink>
              </p>
              <p>
                <NavLink to="/events">Events</NavLink>
              </p>
              <p>
                <NavLink to="/sponsors">Sponsors</NavLink>
              </p>
              <p>
                <NavLink to="/schedule">Schedule</NavLink>
              </p>
              <p>
                <NavLink to="/team">Team</NavLink>
              </p>
              <p>
                <NavLink to="/faq">FAQs</NavLink>
              </p>
              <p>
                <NavLink to="/t&c">T&C</NavLink>
              </p>
            </div>
          </div>
          <div className="w-2/3 md:mt-[24px] md:flex  flex-col ">
            <div className="border-b-2 w-3/4 text-light border-dark-extra">
              <h2
                className="my-3 font-semibold text-xl"
                style={{
                  transform: isInView ? "none" : "translateX(-100%)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                Contact Us
              </h2>
            </div>
            <div className="text-lighter my-3 flex flex-col gap-2">
              <p className="flex w-full">
                <VscLocation />
                <div className="location">
                  <span>Indian Institute of Technology</span>
                  <span>Ropar</span>
                  <span>Rupnagar, Punjab, India</span>
                  <span>Pincode: 140001</span>
                </div>
              </p>
              <p className="font-medium">
                <a
                  href="mailto:zeitgeist@iitrpr.ac.in"
                  className="flex w-full items-center gap-4"
                >
                  <FiMail /> <span>zeitgeist@iitrpr.ac.in</span>
                </a>
              </p>
              <p className="font-medium flex w-full items-center gap-4">
                {" "}
                <PiPhone /> <span>+91-8171162979</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer design div */}

      <div className="my-10">
        <div className="flex w-full overflow-hidden">{diamonds}</div>
        <div className="text-right mt-6 mx-12 text-light">
          <p>Privacy Policy | Copyright @ Zeitgeist 2023</p>
        </div>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  background: url(${footerbg});
  background-size: cover;
  background-position: center;
  background-color: #723e30;
  background-blend-mode: soft-light;
  font-family: "Jost", sans-serif;
  .font-custom1 {
    font-family: "Grenze Gotisch", cursive !important;
  }
  span > a > svg {
    width: 2vmax;
  }
  .my-10 svg {
    animation: chain_chalao 2s linear infinite;
    @keyframes chain_chalao {
      from {
        transform: rotateX(0deg);
      }
      to {
        transform: rotateX(360deg);
      }
    }
  }
  p>svg{
    scale: 1.25;
  }
  .location{
    display:flex ;
    flex-direction: column;
    padding: 0 20px;
  }
`;
export default Footer;
