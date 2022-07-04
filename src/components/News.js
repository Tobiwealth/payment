import React from 'react';
import './News.css';

const News = () => {
	return (
		<div className='news__container'>
			<h2>Subscribe to our newsletter</h2>
			<p>Stay up to date with the latest traffic trends straight to your mail</p>
			<div className='news__input-wrapper'>
				<input type="text" placeholder='Enter your email address' />
				<button>Subscribe</button>
			</div>
		</div>
	)
}

export default News;