import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const Image = React.createClass({
	propTypes: {
		image: PropTypes.object,
		hasLink: PropTypes.bool,
	},

	render() {
		const image = this.props.image || {};
		return (
			<div className={'image-wrapper'}>
				
				{this.props.hasLink &&
					<Link to={'/portfolio/' + image.id}>
						<img className={'image'} src={'../../static/images/' + image.filename}/>
					</Link>
				}
				{!this.props.hasLink &&
					<img className={'image'} src={'../../static/images/' + image.filename}/>
				}
				<div className={'image-title'}>{image.title}</div>
				<div className={'image-caption'}>{image.caption}</div>
			</div>
		);
	}
});


export default Image;
