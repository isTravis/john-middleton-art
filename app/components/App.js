import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import AppNav from './AppNav';
import AppFooter from './AppFooter';

require('../../static/style.scss');

export const App = React.createClass({
	propTypes: {
		children: PropTypes.object,
	},
	render() {
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
						{ property: 'og:image', content: 'https://www.listoflinks.co/static/logo_large.png' },
						{ property: 'og:image:url', content: 'https://www.listoflinks.co/static/logo_large.png' },
						{ property: 'og:image:width', content: '500' },
						{ name: 'twitter:card', content: 'summary' },
						{ name: 'twitter:site', content: '@listoflinks' },
						{ name: 'twitter:title', content: 'List of Links' },
						{ name: 'twitter:description', content: 'A simple tool testing PubPub v3' },
						{ name: 'twitter:image', content: 'https://www.listoflinks.co/static/logo_large.png' },
						{ name: 'twitter:image:alt', content: 'Logo for List of Links' }
					]} 
				/> 
				<AppNav />
				<div style={{ minHeight: 'calc(100vh - 75px)' }}>{this.props.children}</div>
				<AppFooter />
			</div>
		);
	},

});


export default App;

