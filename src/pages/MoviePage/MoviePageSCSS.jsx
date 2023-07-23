import styled from "styled-components";

export const MovieSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333f58;
  flex-direction: column;
  gap: 1rem;
  color: white;
  font-family: "Inter", sans-serif;
  overflow: auto;

  a {
    img {
      max-width: 3rem;
      border-radius: 15px;
      &:hover {
        box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
          rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
          rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      }
    }
  }
`;
