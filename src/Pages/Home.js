import React from 'react';
import Herosection from '../components/Herosection';
import Card from '../components/Card';
import AboutUs from '../components/AboutUs';
import Operation from '../components/Operation';
import News from '../components/News';
import Footer from '../components/Footer';

const Home = () => {
	return (
		<div>
			<Herosection />
			<Card />
			<AboutUs />
			<Operation />
			<News />
			<Footer />
		</div>
	)
}

export default Home;