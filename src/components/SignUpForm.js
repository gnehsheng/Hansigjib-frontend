import React, { useState } from 'react'
import axios from 'axios'
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";
import { useNavigate } from 'react-router-dom';
import image from '../data/placeholder.png'
import '../style/signup.css'

export default function SignUpForm() {

    const [userDetails, setUserDetails] = useState({ name: '', username: '', password: '' })
    const navigate = useNavigate()
    const routeChange = () => {
        let path = `/login`;
        navigate(path);
    }

    function submitHandler(e) {
        e.preventDefault()
        axios.post(urlcat(BACKEND, '/user/signup'), {
            name: userDetails.name,
            username: userDetails.username,
            password: userDetails.password,
        })
            .then(res => {
                if (res.status === 200) {
                    navigate('/login')
                }
                return (
                    res.userDetails
                )

            }).catch((error) => console.log(error.message))
    }

    function handleChange(e) {
        const newData = { ...userDetails }
        newData[e.target.id] = e.target.value
        setUserDetails(newData)
    }

    return (
        <div className="container">
            <div className="body d-md-flex align-items-center justify-content-between">
                <div className="box-1 mt-md-0 mt-5"> <img src={image} className="" alt="" /> </div>
                <div className=" box-2 d-flex flex-column h-100">
                    <div className="mt-3">
                        <p className="mb-1 h-1">Create Account</p>
                        <div className="d-flex flex-column ">
                            <p className="text-muted mb-2">Sign up here</p>
                            <div className='form-group'>
                                <form onSubmit={(e) => submitHandler(e)}>
                                    <div className='"text-muted mb-2"'>
                                        <div className='form-group'>
                                            <label className='text-muted mb-2' htmlFor='name'>Name:</label>
                                            <input type='name' className='form-control' name='name' id='name' onChange={(e) => handleChange(e)} value={userDetails.name} />
                                        </div>
                                        <div className='form-group'>
                                            <label className='text-muted mb-2' htmlFor='username'>Username:</label>
                                            <input type='username' className='form-control' name='username' id='username' onChange={(e) => handleChange(e)} value={userDetails.username} />
                                        </div>
                                        <div className='form-group'>
                                            <label className='text-muted mb-2' htmlFor='password'>Password:</label>
                                            <input type='password' className='form-control ' name='password' id='password' onChange={(e) => handleChange(e)} value={userDetails.password} />
                                            <span className="fas fa-chevron-right ms-1" />
                                        </div>

                                        <button className='btn btn-success btn-sm' type='submit'>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                            <div className="mt-3">
                                <p className="mb-0 text-muted">Already have an account?</p>
                                <div className="btn btn-primary" onClick={routeChange}
                                >Log in here!
                                    <span className="fas fa-chevron-right ms-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="fas fa-times" />
            </div>
        </div>
    )
}