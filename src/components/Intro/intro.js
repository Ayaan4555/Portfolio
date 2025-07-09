import React from "react";
import "./intro.css";
import bg from "../../assets/portfolioAyaanImg.png";
import btnImg from "../../assets/hireme.png";

import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello ,</span>
        <span className="introText">
          I'm <span className="introName">Ayaan</span> <br /> Full Stack
          Developer{" "}
        </span>

        <p className="introPara">
          I am a Full Stack Developer creating
          <br /> visually appealing and user friendly websites.
        </p>

        <a
          href="/Ayaan_Sayyed_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Check CV
          </button>
        </a>
      </div>

      <img src={bg} alt="" className="bg" />
    </section>
  );
};

export default Intro;
