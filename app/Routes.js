import React from 'react';
import { Route } from 'react-router';
import { App, About, Landing, NoMatch, Portfolio, Statement } from 'components';

export default (
	<Route component={App}>
		<Route path="/" component={Landing} />
		<Route path="/portfolio/:id" component={Portfolio} />
		<Route path="/about" component={About} />
		<Route path="/statement" component={Statement} />
		<Route path="*" component={NoMatch} />
	</Route>
);
