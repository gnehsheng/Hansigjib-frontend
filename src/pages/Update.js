import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import urlcat from 'urlcat'
import { BACKEND } from '../utils/utils'

export default function Update() {

    const [userDetails, setUserDetails] = useState({ name: '', username: '', password: '' })
    const navigate = useNavigate()

    function submitHandler(e) {
        e.preventDefault()
        axios.put(urlcat(BACKEND, '/user/update'), {
            name: userDetails.name,
            password: userDetails.password,
        },
            {
                withCredentials: true
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
        <div className="container">
            <div className="body d-md-flex align-items-center justify-content-between">
                <div className=" box-2 d-flex flex-column h-100">
                    <div className="mt-3">
                        <p className="mb-1 h-1">Update</p>
                        <div className="d-flex flex-column ">
                            <div className='form-group'>
                                <form onSubmit={(e) => submitHandler(e)}>
                                    <div className='"text-muted mb-2"'>
                                        <div className='form-group'>
                                            <label className='text-muted mb-2' htmlFor='name'>Name:</label>
                                            <input type='name' className='form-control' name='name' id='name' onChange={(e) => handleChange(e)} value={userDetails.name} />
                                        </div>
                                        <div className='form-group'>
                                            <label className='text-muted mb-2' htmlFor='password'>Password:</label>
                                            <input type='password' className='form-control ' name='password' id='password' onChange={(e) => handleChange(e)} value={userDetails.password} />
                                            <span className="fas fa-chevron-right ms-1" />
                                        </div>

                                        <button className='btn btn-success btn-sm' type='submit'>Update particulars</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <span className="fas fa-times" />
            </div>
        </div>
    )
}
