import React from 'react'
import './Css/Footer.css'
const Footer = () => {
    return (
        <div className='Footer_container'>
        <div className='FooterBlocks'>    
            <div className='block'>a</div>
            <div  className='block'>b</div>
            <div  className='block'> c</div>
            <div  className='block'>d</div>
        </div>
        <div className='Footer_img'>
            <img src="https://www.practostatic.com/web-assets/images/white_practo_logo.svg" alt='/'/>
            <span>Copyright © 2017, Practo. All rights reserved.</span>
        </div>
        </div>
    )
}

export default Footer
