import React from 'react';
import content from '../content';
import Image from './Image';

export const Landing = React.createClass({
	
	render() {
		const items = content || [];
		return (
			<div>
				<div className={'landing-statement'}>
					This is the artist's statment.
				</div>
				
				{items.map((item)=> {
					return (
						<div className={'landing-image-container'}>
							<Image key={'item-' + item.filename} image={item} hasLink={true} />
						</div>
					);

				})}
			</div>
		);
	}
});


export default Landing;
