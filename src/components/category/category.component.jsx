import React from 'react'

import './category.style.scss'

const Category =({match}) => {
    console.log(match)
    return (
        <div className="category">
            <h1>Category: {match.params.categoryId}</h1>
        </div>
    )
}

export default Category
