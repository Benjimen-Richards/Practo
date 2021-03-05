import React from 'react'
import './Css/Card2.css';
const Card2 = (props) => {
    return (
        <div className='Card_container2'>
            <div className="card">
            <img src={props.data.image} alt='/'/>
            <div className="card-body2">
            <a href='/'>{props.data.title}</a>
            <br/>
                <span className="card-text">{props.data.para}</span>
                <p className="card-text">{props.data.by}</p>
            </div>
            </div>
        </div>
    )
}

export default Card2
