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
				<div>{this.props.children}</div>
				<AppFooter />
			</div>
		);
	},

});


export default App;

