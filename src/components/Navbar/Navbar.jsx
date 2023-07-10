import { useState } from "react";
import { Nav, JustifySpace } from "./NavbarSCSS";
import "./Navbar.css";

import LogoBar from "../../assets/img/LogoBar.png";
import Hamburguer from "../../assets/img/Hamburguer.png";
import UserIcon from "../../assets/img/UserIcon.png";
import { GenreModal } from "./Modal/GenreModal/GenreModal";
import { SettingsModal } from "../Navbar/Modal/SettingsModal/SettingsModal";
import { AccountModal } from "./Modal/AccountModal/AccountModal";

export function Navbar() {
  const [genreModal, setGenreModal] = useState(1);
  const [settingsModal, setSettingsModal] = useState(1);
  const [session, setSession] = useState(false);

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
        <h1 className="logo-box">
          <img src={LogoBar} alt="Cinemavault Logo" />
        </h1>
        <div className="button-box">
          {session ? (
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
        {settingsModal % 2 === 0 && session ? <SettingsModal /> : null}
        {settingsModal % 2 === 0 && !session ? <AccountModal /> : null}
      </JustifySpace>
    </>
  );
}
