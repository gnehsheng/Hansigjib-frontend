import React, { useState, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import AuthContext from '../context/AuthProvider';
import { cookie, useCookies } from 'react-cookie';
import axios from 'axios';
import urlcat from 'urlcat';
import { BACKEND } from '../utils/utils';
import { useNavigate } from 'react-router-dom';
import image from '../data/placeholder.png'
import '../style/login.css'

function LoginForm({ error }) {
	const { setAuth } = useAuth();
	const [details, setDetails] = useState({ username: '', password: '' });

	const navigate = useNavigate();
	const routeChange = () => {
		let path = `/signup`;
		navigate(path);
	}

	const dataContext = useContext(AuthContext);
	const [cookies, setCookies] = useCookies(['name']);

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
					/* Cookies part */
					// console.log("setting cookie");
					document.cookie = "user=" + details.username
					//console.log("document: ", document.cookie);
					//setAuth({ result: true });
					setAuth(document.cookie)
					navigate('/account');
				}
			})
			.catch((error) => console.log(error));
	}

	return (
		<div className="container">
			<div className="body d-md-flex align-items-center justify-content-between">
				<div className=" box-2 d-flex flex-column h-100">
					<div className="mt-5">
						<p className="mb-1 h-1">Login</p>
						<div className="d-flex flex-column ">
							<div className='form-group'>
								<form onSubmit={submitHandler}>
									<div className="form-inner">
										{error !== '' ? <div className="error">{error}</div> : ''}
										<div className="form-group">
											<label className="text-muted mb-2" htmlFor="username">Username:</label>
											<input className='form-control'
												type="username"
												name="username"
												id="username"
												onChange={(e) => setDetails({ ...details, username: e.target.value })}
												value={details.username}
											/>
										</div>
										<div className="form-group">
											<label className="text-muted mb-2" htmlFor="password">Password:</label>
											<input className='form-control'
												type="password"
												name="password"
												id="password"
												onChange={(e) => setDetails({ ...details, password: e.target.value })}
												value={details.password}
											/>
											<span className="fas fa-chevron-right ms-1" />
										</div>
										<button className='btn btn-success btn-sm' type="submit">LOGIN</button>
									</div>
								</form>
							</div>
							<div className="mt-3">
								<p className="mb-0 text-muted">Need an account?</p>
								<div className="btn btn-primary" onClick={routeChange}
								>Sign up here!
									<span className="fas fa-chevron-right ms-1" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<span className="fas fa-times" />
				<div className="box-1 mt-md-0 mt-5">
					<img src={image} className="" alt="" />
				</div>
			</div>
		</div>

	);
}

export default LoginForm;
