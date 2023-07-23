import styled from "styled-components";

export const UserHomePage1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333f58;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-family: "Inter", sans-serif;
`;

export const UserHomePage2 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #4a7a96;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-family: "Inter", sans-serif;
`;

export const SearchBar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  background-color: #27232a;

  input {
    background-color: #fff;
    height: 1rem;
    padding: 3px 7px;
    line-height: normal;
    border: 1px solid #a6a6a6;
    border-top-color: #949494;
    border-radius: 15px;
    box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
    outline: 0;
    color: #111;
    font-size: 13px;
    :focus {
      border-color: #ee8695;
      box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
  }
`;
