import styled from "styled-components";

export const Account = styled.div`
  z-index: 3;
  margin-top: 5.5rem;
  width: 10rem;
  height: 15rem;
  position: fixed;
  border-radius: 10px;
  background: #fbbbad;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  button {
    margin-left: 3rem;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    line-height: inherit;
    color: inherit;
    text-align: inherit;
    text-decoration: none;
    appearance: none;
    font-family: "Inter", sans-serif;
    font-size: 1rem;

    &:hover {
      font-weight: bold;
      font-size: 1.5rem;
      color: #292831;
    }
  }
`;
