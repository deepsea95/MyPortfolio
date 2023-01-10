import React from 'react';

const MovingSquares = () => {
	const squares = [];
	for (let i = 0; i < 10; i++) {
		const left = Math.floor(Math.random() * 100);
		const top = Math.floor(Math.random() * 100);
		squares.push(
			<div
				key={i}
				className="square"
				style={{
					left: `${left}%`,
					top: `${top}%`
				}}
			/>
		);
	}
	return <div className="squares-container">{squares}</div>;
};

export default MovingSquares;
