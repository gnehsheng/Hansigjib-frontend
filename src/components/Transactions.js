import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import urlcat from 'urlcat'
import { BACKEND } from '../utils/utils'

export default function Transactions() {

    const navigate = useNavigate();
    const routeChange = () => {
        let path = `/`;
        navigate(path);
    }

    const [transaction, setTransaction] = useState({
        name: '',
        quantity: '',
        price: '',
    });

    function submitForm() {
        axios.post(urlcat(BACKEND, './transaction/create'), {
            name: transaction.name,
            quantity: transaction.quantity,
            price: transaction.price
        })
            .then((res) => {
                if (res.status === '200') {
                    console.log(res)
                }
            })
            .catch((error) => console.log(error));
    }

    return (
        <div>
            
        </div>
    )
}
