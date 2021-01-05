import React from 'react'

function Card(props) {
    return (
        <div className={"card-container "  + props.color}>
            <img src={props.image} className="card-container__img" alt="card img"></img>
            <div className="card-container-text">
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Card;
