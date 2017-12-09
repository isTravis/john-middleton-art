import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import AppNav from './AppNav';
import AppFooter from './AppFooter';
import Landing from './Landing';
import About from './About';
import NoMatch from './NoMatch';
import Portfolio from './Portfolio';
import Statement from './Statement';

require('../style.scss');

const App = function() {
	return (
		<div>
			<Helmet
				title="John Middleton Art"
				meta={[
					{ name: 'description', content: 'John Middleton\'s Art' },
					{ property: 'og:title', content: 'John Middleton Art' },
					{ property: 'og:type', content: 'website' },
					{ property: 'og:description', content: 'John Middleton\'s Art' },
					{ property: 'og:url', content: 'https://www.johnmiddletonart.com/' },
					{ property: 'og:image', content: 'https://johnmiddletonart.com/static/logo.png' },
					{ property: 'og:image:url', content: 'https://johnmiddletonart.com/static/logo.png' },
					{ property: 'og:image:width', content: '350' },
					{ name: 'twitter:card', content: 'summary' },
					{ name: 'twitter:title', content: 'John Middleton Art' },
					{ name: 'twitter:description', content: 'Showcasing John Middleton\'s art' },
					{ name: 'twitter:image', content: 'https://johnmiddletonart.com/static/logo.png' },
					{ name: 'twitter:image:alt', content: 'Logo for John Middleton Art' }
				]}
			/>

			<AppNav />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/portfolio/:id" component={Portfolio} />
				<Route exact path="/about" component={About} />
				<Route exact path="/statement" component={Statement} />
				<Route path="*" component={NoMatch} />
			</Switch>
			<AppFooter />
		</div>
	);
};

export default withRouter(App);
