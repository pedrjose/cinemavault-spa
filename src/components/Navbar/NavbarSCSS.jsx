import styled from "styled-components";

export const Nav = styled.nav`
  z-index: 9;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: #292831;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  h1 {
    img {
      width: auto;
      max-height: 3rem;
    }
  }

  button {
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    text-align: inherit;
    text-decoration: none;
    appearance: none;

    img {
      width: auto;
      max-height: 2.5rem;

      &:hover {
        opacity: 0.5;
      }
    }
  }
`;

export const JustifySpace = styled.span`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: end;
`;
