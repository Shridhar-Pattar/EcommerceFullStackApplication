import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import heroine from '../Assets/heroin.png'
const Hero  = () => {
  return (
    <div className='hero'>
 <div className="hero-left">
<h2>NEW ARRIVALS ONLY</h2>
<div>
  <div className="hero-hand-icon">
    <p>Latest </p>
    <img src={hand_icon} alt="" />
  </div>
  <p>collections</p>
  <p>for every Taste</p>
 </div> 
 <div className="hero-latest-btn">
  <div>Latest Collection</div>
  <img src={arrow_icon} alt="" />
 </div>
 </div>
 

<div className="hero-right">
<img src={heroine} alt="" />
</div>

    </div>
  )
}

export default Hero 