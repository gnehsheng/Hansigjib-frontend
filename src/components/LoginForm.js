import React, { useState, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import urlcat from 'urlcat';
import { BACKEND } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import axios from '../api/index';
import AuthContext from '../context/AuthProvider';
import { useCookies } from 'react-cookie';

function LoginForm({ error }) {
	const { setAuth } = useAuth();
	const [ details, setDetails ] = useState({ username: '', password: '' });
	const navigate = useNavigate();
	const dataContext = useContext(AuthContext);
	const [ cookies, setCookies ] = useCookies([ 'name' ]);

	function submitHandler(e) {
		e.preventDefault();
		axios
			.post(
				urlcat(BACKEND, '/user/login'),
				{
					username: details.username,
					password: details.password
				},
				{
					withCredentials: true,
                    credentials: 'include'
				}
			)
			.then((response) => {
				if (response.status === 200) {
					/* Context Part */
					//console.log("AuthContext", dataContext)

					/* Cookies part */
					//setCookies()
					//console.log("session", response.headers)
					//console.log("details", details)
					setAuth({ result: true });
					console.log('document', document.cookie);
					navigate('/account');
				}
			})
			.catch((error) => console.log(error));

	}

	return (
		<form onSubmit={submitHandler}>
			<div className="form-inner">
				<h2>Login</h2>
				{error !== '' ? <div className="error">{error}</div> : ''}
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						type="username"
						name="username"
						id="username"
						onChange={(e) => setDetails({ ...details, username: e.target.value })}
						value={details.username}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setDetails({ ...details, password: e.target.value })}
						value={details.password}
					/>
				</div>
				<input type="submit" value="LOGIN" />
			</div>
		</form>
	);
}

export default LoginForm;