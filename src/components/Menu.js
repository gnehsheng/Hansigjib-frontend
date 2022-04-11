import React from 'react'

export default function Menu({ menu }) {
  return (
    <div className="section-center">
      {menu.map((menuItem) => {
        const { name, img, price, description } = menuItem
        return (
          <article className="menu-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">N{price}</h4>
              </header>
              <p className="item-text">{description}</p>
            </div>
          </article>
        )
      })}
    </div>
  )
}