import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faFaceGrin } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-container'>
				<div className='header-list'>
					<div className='header-item active'>
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className='header-item'>
						<FontAwesomeIcon icon={faPlane} />
						<span>Flight booking</span>
					</div>
					<div className='header-item'>
						<FontAwesomeIcon icon={faCar} />
						<span>Car Rental</span>
					</div>
					<div className='header-item'>
						<FontAwesomeIcon icon={faBed} />
						<span>Attraction</span>
					</div>
					<div className='header-item'>
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport Taxi</span>
					</div>
				</div>
				<h1 className='header-title'>Get a discount on every booking, Awesome!</h1>
				<p className='header-subtitle'>
					We give you opportunity to access every resources you need for you tour through our booking platform
				</p>
				<button className='header-btn'>Sign In / Sign Up</button>
			<div className='header-search'>
				<div className='header-searchItem'>
					<FontAwesomeIcon icon={faBed} className='headerIcon' />
					<input type='search' placeholder='Where are you going?' className='headerInput' />
				</div>
				<div className='header-searchItem'>
					<FontAwesomeIcon icon={faCalendar} className='headerIcon'/>
					<span className='search-text'>date to date</span>
				</div>
				<div className='header-searchItem'>
					<FontAwesomeIcon icon={faFaceGrin} className='headerIcon'/>
					<span className='search-text'>2 adult 2 children 1 room</span>
				</div>
        <div className='header-searchItem'>
					<button>Serart</button>
				</div>
			</div>
			</div>
		</div>
	);
};

export default Header;
