import React from 'react'
import './Css/Download.css'
const Download = () => {
    return (
        <div className='Download_container'>
            <div className='dnd_image'>
                <img src='https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png' alt='/'/>
            </div>
            <div className='dnd_text'>
                <span>Download the Practo app</span>
                <h5>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</h5>
                <h6>Get the link to download the app</h6>
                <div className='number_container'>
                <div className="number_para">
                    <p>+91</p>
                    <input placeholder='Enter the phone number'/>
                </div>
                    <button>Send sms</button>
                </div>
            </div>
        </div>
    )
}

export default Download
