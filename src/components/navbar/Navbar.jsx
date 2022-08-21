import React from 'react';
import './Navbar.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='navbar-container'>
				<span>Event Booking</span>
				<div className='navbar-item'>
					<button className='navbar-item-button'>Register</button>
					<button className='navbar-item-button'>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
