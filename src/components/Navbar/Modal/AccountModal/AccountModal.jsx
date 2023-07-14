import { Account } from "./AccountModalSCSS";
import { useNavigate } from "react-router-dom";

export const AccountModal = () => {
  const navigate = useNavigate();

  return (
    <>
      <Account>
        <button onClick={() => navigate("/login")}>Sign In</button>
        <button onClick={() => navigate("/signup")}>Sign Up</button>
      </Account>
    </>
  );
};
