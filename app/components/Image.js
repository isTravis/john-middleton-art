import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
	image: PropTypes.object.isRequired,
	hasLink: PropTypes.bool,
};

const defaultProps = {
	hasLink: false,
};

const Image = function(props) {
	const image = props.image || {};
	const imageComponent = (
		<img
			alt={image.title}
			className={'image'}
			src={`/images/${image.filename}`}
		/>
	);
	const titleComponent = (
		<div className={'image-title'}>
			{image.title}
			{!!image.title && !!image.year && <span>, </span>}
			<span className={'image-year'}>{image.year}</span>
		</div>
	);

	return (
		<div className={'image-wrapper'}>
			{props.hasLink &&
				<Link to={`/portfolio/${image.id}`}>
					{imageComponent}
				</Link>
			}
			{!props.hasLink && imageComponent}

			{props.hasLink &&
				<Link to={`/portfolio/${image.id}`} className={'image-title-link'}>
					{titleComponent}
				</Link>
			}
			{!props.hasLink && titleComponent}

			<div className={'image-caption'}>{image.caption}</div>
		</div>
	);
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;
export default Image;
