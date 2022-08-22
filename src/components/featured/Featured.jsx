import React from 'react';
import { Features } from '../../db';
import './Featured.scss';

const Featured = () => {
	return (
		<div className='featured'>
			{Features.map((item) => (
				<div className='featureItem' key={item.id}>
					<img src={item.image} alt='' width={340} />
					<div className='featureItem-info'>
						<h1 className='featureTitle'>{item.title}</h1>
						<p>{item.subtitle}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Featured;
