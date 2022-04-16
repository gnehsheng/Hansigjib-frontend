import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
	<CookiesProvider>
		<AuthProvider>
			<App />
		</AuthProvider>
	</CookiesProvider>,
	document.getElementById('root')
);
