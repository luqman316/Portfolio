// import React from 'react'
import { FaLinkedin } from "react-icons/fa";
// import logo from "../assets/kevinRushLogo.png";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const NavBar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          {/* <img className="mx-2 w-10 " src={logo} alt="logo" /> */}
          <p className="mx-2 w-10 text-2xl ">ML</p>
        </div>

        <div className="m-8  flex items-center justify-center text-2xl gap-4">
          <a href="https://www.linkedin.com/in/luqman-rehan-8564962a8/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/luqman316">
            <FaGithub />
          </a>
          <FaSquareXTwitter />
          <a href="https://www.instagram.com/luqman_.922?igsh=eGV0OWh5bWVtZmJl&utm_source=qr">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
