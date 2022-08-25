import React from 'react';
import {  properties } from '../../db';
import './PropertyList.scss';

const PropertyList = () => {
	return (
		<div className='property-list'>
			{properties.map((property) => (
				<div className='propertyItems'>
					<img src={property.image} alt='' />
					<div className='propertyTitle'>
						<h1>{property.title}</h1>
						<h2>{property.subtitle}</h2>

					</div>
				</div>
			))}
		</div>
	);
};

export default PropertyList;
