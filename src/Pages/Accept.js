import React from 'react';
import './Accept.css';

function Accept () {

	return (
		<div className='accept-page'>
			<div>
			    <img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656814012/Fraudit/Path_fvegtf.png" alt="accept" />
			</div>
			<section className='word-sht'>
				<h3>The fraud score is above 70%</h3>
				<h3>Orders can sent out</h3>
			</section>
			<button className='confirm-btn'>Confirm Transaction</button>
		</div>
	)
}

export default Accept;