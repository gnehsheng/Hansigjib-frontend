import React, { useState } from 'react'
import items from '../data/data'
import { MenuCategories } from '../components/MenuCategories'
import MenuItems from '../components/MenuItems'
import '../style/menu.css'

const allCategories = ['all', ...new Set(items.map((item) => item.foodtype))]

export default function MenuPage() {

  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (foodtype) => {
    setActiveCategory(foodtype);
    if (foodtype === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.foodtype === foodtype);
    setMenuItems(newItems);
  };

  return (
    <div className="btn-container">
      <main>
        <section className='menu-section'>
          <div className='menu-title'>
            <h2>Menu</h2>
            <div className='underline'></div>
          </div>
          <MenuCategories categories={categories} activeCategory={activeCategory} filterItems={filterItems} />
          <MenuItems items={menuItems} />
        </section>
      </main>
    </div>
  )
}