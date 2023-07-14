import { useState } from "react";
import { Nav, JustifySpace } from "./NavbarSCSS";
import "./Navbar.css";

import LogoBar from "../../assets/img/LogoBar.png";
import Hamburguer from "../../assets/img/Hamburguer.png";
import UserIcon from "../../assets/img/UserIcon.png";
import { GenreModal } from "./Modal/GenreModal/GenreModal";
import { SettingsModal } from "../Navbar/Modal/SettingsModal/SettingsModal";
import { AccountModal } from "./Modal/AccountModal/AccountModal";
import { Link } from "react-router-dom";

export function Navbar() {
  const [genreModal, setGenreModal] = useState(1);
  const [settingsModal, setSettingsModal] = useState(1);

  const openGenreModal = () => {
    if (settingsModal % 2 === 0) {
      setSettingsModal((prevState) => prevState + 1);
    }

    setGenreModal((prevState) => prevState + 1);
  };

  const openSettingsModal = () => {
    if (genreModal % 2 === 0) {
      setGenreModal((prevState) => prevState + 1);
    }

    setSettingsModal((prevState) => prevState + 1);
  };

  return (
    <>
      <Nav>
        <Link to="/">
          <h1 className="logo-box">
            <img src={LogoBar} alt="Cinemavault Logo" />
          </h1>
        </Link>
        <div className="button-box">
          {localStorage.getItem("session") === "true" ? (
            <button onClick={() => openGenreModal()}>
              <img src={Hamburguer} />
            </button>
          ) : null}
          <button onClick={() => openSettingsModal()}>
            <img src={UserIcon} />
          </button>
        </div>
      </Nav>
      <JustifySpace>
        {genreModal % 2 === 0 ? <GenreModal /> : null}
        {settingsModal % 2 === 0 &&
        localStorage.getItem("session") === "true" ? (
          <SettingsModal />
        ) : null}
        {settingsModal % 2 === 0 &&
        localStorage.getItem("session") === "false" ? (
          <AccountModal />
        ) : null}
      </JustifySpace>
    </>
  );
}
