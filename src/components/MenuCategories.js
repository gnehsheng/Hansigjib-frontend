import React from 'react'

export const MenuCategories = ({ categories, filterItems, activeCategory }) => {
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return (
                    <button
                        type="button"
                        className={`${activeCategory === category ? "filter-btn active" : "filter-btn"
                            }`}
                        key={index}
                        onClick={() => filterItems(category)}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    )
}
