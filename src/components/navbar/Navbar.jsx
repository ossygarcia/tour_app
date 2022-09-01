import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-container'>
				<span>Event Booking</span>
				<div className='navbar-item'>
					<Link to='/' className='navbar-item-button'>
						Register
					</Link>
					<Link to='/' className='navbar-item-button'>
						Login
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
