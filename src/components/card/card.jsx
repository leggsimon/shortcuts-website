import React from 'react';
import Link from 'next/link';
import './card.scss';

const Card = props => {
	const iconLink =
		props.color === 'empty'
			? 'https://img.icons8.com/ios/500/006fc9/plus-math-filled.png'
			: 'https://img.icons8.com/ios-glyphs/50/ffffff/alarm-clock.png';
	return (
		<Link href={props.href}>
			<a className={`card ${props.color}`}>
				<div className="meta">
					<img class="icon" src={iconLink} alt="" />
					{props.color !== 'empty' && (
						<img
							class="ellipsis"
							src="https://img.icons8.com/ios-glyphs/30/ffffff/ellipsis.png"
						/>
					)}
				</div>

				{props.children}
			</a>
		</Link>
	);
};

export default Card;
