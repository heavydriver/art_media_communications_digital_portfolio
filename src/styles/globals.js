import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

    ::-webkit-scrollbar {
      width: 0.7vw
    }

    ::-webkit-scrollbar-track {
      background: #131b2c;
      border-radius: 100vw;
      margin-block: 0.5em;
    }

    ::-webkit-scrollbar-thumb {
      background: #0F1624;
      border-radius: 100vw;
      border: 0.25em solid #152139
    }

  }
  body {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${(props) => props.theme.colors.background1};
    color: ${(props) => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
