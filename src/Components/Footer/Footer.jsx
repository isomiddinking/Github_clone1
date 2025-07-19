import React, { useEffect } from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer" data-aos="fade-up">
      <div className="footer-container">
        <div className="footer-left">
          <FaGithub className="github-icon" />
          <p>© 2025 GitHub, Inc.</p>
        </div>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
          <a href="#">Status</a>
          <a href="#">Docs</a>
          <a href="#">Contact</a>
          <a href="#">Manage cookies</a>
          <a href="#">Do not share my personal information</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
