import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import urlcat from 'urlcat';
import { BACKEND } from '../utils/utils'

export default function AccountPage() {
    //console.log('document', document.cookie);
    const [userRes, setUserRes] = useState([])
    const [deleteUser, setDeleteUser] = useState()

    const navigate = useNavigate ();
	const routeChange= () => {
		let path = `/update`;
		navigate(path);
	}

    function deleteAccount() {
        axios.delete(urlcat(BACKEND, '/user/delete'),
            {
                withCredentials: true
            })
            .then((res) => {
                setDeleteUser(res.data)
            })
    }

    useEffect(() => {
        axios.get(urlcat(BACKEND, './user/account'),
        {
            withCredentials: true
        })
            .then((res) => {
                setUserRes(res.data)
            })
    }, [])

    return (
        <div className="container">
            <div className="body d-md-flex align-items-center justify-content-between">
                <div className=" box-2 d-flex flex-column h-100">
                    <div className="mt-5">
                        <p className="mb-1 h-1">Welcome, {userRes.name}</p>
                        <div className="d-flex flex-column ">
                            <div className='form-group'>
                                <p className="mb-0 text-muted">Your details</p>
                                <span className="fas fa-chevron-right ms-1" />
                                <h4 className='mb-1'>
                                    Name: {userRes.name}
                                </h4>
                                <h4 className='mb-1'>
                                    Email: {userRes.username}
                                </h4>
                                <button onClick={routeChange}>Update particulars</button>
                                <span className="fas fa-chevron-right ms-1" />
                                <p className="mb-0 text-muted">
                                    Past Transactions
                                </p>
                                <button onClick={() => deleteAccount(deleteUser)}>Delete</button>
                            </div>

                        </div>
                    </div>
                </div>
                <span className="fas fa-times" />

            </div>
        </div>

    )
}