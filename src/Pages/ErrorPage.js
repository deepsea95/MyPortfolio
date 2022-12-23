import React from 'react';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
	const navigate = useNavigate();
	return (
		<div className="">
			<div className="d-flex justify-content-center align-items-center flex-column">
				<img src="https://miro.medium.com/max/720/1*hFwwQAW45673VGKrMPE2qQ.png" alt="error-img" />
				<button type="button" className="btn btn-light btn-lg" onClick={() => navigate('/')}>
					Torna alla Home
				</button>
			</div>
		</div>
	);
}
