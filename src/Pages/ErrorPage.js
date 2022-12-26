import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
	const navigate = useNavigate();
	return (
		<div>
			<div className="d-flex justify-content-center align-items-center flex-column">
				<h1>ERROR 404</h1>
				<button type="button" className="btn btn-light btn-lg" onClick={() => navigate('/')}>
					Torna alla Home
				</button>
			</div>
		</div>
	);
}
