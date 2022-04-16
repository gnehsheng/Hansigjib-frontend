import React from 'react'
import { useCart } from 'react-use-cart'
import Transactions from '../components/Transactions'

export default function OrderConfirmation() {

    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
    } = useCart()

    if (isEmpty) return <h1 className='text-center'>You have no past orders</h1>

    return (
        <div className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h4>Total Items: {totalItems}</h4>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
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
                    <h2>Total Price: S${cartTotal}</h2>
                </div>

            </div>
        <Transactions />
        </div>
    )
}
