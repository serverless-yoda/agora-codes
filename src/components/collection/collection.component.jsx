import React from 'react'

import './collection.style.scss'

const Collection =({match}) => {
    console.log(match)
    return (
        <div className="collection-page">
            <h1>Collection: {match.params.collectionId}</h1>
        </div>
    )
}

export default Collection
