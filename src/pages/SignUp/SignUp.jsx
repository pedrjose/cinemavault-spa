import { Navbar } from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { SignUpSection } from "./SignUpSCSS";
import "./SignUp.css";
import { useState } from "react";
import { initAccount } from "../../services/signup.service";
import { useNavigate } from "react-router-dom";
import { sendEmail, verifyEmail } from "../../services/verify.service";

export const SignUp = () => {
  const navigate = useNavigate();

  const [solvingPromise, setSolvingPromise] = useState(false);
  const [solvingSecondPromise, setSolvingSecondPromise] = useState(false);
  const [solvedPromise, setSolvedPromise] = useState(true);
  const [promiseError, setPromiseError] = useState("");

  const [verifyErrors, setVerifyErrors] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userCreated, setUserCreated] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState("");
  const [verifyEmailCode, setVerifyEmailCode] = useState("");

  const { register, handleSubmit, getValues } = useForm();

  const onSignUp = async (data) => {
    const { email, password } = data;
    setSolvingPromise(true);

    const submit = await initAccount(email, password);
    setSolvingPromise(false);

    if (!submit.promise) {
      setSolvedPromise(submit.promise);
      setPromiseError(submit.message);
      return;
    }

    sendEmail(email, submit.verify);

    setUserEmail(email);
    setVerifyEmailCode(submit.verify);
    setUserCreated(submit.promise);
    setSolvedPromise(submit.promise);
    setVerifyMessage(submit.message);
  };

  const onSubmit = () => {
    const { email, password } = getValues();
    onSignUp({ email, password });
  };

  const onVerify = async () => {
    const { verify } = getValues();

    setSolvingSecondPromise(true);
    if (verify === verifyEmailCode) {
      await verifyEmail(userEmail);
      setSolvingSecondPromise(false);
      navigate("/login");
    } else {
      setSolvingSecondPromise(false);
      setVerifyErrors(true);
    }
  };

  return (
    <>
      <Navbar />
      <SignUpSection>
        <h5>
          We hope you enjoy <i>Cinemavault</i>!
        </h5>
        {!userCreated ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <input
                {...register("email")}
                type="text"
                placeholder="Enter a valid email"
              />
            </label>
            <br />
            <label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter a strong password"
              />
            </label>
            <button>Next</button>
          </form>
        ) : null}
        {userCreated ? <p>{verifyMessage}</p> : null}
        {userCreated ? (
          <form onSubmit={handleSubmit(onVerify)}>
            <label>
              <input
                {...register("verify")}
                type="text"
                placeholder="Enter the verification code"
              />
            </label>
            <button>Verify & Go to Sign In</button>
          </form>
        ) : null}
        {!solvedPromise &&
        !solvingPromise &&
        promiseError === "Submit all required fields!" ? (
          <p>{promiseError}</p>
        ) : null}
        {!solvedPromise &&
        !solvingPromise &&
        promiseError !== "Submit all required fields!" ? (
          <p>Email already in use. Try another!</p>
        ) : null}
        {verifyErrors && !solvingSecondPromise ? (
          <p>Email verification failed. Try again!</p>
        ) : null}
        {solvingPromise ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}
        {solvingSecondPromise ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}
      </SignUpSection>
    </>
  );
};
