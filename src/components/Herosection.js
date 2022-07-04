import React from 'react';
import './Herosection.css';

const Herosection = () => {
	return (
		<div className='herosection__container'>
			<div className='herosection-wrapper'>
			    <h2 className='hero__word1 hero__word'>Providing</h2>
			    <h2 className='hero__word2 hero__word'>Professional Security</h2>
			    <h2 className='hero__word3 hero__word'>for your business.</h2>
			    <p className='hero__paragraph'>Professional security for 
				    businesses wasn’t available, 
				    so we fixed it. 
				    Get genuine information on your customers 
				    before completing their orders.
			    </p>
			    <button className='hero__btn'>Learn more</button>
			</div>
			<div className='hero__image-wrapper'>
				<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656765156/Fraudit/Private_data-pana_1_stq8pj.png" alt="Image" />
			</div>
		</div>
	)
}

export default Herosection;