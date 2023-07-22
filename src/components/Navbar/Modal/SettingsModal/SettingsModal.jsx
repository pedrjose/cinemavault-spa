import { Settings } from "./SettingsModalSCSS";
import { useNavigate } from "react-router-dom";

export const SettingsModal = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.setItem("session", "false");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <Settings>
        <button onClick={() => logOut()}>Log out</button>
      </Settings>
    </>
  );
};
