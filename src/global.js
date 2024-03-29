import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
:root {
    --white: #ffffff;
    --gray-100: #e1e1e6;
    --gray-300: #c6c6c6;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;

    --blueviolet-300: #893dd0;
    --blueviolet-500: #8a2be2;
    --blueviolet-800: #6f1abd;

    --black-900: #000000;
    --red-500: #F75A68;
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background: var(--black-900);
    color: var(--white);
    -webkit-font-smoothing: antialiased;

    display: flex;
    align-items: center;
    justify-content: center;

}
body,input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 1rem;
}

::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
    background-color: var(--gray-300); 
  }
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--blueviolet-800); 
  }
`
