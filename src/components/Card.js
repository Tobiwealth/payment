import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';

const Card = () => {
	return (
		<div className='card__container'>
			<div className='card-words'>
			    <h3>Don’t fall for scams</h3>
			    <p>Verify customer details  before sending goods out</p>
			</div>
			<div className='cards__wrapper'>
				<div className='card__wrapper'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656767513/Fraudit/Rectangle_6_1_bqntrp.png" alt="Card" />
					<p>Nike Jordan Air face cap</p>
					<div className='label'>
						<div className='flex'>
							<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656767586/Fraudit/Ellipse_1_bcxaey.png" alt="vector" />
							<p>Daniel James</p>
						</div>
						<Link className='card-link' to='/verify'>Verify order</Link>
					</div>
				</div>
				<div className='card__wrapper'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656767513/Fraudit/Rectangle_6_1_bqntrp.png" alt="Card" />
					<p>Nike Jordan Air face cap</p>
					<div className='label'>
						<div className='flex'>
							<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656767586/Fraudit/Ellipse_1_bcxaey.png" alt="vector" />
							<p>Daniel James</p>
						</div> 
						<Link className='card-link' to='/verify'>Verify order</Link>
					</div>
				</div>
				<div className='card__wrapper'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656767513/Fraudit/Rectangle_6_1_bqntrp.png" alt="Card" />
					<p>Nike Jordan Air face cap</p>
					<div className='label'>
						<div className='flex'>
							<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656767586/Fraudit/Ellipse_1_bcxaey.png" alt="vector" />
							<p>Daniel James</p>
						</div> 
						<Link className='card-link' to='/verify'>Verify order</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card;