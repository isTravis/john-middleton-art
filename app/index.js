import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import routes from './Routes';

ReactDOM.render(
	<Router 
		history={browserHistory} 
		routes={routes} 
		render={applyRouterMiddleware(useScroll((prevRouterProps, nextRouterProps) => {
			if (prevRouterProps && prevRouterProps.location.pathname === nextRouterProps.location.pathname) {
				return false;
			}
			return true;
		}))} 
	/>,
	document.getElementById('root')
);
