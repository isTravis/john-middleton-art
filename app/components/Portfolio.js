import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import content from '../content';

const propTypes = {
	match: PropTypes.object.isRequired,
};

const Portfolio = function(props) {
	const imageId = props.match.params.id;
	const items = content || [];
	const feature = items.reduce((previous, current)=> {
		if (current.id === Number(imageId)) { return current; }
		return previous;
	}, undefined);

	return (
		<div className={'portfolio-wrapper'}>
			<Image image={feature} />
		</div>
	);
};

Portfolio.propTypes = propTypes;
export default Portfolio;
