import React from 'react';
import './MailBanner.scss';

const MailBanner = () => {
	return (
		<div className='mailBanner'>
			<h1 className='text-1'>Book with us and save more!</h1>
			<span className='text-2'>Subscribe let's send you our booking updates</span>
			<div className='mailWrapper'>
				<input type='text' className='input' placeholder='Email' />
				<button>Subscribe</button>
			</div>
            <div className='check-container'>

			<input type='checkbox' value='' />
			<span className='checkbox'>Send me a link to get free bookings</span>
            </div>
		</div>
	);
};

export default MailBanner;
