import React from 'react';
import {Link} from 'react-router-dom';
import './Operation.css';

const Operation = () => {
	return (
		<div className='operation__container'>
			<div className='operation-words'>
			    <h2>Our Operations</h2>
			    <p>How we ensure all round professional security</p>
			</div>
			<div className='op__card-wrapper'>
				<div className='op-card'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656775110/Fraudit/Rectangle_6_2_fmrlck.png" alt="cards" />
					<h5>Link buyer and seller together.</h5>
					<p><Link className='op-link' to='/view'>view details</Link></p>
				</div>
				<div className='op-card'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656775110/Fraudit/Rectangle_6_3_uli2ru.png" alt="cards" />
					<h5>Get customer personal information for review.</h5>
					<p><Link className='op-link' to='/view'>view details</Link></p>
				</div>
				<div className='op-card'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656775110/Fraudit/Rectangle_6_4_c0v6vg.png" alt="cards" />
					<h5>Verify accurately if the information is true or not.</h5>
					<p><Link className='op-link' to='/view'>view details</Link></p>
				</div>
			</div>
		</div>
	)
}

export default Operation;