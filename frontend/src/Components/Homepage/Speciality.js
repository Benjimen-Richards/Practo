import React from 'react'
import Card from './Card'

const Speciality = () => {
    return (
        <div>
           <div className='specialities_container'>
                <div className='specialities_container_span'>
                    <div className='specialities_container_text'>
                    <span>Consult top doctors outline for any health concerns</span>
                    <h4 >Private online consultations with verified doctors in all specialists</h4>
                    </div>
                    <button>View All Specialities</button>
                </div>
                <div className='specialities_container_img'>
                    <img src='https://www.practostatic.com/consult/consult-home/symptoms_icon/irregular-painful+period.png' alt='/'/>
                    <img src='https://www.practostatic.com/consult/consult-home/symptoms_icon/Acne.png' alt='/'/>
                    <img src='https://www.practo.com/consult/static/images/top-speciality-sexology.svg' alt='/'/>
                    <img src='https://www.practostatic.com/consult/consult-home/symptoms_icon/coughing.png' alt='/'/>
                    <img src='https://www.practo.com/consult/static/images/top-speciality-pediatric.svg' alt='/'/>
                    <img src='https://www.practostatic.com/acred/search-assets/2/12-mental-wellness.png' alt='/'/>
                </div>
            </div>
            <div className='specialities_container'>
                <div className='specialities_container_span'>
                <div className='specialities_container_text'>
                    <span>Book an appointment for an in-clinic consultation</span>
                    <h4>Find experienced doctors across all specialities</h4>
                    </div>
                </div>
                <div className='appointment_container_img'>
                    <Card data={
                        {image:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dentist@2x.jpg",
                        title:"Dentist",
                        para:"Teething troubles?Schedule a dental checkup"}}/>
                    <Card data={
                        {image:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-gynecologist@2x.jpg",
                        title:"Gynecologist/obstetrician",
                        para:"Explore for womens health.pregnancy and infertility"}}/>
                    <Card data={
                        {image:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-dietitian@2x.jpg",
                        title:"Dietian/nutrition",
                        para:"Get guaridian eating right,weight management and sports nutrition"}}/>
                    <Card data={
                        {image:"https://www.practostatic.com/consumer-home/desktop/images/1558283618/sp-physiotherapist@2x.jpg",
                        title:"Physiotherapist",
                        para:"Pulled a muscle?Get it treated by a trained physiotherapist"}}/>
                </div>
                
            </div>
        </div>
    )
}

export default Speciality
