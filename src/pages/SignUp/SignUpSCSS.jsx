import styled from "styled-components";

export const SignUpSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ee8695;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-family: "Inter", sans-serif;

  h5 {
    color: #27232a;
  }

  input {
    padding: 6px 12px;
    background: #27232a;
    border: 1px solid rgb(60, 63, 68);
    border-radius: 15px;
    font-size: 13px;
    font-family: "Inter", sans-serif;
    color: rgb(247, 248, 248);
    height: 1.5rem;
    width: 13rem;
    appearance: none;
    transition: border 0.15s ease 0s;
    :focus {
      outline: none;
      box-shadow: none;
      border-color: rgb(100, 153, 255);
    }
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }

  button {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    display: inline-block;
    outline: 0;
    border: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    background-color: #333f58;
    color: white;
    height: 38px;
    padding: 8px 24px;
    border-radius: 50px;
    box-shadow: 0 4px 11px 0 rgb(37 44 97 / 15%),
      0 1px 3px 0 rgb(93 100 148 / 20%);
    transition: all 0.2s ease-out;
    &:hover {
      box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
        rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    button {
      margin-top: 1rem;
    }
  }

  p {
    color: #27232a;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;
