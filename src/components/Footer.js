import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<footer className='footer__container'>
			<div className='footer__logo-wrapper'>
				<div className='footer-logo'>
				    <div>
						<img className='footer-image' src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656753265/Fraudit/fraudit_1_cayjok.png" alt="Logo" />
						<h2 className="shift">Fr<p className='paint'>audit</p></h2>
					</div>
					<p className='paral'>Best Security for your business.</p>
				</div>
				<p className='copy'>&copy;2022  Fraudit.  All right reserved</p>
			</div>
			<div className='footer-content'>
				<div className='company'>
				    <h3>Company</h3>
					<p>About us</p>
					<p>Dashboard</p>
					<p>Trandactions</p>
					<p>FAQs</p>
					<p>Contact Us</p>
				</div>
				<div className='about'>
				    <h3>About Us</h3>
					<p>Careers</p>
					<p>Press and News</p>
					<p>Patnership</p>
					<p>Privacy Policy</p>
					<p>Terms of Service</p>
				</div>
				<div className='contact'>
				    <h3>Contact</h3>
					<p>Get connected with</p>
					<p>Facebook</p>
					<p>Twitter</p>
					<p>Instagram</p>
					<p>Linkedln</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer;