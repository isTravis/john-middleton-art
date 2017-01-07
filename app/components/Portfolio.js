import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import content from '../content';
import Image from './Image';

export const Portfolio = React.createClass({
	propTypes: {
		params: PropTypes.object,
	},

	render() {
		const params = this.props.params || {};
		const items = content || [];
		const feature = items.reduce((previous, current)=> {
			if (current.id === Number(params.id)) { return current; }
			return previous;
		}, undefined);
		return (
			<div className={'portfolio-wrapper'}>
				<Image image={feature} />
			</div>
		);
	}
});


export default Portfolio;
