import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

 
 function Navbar() {
 	const [toggleMenu, setToggleMenu] = useState(false);
 	return (
 		<nav className='navbar__container'>
 		    <div className='navbar__logo-wrapper'>
 		    	<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656753265/Fraudit/fraudit_1_cayjok.png" alt="Logo" />
 		    	<h3 className="shift">Fr<p className='paint'>audit</p></h3>
 		    </div>
 		    <div className='navbar__link-wrapper'>
 		    	<ul className='links'>
 		    		<li className='navbar__link-item'>
 		    			<Link to='/' className='link-item'>Home</Link>
 		    		</li>
 		    		<li className='navbar__link-item'>
 		    			<Link to='/transactions' className='link-item'>Transactions</Link>
 		    		</li>
 		    		<li className='navbar__link-item'>
 		    			<Link to='/my-dashboard' className='link-item'>My dashboard</Link>
 		    		</li>
 		    		<li className='navbar__link-item'>
 		    			<Link to='/faqs' className='link-item'>FAQs</Link>
 		    		</li>
 		    	</ul>
 		    </div>
 		    <div className='navbar__button-wrapper'>
 		    	<button className='login-btn navbar-btn'>Login</button>
 		    	<button className='signup-btn navbar-btn'>Sign up</button>
 		    </div>
 		    <div className='navbar-small'>
 		    	<div className='menu-icon'>
 		    	    <i className='fas fa-bars' style={{fontSize:'27px'}} onClick={()=>setToggleMenu(true)}></i>
 		    	</div>
 		    	{
 		    		toggleMenu && (
 		    		    <div className='navbar-wrapper-small'>
 		    		        <i className='fas fa-times nav-close' style={{fontSize:'27px'}} onClick={()=>setToggleMenu(false)}></i>
		 		    	    <ul className='links-small'>
			 		    		<li className='navbar__link-item'>
			 		    			<Link to='/' className='link-item' onClick={()=>setToggleMenu(false)}>Home</Link>
			 		    		</li>
			 		    		<li className='navbar__link-item'>
			 		    			<Link to='/transactions' className='link-item' onClick={()=>setToggleMenu(false)}>Transactions</Link>
			 		    		</li>
			 		    		<li className='navbar__link-item'>
			 		    			<Link to='/my-dashboard' className='link-item' onClick={()=>setToggleMenu(false)}>My dashboard</Link>
			 		    		</li>
			 		    		<li className='navbar__link-item'>
			 		    			<Link to='/faqs' className='link-item' onClick={()=>setToggleMenu(false)}>FAQs</Link>
			 		    		</li>
			 		    		<li className='navbar__link-item'>
			 		    			<Link to='/login' className='link-item' onClick={()=>setToggleMenu(false)}>Login In</Link>
			 		    		</li>
			 		    		<li className='navbar__link-item'>
			 		    			<Link to='/signup' className='link-item' onClick={()=>setToggleMenu(false)}>Sign Up</Link>
			 		    		</li>
		 		    	    </ul>
 		    	        </div>
 		    	    )
 		    	}
 		    </div>
 		</nav>
 	);
 } 

 export default Navbar;