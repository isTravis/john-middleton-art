import React from 'react';
import Helmet from 'react-helmet';

const NoMatch = function() {
	return (
		<div className={'not-found-wrapper'}>
			<Helmet title="Not Found · John Middleton Art" />
			Page not found
		</div>
	);
};

export default NoMatch;
