import React from 'react'
import './Css/Card.css';
const Card = (props) => {
    return (
        <div className='Card_container'>
            <div className="card">
            <img src={props.data.image} alt='/'/>
            <div className="card-body">
            <a href='/'>{props.data.title}</a>
                <p className="card-text">{props.data.para}</p>
            </div>
            </div>
        </div>
    )
}

export default Card
