import React from 'react';
import { featuredProperty } from '../../db';
import './FeaturedProperty.scss';

const FeaturedProperty = () => {
	return (
		<div className='fproperty'>
			{featuredProperty.map((item) => (
				<div className='fitems'>
					<img src={item.image} alt='' />
					<div className='fitemsInfo'>
						<span className='fname'>{item.name}</span>
						<span className='fcity'>{item.city}</span>
						<span className='fprice'>{item.price}</span>
						<div className='frating'>
							<button>{item.rating}</button>
							<span>Excellent</span>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FeaturedProperty;
