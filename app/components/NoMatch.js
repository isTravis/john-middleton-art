import React from 'react';
import Helmet from 'react-helmet';

export const NoMatch = React.createClass({

	render() {
		return (
			<div className={'not-found-wrapper'}>
				<Helmet title="Not Found · John Middleton Art" />
				Page not found
			</div>
		);
	}
});

export default NoMatch;
