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

  img {
    max-height: 15rem;
    max-width: 30rem;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
  }
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
