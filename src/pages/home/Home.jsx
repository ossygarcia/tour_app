import React from 'react';
import Featured from '../../components/featured/Featured';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import FeaturedProperty from '../featureProperty/FeaturedProperty';
import PropertyList from '../propertyList/PropertyList';
import './Home.scss';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<div className='homeContainer'>
				<Featured />
				<h3 className='homeTitle'>Browse Apartments</h3>
				<PropertyList />
				<h3 className='pTitle'>Beauty Apartments for Guest</h3>
				<FeaturedProperty />
			</div>
		</div>
	);
};

export default Home;
