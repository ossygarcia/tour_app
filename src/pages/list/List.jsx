import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import './List.scss';

const List = () => {
	return (
		<div>
			<Navbar />
			<Header type='list' />
			<div className='list-container'>
				<div className='list-wrapper'>
					<div className='search-panel'>
						<div className='listItems'>
							<label>Destination</label>
							<input type='text' />
						</div>
						<div className='searchForm'>
							<label>Destination</label>
							<input type='text' />
						</div>
					</div>
					<div className='search-list'>Result</div>
				</div>
			</div>
		</div>
	);
};

export default List;
