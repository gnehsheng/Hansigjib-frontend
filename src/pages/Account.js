import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BACKEND } from '../utils/utils'

export default function AccountPage() {

    const [approved, setApproved] = useState()
    
    useEffect(() => {
        axios.get(BACKEND, '/user/account')
        .then((res) => {
            console.log(res.data)
            setApproved(res.user)
        }).catch((error) => console.log(error))
    })

    return (
        <>
        <h2>Account</h2>
        {approved}
        </>
    )
}