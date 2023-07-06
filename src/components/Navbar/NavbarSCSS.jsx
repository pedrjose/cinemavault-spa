import styled from "styled-components";

export const Nav = styled.nav`
  z-index: 1;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  justify-content: space-around;
  align-items: center;
  background-color: #27232a;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
