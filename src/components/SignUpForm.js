import React, { useState } from 'react'
import axios from 'axios'
import urlcat from "urlcat"
import { BACKEND } from "../utils/utils";
import { useNavigate } from 'react-router-dom';


export default function SignUpForm() {

    const [userDetails, setUserDetails] = useState({ name: '', username: '', password: '' })
    const navigate = useNavigate()

    function submitHandler(e) {

        e.preventDefault()
        axios.post(urlcat(BACKEND, '/user/signup'), {
            name: userDetails.name,
            username: userDetails.username,
            password: userDetails.password,

        })
            .then(res => {
                if (res.status === 200) {
                    navigate('/account')
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
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <div className='form-inner'>
                    <h2>SIGNUP</h2>

                    <div className='form-group'>
                        <label htmlFor='name'>Name:</label>
                        <input type='name' name='name' id='name' onChange={(e) => handleChange(e)} value={userDetails.name} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='username'>Username:</label>
                        <input type='username' name='username' id='username' onChange={(e) => handleChange(e)} value={userDetails.username} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' name='password' id='password' onChange={(e) => handleChange(e)} value={userDetails.password} />
                    </div>
                    <input type='submit' value='SIGNUP' />
                </div>
                <button onClick={navigate('/signup')}>Sign Up here!</button>
            </form>
        </div>
    )
}