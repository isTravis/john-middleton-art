import React from 'react';
import { Link } from 'react-router-dom';

const AppNav = function() {
	return (
		<div className={'header-wrapper'}>

			<Link to={'/'} className={'header-title'}>John Middleton</Link>
			<div className={'header-nav'}>
				<Link to={'/'} className={'header-nav-item'}>Home</Link>
				<Link to={'/statement'} className={'header-nav-item'}>Statement</Link>
				<Link to={'/about'} className={'header-nav-item'}>About</Link>
				{/* <Link to={'/contact'} className={'header-nav-item'}>Contact</Link> */}
			</div>
		</div>
	);
};

export default AppNav;

