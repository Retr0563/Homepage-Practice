import "./Footer.css";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGamepad,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-copy">
          <span>
            © {new Date().getFullYear()} Retr0Wrld. All Rights Reserved
          </span>
          <div className="footer-socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://playstation.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGamepad />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
