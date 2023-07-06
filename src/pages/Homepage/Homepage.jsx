import { Navbar } from "../../components/Navbar/Navbar";
import { Home } from "./HomepageSCSS";
import cinema from "../../assets/img/cinema.png";
import "./Homepage.css";

export function Homepage() {
  return (
    <>
      <Navbar />
      <Home>
        <img src={cinema} />
        <h1>Fast, Free & Open Source</h1>
        <p>A collection of links to movies available in the public domain.</p>
        <span>
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </span>
      </Home>
    </>
  );
}
