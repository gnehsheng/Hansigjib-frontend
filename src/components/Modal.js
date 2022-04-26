import axios from "axios";
import React, { useEffect, useState } from "react";
import urlcat from "urlcat";
import '../style/Modal.css'
import { BACKEND } from "../utils/utils";

export default function Modal({ setOpenModal }) {

    const [transactionRes, setTransactionRes] = useState([])

    useEffect(() => {
        axios.get(urlcat(BACKEND, './user/account'),
            {
                withCredentials: true
            })
            .then((res) => {
                setTransactionRes(res.data.userTransaction)
            })
            .catch((error) => console.log(error));
    }, [])

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className='col-12'>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {transactionRes.map((item) => {
                                return (
                                    item.transactions.map((el, index) => {
                                        return (
                                            < tr key={index} >
                                                <td>{el.name}</td>
                                                <td>S${el.price}</td>
                                                <td>{el.quantity}</td>
                                            </tr>
                                        )
                                    })
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}