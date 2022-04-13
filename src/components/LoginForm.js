import React, { useState } from 'react'
import axios from 'axios'
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";
import { useNavigate, Link } from 'react-router-dom';

function LoginForm({ error }) {
    const [details, setDetails] = useState({ username: '', password: '' })
    const navigate = useNavigate()

    function submitHandler(e) {
        e.preventDefault()
        axios.post(urlcat(BACKEND, "/user/login"), {
            username: details.username,
            password: details.password
        })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/account')
                }
            }).catch((error) => console.log(error))
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='form-inner'>
                    <h2>Login</h2>
                    {(error !== '') ? (<div className='error'>{error}</div>) : ''}
                    <div className='form-group'>
                        <label htmlFor='username'>Username:</label>
                        <input type='username' name='username' id='username' onChange={e => setDetails({ ...details, username: e.target.value })} value={details.username} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <input type='submit' value='LOGIN' />

                </div>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">

                    <Link to='/signup'>Sign Up</Link>
                </span>
            </p>
        </>
    )
}

export default LoginForm

// import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from "../context/AuthProvider";

// import axios from 'axios'
// import urlcat from "urlcat"
// import { BACKEND } from "../utils/utils";
// import { Link } from 'react-router-dom';

// const LoginForm = () => {
//     const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [username, password])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(urlcat(BACKEND, "/user/login"),
//                 { username, password }
//             );
//             console.log(JSON.stringify(response?.data));

//             setAuth({ username, password });
//             setUsername('');
//             setPassword('');
//             setSuccess(true);
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>You are logged in!</h1>
//                     <br />
//                     <p>
//                         <Link to='/main'>Go to Home</Link>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Sign In</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUsername(e.target.value)}
//                             value={username}
//                             required
//                         />

//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPassword(e.target.value)}
//                             value={password}
//                             required
//                         />
//                         <button>Sign In</button>
//                     </form>
//                     <p>
//                         Need an Account?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <Link to='/signup'>Sign Up</Link>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default LoginForm