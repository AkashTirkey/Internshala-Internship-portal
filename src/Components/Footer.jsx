import React from "react";
import Styles from "../Styles/Footer.module.css";
import Gplay from "../assets/Footerimgs/google_play_store.png";
import AppStore from "../assets/Footerimgs/apple_app_store.png";
import ig from "../assets/Footerimgs/instagram.png";
import x from "../assets/Footerimgs/twitter.png";
import yt from "../assets/Footerimgs/youtube.png";
import ln from "../assets/Footerimgs/linkedin.png";

const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.Container}>
        <div className={Styles.links}>
          <div className={Styles.item}>
            <h3>About Us</h3>
            <ul>
              <li>We're Hiring</li>
              <li>Hire Interns for your Company</li>
              <li>Post a Job</li>
              <li>Competitions</li>
            </ul>
          </div>
          <div className={Styles.item}>
            <h3>Team Diary</h3>
            <ul>
              <li>Blog</li>
              <li>Our Services</li>
              <li>Free Job Alerts</li>
            </ul>
          </div>
          <div className={Styles.item}>
            <h3>Terms & Conditions</h3>
            <ul>
              <li>Privacy </li>
              <li>Contact Us</li>
              <li>Annual Returns</li>
              <li>Grievance Redressal</li>
              <li>Resume Maker</li>
            </ul>
          </div>
          <div className={Styles.item}>
            <h3>Sitemap</h3>
            <ul>
              <li>College TPO registration</li>
              <li>List of Companies</li>
              <li>Jobs for Women</li>
            </ul>
          </div>
        </div>

        {/* Google play images */}
        <div className={Styles.download}>
          <div className={Styles.downloadApps}>
            <img src={Gplay} alt="GooglePlay" />
            <img src={AppStore} alt="AppStore" />
          </div>

          <div className={Styles.social}>
            <img src={ig} alt="Instagram" />
            <img src={x} alt="X" />
            <img src={yt} alt="Youtube" />
            <img src={ln} alt="LinkedIn" />
          </div>
        </div>

        <div className={Styles.copyright}>
          <p>
            ©Copyright 2026 Internshala (Scholiverse Educare Private Limited)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
