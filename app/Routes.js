import React from 'react';
import { Route } from 'react-router';
import { App, Landing, NoMatch, Portfolio } from 'components';

export default (
	<Route component={App}>
		<Route path="/" component={Landing} />
		<Route path="/portfolio/:id" component={Portfolio} />
		<Route path="*" component={NoMatch} />
	</Route>
);
