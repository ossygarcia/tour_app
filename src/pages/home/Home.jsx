import React from 'react';
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './Home.scss';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className='home-container' />
			<Featured />
			<Featured />
			<Featured />
		</div>
	);
};

export default Home;
