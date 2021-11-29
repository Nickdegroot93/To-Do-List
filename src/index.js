import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './Styles/GlobalStyle';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Styles/MuiTheme';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
