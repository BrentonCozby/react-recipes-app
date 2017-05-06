import React from 'react'
import './Card.css'

const Card = ({ title, image, id, getOneRecipe }) => {

    const imageStyle = {
        backgroundImage: `url(${image || ''})`
    }

    const onCardClick = () => {
        getOneRecipe(id)
    }

    return (
        <div onClick={onCardClick} className="Card">
            <div className="image" style={imageStyle}></div>
            <p className="title">{title}</p>
        </div>
    )
}

export default Card
