import { Navbar } from "../../components/Navbar/Navbar";
import { LoginSection } from "./LoginSCSS";
import { initSession } from "../../services/login.service";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, getValues } = useForm();

  const [solvingPromise, setSolvingPromise] = useState(false);
  const [promiseSolved, setPromiseSolved] = useState(true);
  const [promiseError, setPromiseError] = useState("");

  const onSession = async (data) => {
    const { email, password } = data;
    setSolvingPromise(true);

    const sessionData = await initSession(email, password);
    setSolvingPromise(false);

    if (!sessionData.promise) {
      setPromiseSolved(sessionData.promise);
      setPromiseError(sessionData.message);
      return;
    }

    localStorage.setItem("token", sessionData.token.token);
    localStorage.setItem("session", "true");
    navigate("/");
  };

  const onSubmit = () => {
    const { email, password } = getValues();
    onSession({ email, password });
  };

  return (
    <>
      <Navbar />
      <LoginSection>
        <h2>Welcome!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <input
              {...register("email")}
              type="text"
              placeholder="user@cinemavault.com"
            />
          </label>
          <br />
          <label>
            <input
              {...register("password")}
              type="password"
              placeholder="*****"
            />
          </label>
          <button type="submit">Sign In</button>
        </form>
        {!promiseSolved ? <p>{promiseError}</p> : null}
        {solvingPromise ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}
      </LoginSection>
    </>
  );
};
