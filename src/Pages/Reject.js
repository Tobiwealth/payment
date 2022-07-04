import React from 'react';
import './Accept.css';

const Reject = () => {
	return (
		<div className='reject-page'>
			<div>
			    <img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656814012/Fraudit/Vector_6_uefqrd.png" alt="Reject" />
			</div>
			<h3>The fraud score is below 70%</h3>
			<h3>Orders cannot be sent out</h3>
			<button className='confirm-btn'>Reject Transaction</button>
		</div>
	);
}

export default Reject;