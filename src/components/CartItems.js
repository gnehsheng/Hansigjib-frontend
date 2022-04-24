import React from 'react'
import { useCart } from 'react-use-cart'
import axios from 'axios';
import urlcat from 'urlcat';
import { BACKEND } from '../utils/utils';
import { useNavigate } from 'react-router-dom';

export default function CartItems() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()

    const navigate = useNavigate();
    const routeChange = (transID) => {
        let path = `/transaction/` + transID;
        navigate(path);
    }

    function submitForm(items) {

        axios.post(urlcat(BACKEND, '/transaction/userTransaction'),

            {
                items: items
            },
            {
                withCredentials: true,

            },
        )
            .then((res) => {

                if (res.status === 200) {
                    routeChange(res.data.transaction_id)
                    // emptyCart()
                }
            })
            .catch((error) => console.log(error));
    }

    if (isEmpty)
        return <h1 className='text-center'>Your cart is empty</h1>

    return (
        <div className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h4>Cart ({totalUniqueItems})</h4>
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
                                        <td>
                                            <button className='btn btn-warning ms-2' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            <button className='btn btn-warning ms-2' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                            <button className='btn btn-danger ms-2' onClick={() => removeItem(item.id)}>Remove Item</button>
                                        </td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='col-auto ms-auto'>
                    <h2>Total Price: S${cartTotal}</h2>
                </div>
                <div className='col-auto'>
                    <button className='btn btn-danger ms-2' onClick={emptyCart}
                    >Clear Cart
                    </button>
                    <button className='btn btn-primary ms-2' onClick={() => submitForm(items)}>Send Order</button>
                </div>
            </div>
        </div>
    )
}
