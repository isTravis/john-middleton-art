import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
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
			<Helmet
				title={`${feature.title} · John Middleton Art`}
				description={feature.caption}
				meta={[
					{ name: 'description', content: feature.caption },
					{ property: 'og:title', content: `${feature.title} · John Middleton Art` },
					{ property: 'og:type', content: 'website' },
					{ property: 'og:description', content: feature.caption },
					{ property: 'og:url', content: `https://www.johnmiddletonart.com/portfolio/${imageId}` },
					{ property: 'og:image', content: `https://www.johnmiddletonart.com/images/${feature.filename}` },
					{ property: 'og:image:url', content: `https://www.johnmiddletonart.com/images/${feature.filename}` },
					{ property: 'og:image:width', content: '350' },
					{ name: 'twitter:card', content: 'summary' },
					{ name: 'twitter:title', content: `${feature.title} · John Middleton Art` },
					{ name: 'twitter:description', content: feature.caption },
					{ name: 'twitter:image', content: `https://www.johnmiddletonart.com/images/${feature.filename}` },
					{ name: 'twitter:image:alt', content: feature.caption }
				]}
			/>
			<Image image={feature} />
		</div>
	);
};

Portfolio.propTypes = propTypes;
export default Portfolio;
