import "./navbar.css";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";

const Menu = () => {
  return (
    <>
      {" "}
      <p>
        <a href="#container">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT3?</a>
      </p>
      <p>
        <a href="#possibility">Open Ai</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );
};
export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  //BEM -> Block__Element--Modifier
  //Using Harry__Roberts--Style
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar--links">
        <div className="gpt3__navbar--links-logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="gpt3__navbar--links-container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar--sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="gpt3__navbar--menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar--menu-container scale-up-center">
            <div className="gpt3__navbar--menu-container-links">
              <Menu />
              <div className="gpt3__navbar--menu-container-links-sign">
                <p>Sign In</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
