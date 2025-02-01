import React from 'react'
import '../../styles/About.css'
import CreampieFruit from '../../assets/creampie-fruit.png';

function About() {
  return (
    <div className='aboutus_section' id='about' style={{marginBottom: "150px"}}>
        <div className='gradient_blue'></div>
        <div className='whatisuranus '>
            <h1 className='goldman_regular'>Our Mission</h1>
            <div className="text_coin">
                <p>
                $CREAMPIE was created by <strong>Shitoshi Fartamoto</strong>, the legendary dev of Fartcoin! When you think about $CREAMPIE, do you think
                about that delicious cream pie we all devour or maybe something related to our creation and how life all begins like from a creampie?
                 Either way, we are trying to revolutionize the meaning of creampie and have you make the decision on what it really means to you. 
                 Embrace the creation of life and even that sweet treat we all love and join the $CREAMPIE cult today! 
                </p>
                <img src={CreampieFruit} loading='lazy' className='memecoin' alt="CreampieFruit" style={{margin: "15px"}} />
            </div>
        </div>

        

        
        
    </div>
  )
}

export default About