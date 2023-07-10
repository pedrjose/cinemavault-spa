import styled from "styled-components";

export const HomeSection1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333f58;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-family: "Inter", sans-serif;

  img {
    height: 10rem;
  }

  span {
    flex-direction: row;
    button {
      margin-left: 2.5rem;
      margin-right: 2.5rem;
      display: inline-block;
      outline: 0;
      border: 0;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
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
  }
`;

export const HomeSection2 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #4a7a96;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-family: "Inter", sans-serif;

  img {
    height: 20rem;
  }
`;

export const HomeSection3 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333f58;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-family: "Inter", sans-serif;

  img {
    height: 10rem;
  }

  span {
    flex-direction: row;
  }

  img {
    &:hover {
      opacity: 0.5;
    }
  }
`;
