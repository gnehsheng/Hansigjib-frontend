import React from 'react'

const MenuItems = ({ items }) => {
    return (
        <div className='section-center'>
            {items.map((item) => {
                const { id, img, name, description, price } = item
                return (
                    <article key={id} className="menu-item">
                        <img src={img} alt={name} className="photo" />
                        <div className="item-info">
                            <header>
                                <h4>{name}</h4>
                                <h4 className="price">${price}</h4>
                            </header>
                            <p className="item-text">{description}</p>
                            <button type='button' onClick={''}>Add To Cart</button>
                        </div>
                    </article>
                );
            })}
        </div>
    )
}

export default MenuItems