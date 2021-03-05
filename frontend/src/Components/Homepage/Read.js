import React from 'react'
import Card2 from './Card2'
import './Css/Read.css'
const Read = () => {
    return (
        <div>
            <div className='read_container'>
                    <div className='read_text'>
                        <span>Read top arcticles from health experts</span>
                        <h5>Health articles that keep you informed about good health practices and achieve your goals.
                        See all articles</h5>
                    <button className='blue_buttons'>See all articles</button>
                    </div>
                    <div className='read_img'>
                        <Card2 data={{image:"https://www.practostatic.com/fit/5fd27b74d9477cb633445cf3f105078bbc479910",title:"CORONAVIRUS",
                        para:"12 Coronavirus Myths and facts that you shiuld be aware of",by:"Dr.Diana Borgio"}}/>
                        <Card2 data={{image:"https://www.practostatic.com/fit/bade52edc7fb158bf627216bf96c2b881a97f30c",title:"VITAMINS AND SUPPLEMENTS",para:"Eating right to build immunity againt cold and viral infections",
                        by:"Dr.Diana Borgio"}}/>
                    </div>
                </div>
        </div>
    )
}

export default Read
