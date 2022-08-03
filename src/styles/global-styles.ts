import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    padding: 0;
    margin: 0;
  }

  html{
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;

  }

  body{
    background-color: #DEDEDE;
  }
`;
