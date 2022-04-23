import axios from 'axios';
import React, { useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import urlcat from 'urlcat';
import { BACKEND } from '../utils/utils';

export default function OrderConfirmation() {

    const id = useParams();
    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    const [transaction, setTransaction] = useState([])
    const [transactionSum, setTransactionSum] = useState('')

    useEffect(() => {
        console.log(id)
        axios.get(urlcat(BACKEND, '/transaction/' + id.id))
            .then((res) => {
                console.log(res)
                setTransaction(res.data.transactions)
                setTransactionSum(res.data.transactions.reduce((sum, {itemTotal}) => sum + itemTotal, 0))
            }).catch((error) => console.log(error))
    }, [])

    return (
        <div className='py-4 container'>
            <div className='row justify-content-center'>
                <h1 className='row justify-content-center'>ORDER SUMMARY</h1>
                <div className='col-12'>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {transaction.map((item) => {
                                return (
                                    <tr key='test'>
                            
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
                    <h2>Total Price: S${transactionSum}</h2>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-primary ms-2'
                        onClick={routeChange}
                    >Return to Home
                    </button>
                </div>

            </div>

        </div >
    )
}
