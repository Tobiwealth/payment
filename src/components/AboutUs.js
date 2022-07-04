import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
	return (
		<div className='aboutus__container'>
			<div className='aboutus__wrapper'>
			    <h2>About Us</h2>
			    <p>
				    Professional security for businesses wasn’t available, 
				    so we fixed it. Get genuine information on your customers before completing their orders. 
				    We provide professional security for your business.
			    </p>
			    <button className='aboutus-btn'>Learn more</button>
			</div>
			<div className='aboutus__image-wrapper'>
				<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656772805/Fraudit/Verified-pana_1_xad0mb.png" alt="About us" />
			</div>
		</div>
	)
}

export default AboutUs;