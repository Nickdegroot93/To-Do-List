import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.light-theme {
   // Primary colors
   --color-primary-light: #FFF2E6;
    --color-primary: #FFD369;
    --color-primary-dark: #FFB832;
    // Secondary colors
    --color-secondary-light: #393E46;
    --color-secondary: #222831;
    --color-secondary-dark: #1F2429;
    // Default colors:
    --color-background:#FFD369;
    --color-white: #FFF;
    --color-off-white: #F5F5F5;
    --color-black: #000;
    --color-warning: #F05454;
    --color-success: #519872;
}

.dark-theme {
    // Primary colors
    --color-primary-light: #FFF2E6;
    --color-primary: #FFD369;
    --color-primary-dark: #FFB832;
    // Secondary colors
    --color-secondary-light: #1F2429;
    --color-secondary: #222831;
    --color-secondary-dark: #393E46;
    // Default colors:
    --color-background:#1F2429;
    --color-white: #FFF;
    --color-off-white: #F5F5F5;
    --color-black: #000;
    --color-warning: #F05454;
    --color-success: #519872;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0; 
    font-size: 16px;
   
}

body {
    font-family: 'Roboto', sans-serif;
    background-color: var(--color-background);
    color: var(--color-off-white);
}
`;

export default GlobalStyle;
