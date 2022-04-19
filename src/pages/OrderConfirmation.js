import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import urlcat from 'urlcat';
import { BACKEND } from '../utils/utils';

export default function OrderConfirmation() {

    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    const [transaction, setTransaction] = useState([])
    const [transactionSum, setTransactionSum] = useState('')

    useEffect(() => {
        axios.get(urlcat(BACKEND, 'transaction'))
            .then((res) => {
                console.log(res.data.map((el)=> el._id))
                // console.log(res.data)
                // setTransactionSum(res.data[0].transactionCollection.forEach((el)))
            }).catch((error) => console.log(error))
    }, [])

    return (
        <div className='py-4 container'>
            {/* <div className='row justify-content-center'>
                <h1 className='row justify-content-center'>ORDER SUMMARY</h1>
                <div className='col-12'>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {transaction.map((item) => {

                                return (
                                    <tr key='test'>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} alt={item.name} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>S${item.price}</td>
                                        <td>{item.quantity}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total Price: S${item.itemTotal}</h2>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-primary ms-2'
                        onClick={routeChange}
                    >Return to Home
                    </button>
                </div>

            </div> */}

        </div >
    )
}
