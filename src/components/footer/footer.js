// importing various folders/libraries to use here
import React from "react";
import { FaGithub } from "react-icons/fa";
import "./footer.css";


//function that creates a footer element for the App
function Footer() {
  return (
    <div className="footer-parent">
    
    <footer className="footer">
      <p className="copyright">&copy; Chris Yorke Landscaping</p>
    
      <li className="footer-item">
            <a
              rel="noreferrer"
              target="_blank"
              className="footerLinks"
              href="https://github.com/tyrkgithub"
            >
              tyrkpages  <FaGithub />
            </a>
          </li>
 
    </footer>
    </div>
  );
}
//exports the file to be used elsewhere
export default Footer;
