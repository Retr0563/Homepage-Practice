import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">
      <div className="logo">
        <img src="/Retr0.jpg" alt="Retr0Wrld" />
        {/* <h1>Retr0 Inc.</h1> */}
      </div>
      <h1>Retr0Wrld</h1>
      <button
        className="dropdown"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        =
      </button>

      <nav className={` nav ${isOpen ? "open" : ""} `}>
        <a className="link-icon" href="#home">
          Home
        </a>
        <a className="link-icon" href="#features">
          Features
        </a>
        <a className="link-icon" href="#projects">
          Projects
        </a>
        <a className="link-icon" href="#contact">
          Contact Us
        </a>
        <a className="link-icon" href="#about">
          About
        </a>
      </nav>
    </div>
  );
};
export default Header;
