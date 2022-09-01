import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='section_one'>
					<ul>
						<Link to='/'>Duplex</Link>
						<Link to='/'>Bongalow</Link>
						<Link to='/'>Estate</Link>
						<Link to='/'>Guest House</Link>
					</ul>
				</div>
				<div className='section_two'>
					<ul>
						<Link to='/'>Airports</Link>
						<Link to='/'>Gallery</Link>
						<Link to='/'>Cities</Link>
						<Link to='/'>Privacy & cookies</Link>
						<Link to='/'>booking</Link>
					</ul>
				</div>
				<div className='section_three'>
					<ul>
						<Link to='/'>Home</Link>
						<Link to='/'>Apartments</Link>
						<Link to='/'>Resorts</Link>
						<Link to='/'>Hotels</Link>
						<Link to='/'>Cafe</Link>
					</ul>
				</div>
				<div className='section_three'>
					<ul>
						<Link to='/'>Flight Finder</Link>
						<Link to='/'>Car Rental</Link>
						<Link to='/'>Restaurant Reservation</Link>
						<Link to='/'>Travel Agent</Link>
					</ul>
				</div>
			</div>
			<div className='copy'>
				<p>Copywrite &copy; 2022 by israel.....</p>
			</div>
		</div>
	);
};

export default Footer;
