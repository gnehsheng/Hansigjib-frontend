import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { MenuItemCard } from '../components/MenuItemCard'
import data from '../data/data'

export const MenuPage2 = () => {

    return (
        <div>
            <h1 className='text-center mt-3'>MENU</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map((item, index) => {
                        return (
                            <MenuItemCard img={item.img}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                                item={item}
                                quantity={item.quantity}
                                key={index} />
                        )
                    })}
                </div>
            </section>

        </div>
    )
}
