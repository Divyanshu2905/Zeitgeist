import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="w-screen mt-8 lg:mt-12 h-[60px] navbar absolute flex justify-around items-center">
      <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Fbackground.png?alt=media&token=69956b37-90dd-4cf3-afd1-8e4bc79cc6da" className="h-full w-full absolute " alt="" />
      <div className="z-10 ms-20 hidden lg:block">
        <a className="link" href="/">
          Events
        </a>
        <a className="link" href="/">
          Sponsors
        </a>
        <a className="link" href="/">
          Schedule
        </a>
      </div>
      <div
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className="menu-btn block lg:hidden z-20 me-12"
      >
        <img src={menuOpen ? "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FcloseIcon.png?alt=media&token=7afc28bf-74c3-4885-bf13-f33a0e87e647" : "https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2FmenuIcon.png?alt=media&token=e0cd1c03-51e9-44ca-8e0e-b584f43950fd"} alt="" />
      </div>

      {/* LOGO */}
      <img src="https://firebasestorage.googleapis.com/v0/b/zeitgeist-23.appspot.com/o/Resources%2FMAIN%2Fresources%2Flogo.png?alt=media&token=c16889c0-8de5-4beb-9af5-2c3e3d41292c" className="z-10 w-[180px] lg:w-[220px]" alt="" />
      <div className="z-10 me-20 hidden lg:flex">
        <a className="link" href="/">
          Team
        </a>
        <a className="link" href="/">
          FAQs
        </a>
        <a className="link" href="/">
          T&C
        </a>
        <a href="/" className="frame-wrapper">
          <div className="sign-in-wrapper">
            <div className="sign-in">SIGN IN</div>
          </div>
        </a>
      </div>
      <a href="/" className="frame-wrapper block lg:hidden me-5">
        <div className="sign-in-wrapper">
          <div className="sign-in">SIGN IN</div>
        </div>
      </a>
    </div>
  );
}

export default Navbar;
