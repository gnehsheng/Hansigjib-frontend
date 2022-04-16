import React from 'react'
import { useCart } from 'react-use-cart'


export default function MenuItemCard(props) {
    const { addItem } = useCart()

    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={props.img} class="card-img-top img-fluid" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.name}</h5>
                    <p class="card-price">S${props.price}</p>
                    <p class="card-text">{props.description}</p>
                    <button class='btn btn-success'
                        onClick={() => addItem(props.item)}
                    >Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
