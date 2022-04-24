import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import urlcat from 'urlcat';
import { BACKEND } from '../utils/utils'
import Modal from '../components/Modal';
import '../style/account.css'

export default function AccountPage() {
    //console.log('document', document.cookie);
    const [userRes, setUserRes] = useState([])
    const [deleteUser, setDeleteUser] = useState()
    const [transactionRes, setTransactionRes] = useState([])
    const [modalOpen, setModalOpen] = useState(false);

    const navigate = useNavigate();
    const routeChange = () => {
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
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        axios.get(urlcat(BACKEND, './user/account'),
            {
                withCredentials: true
            })
            .then((res) => {
                setUserRes(res.data)
                setTransactionRes(res.data.userTransaction)
                console.log(res.data.userTransaction)
                
            })
            .catch((error) => console.log(error));
    }, [])

    return (
        <div className="container">
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <div className=" box-2  flex-column h-100">
                <div className="mt-1">
                    <p className="mb-0 h-1">Welcome, {(userRes.name)}</p>
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
                            <button className='btn btn-info btn-sm' onClick={routeChange}>Update particulars</button>
                            <span className="fas fa-chevron-right ms-1" />
                            <button className='btn btn-danger btn-sm' onClick={() => deleteAccount(deleteUser)}>Delete Account</button>
                        </div>
                    </div>
                </div>
                <span className="fas fa-chevron-right ms-1" />
                <div className='col-10'>
                    <p className="mb-0 text-muted">
                        Past Transactions
                    </p>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {transactionRes.map((el, index) => {
                                return (
                                    <tr key={index}>
                                        <td style={{cursor: 'pointer'}} onClick={()=>{setModalOpen(true)}}>{el.createdAt.slice(0, 10)}</td>
                                        
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                </div>
                
            </div>
            
        </div >


    )
}