import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPlane, faTaxi, faPerson, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import {Search} from '@mui/icons-material'

const Header = ({ type }) => {
	const [ open, setOpen ] = useState(false);
	const [ openOption, setOpenOption ] = useState(false);
	const [ option, setOption ] = useState({
		adult: 0,
		infant: 0,
		room: 0
	});
	const [ date, setDate ] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection'
		}
	]);

	const handleOption = (name, operation) => {
		setOption((prev) => {
			return {
				...prev,
				[name]: operation === 'i' ? option[name] + 1 : option[name] - 1
			};
		});
	};
	return (
		<div className='header'>
			<div className={type === 'list' ? 'header-container listMode' : 'header-container'}>
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
				{type !== 'list' && (
					<div>
						<h1 className='header-title'>Get a discount on every booking, Awesome!</h1>
						<p className='header-subtitle'>
							We give you opportunity to access every resources you need for you tour through our booking
							platform
						</p>
						<button className='btn'>Sign In / Sign Up</button>
						<div className='header-search'>
							<div className='header-searchItem'>
								<FontAwesomeIcon icon={faBed} className='headerIcon' />
								<input type='search' placeholder='Where are you going?' className='headerInput' />
							</div>
							<div className='header-searchItem'>
								<FontAwesomeIcon icon={faCalendar} className='headerIcon' />
								<span className='search-text' onClick={() => setOpen(!open)}>
									{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
										date[0].endDate,
										'MM/dd/yyyy'
									)}`}
								</span>
								{open && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([ item.selection ])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										className='date'
									/>
								)}
							</div>
							<div className='header-searchItem'>
								<FontAwesomeIcon icon={faPerson} className='headerIcon' />
								<span
									onClick={() => setOpenOption(!openOption)}
									className='search-text'
								>{`${option.adult} adult - ${option.infant} infant - ${option.room} room`}</span>
								{openOption && (
									<div className='header-option'>
										<div className='header-optionItem'>
											<span className='option-text'>Adult</span>
											<div className='option-container'>
												<button
													disabled={option.adult <= 1}
													className='option-btn'
													onClick={() => handleOption('adult', 'd')}
												>
													-
												</button>
												<span className='option-counter'>{option.adult}</span>
												<button
													className='option-btn'
													onClick={() => handleOption('adult', 'i')}
												>
													+
												</button>
											</div>
										</div>
										<div className='header-optionItem'>
											<span className='option-text'>Infant</span>
											<div className='option-container'>
												<button
													className='option-btn'
													onClick={() => handleOption('infant', 'd')}
													disabled={option.infant <= 1}
												>
													-
												</button>
												<span className='option-counter'>{option.infant}</span>
												<button
													className='option-btn'
													onClick={() => handleOption('infant', 'i')}
												>
													+
												</button>
											</div>
										</div>
										<div className='header-optionItem'>
											<span className='option-text'>Room</span>
											<div className='option-container'>
												<button
													disabled={option.room <= 1}
													className='option-btn'
													onClick={() => handleOption('room', 'd')}
												>
													-
												</button>
												<span className='option-counter'>{option.room}</span>
												<button
													className='option-btn'
													onClick={() => handleOption('room', 'i')}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</div>
							<div className='header-searchItem'>
								<Search className='header-btn'/>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
