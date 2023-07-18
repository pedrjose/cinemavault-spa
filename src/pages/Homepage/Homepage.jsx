import { Navbar } from "../../components/Navbar/Navbar";
import { HomeSection1, HomeSection2, HomeSection3 } from "./HomepageSCSS";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import cinema from "../../assets/img/cinema.png";
import NotebookIcon from "../../assets/img/NotebookIcon.png";
import github from "../../assets/img/github.png";
import doc from "../../assets/img/doc.png";
import { useEffect } from "react";

export function Homepage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("session") === "true") {
      window.location.reload();
    } else {
      localStorage.setItem("session", "false");
    }
  }, []);
  return (
    <>
      <Navbar />
      <HomeSection1>
        <img src={cinema} alt="Cinema Icon" />
        <h1>Easy, Free & Open Source</h1>
        <p>A collection of movies available in public domain</p>
        <span>
          <button className="sign-in" onClick={() => navigate("/login")}>
            Sign In
          </button>
          <button className="sign-up" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </span>
      </HomeSection1>
      <HomeSection2>
        <h1>Available on multiple devices</h1>
        <p>Accessible from any device with a web browser installed</p>
        <img src={NotebookIcon} alt="Notebook Icon" />
      </HomeSection2>
      <HomeSection3>
        <h1>Open Source Space</h1>
        <span>
          <a href="" target="_blank" className="github">
            <img src={github} />
          </a>
          <a href="" target="_blank" className="doc">
            <img src={doc} />
          </a>
        </span>
        <h6>Copyright © 2023 @pedrlimadev</h6>
      </HomeSection3>
    </>
  );
}
