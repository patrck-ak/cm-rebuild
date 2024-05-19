import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  :root {
  scroll-behavior: smooth;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  input, button {
    outline: none;
    border: none;
  }


  body {
    transition: background-color ease-in-out 0.2s;
    height: 100vh;
    background-color: ${({ theme }) => theme.main.bg};
  }

`;
