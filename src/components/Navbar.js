import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const getFromLocalStorage = () => {
	if (localStorage.getItem('theme')) {
		return localStorage.getItem('theme');
	} else {
		return 'light-mode';
	}
};

function Navbar() {
	//Stato iniziale per la nostra modalità
	const [ theme, setTheme ] = useState(getFromLocalStorage());

	//Cambia il valore dello state theme
	const cambiaTema = () => {
		if (theme === 'light-mode') {
			setTheme('dark-mode');
		} else {
			setTheme('light-mode');
		}
	};

	useEffect(
		() => {
			//Attacca classe al html tag
			document.documentElement.className = theme;

			//inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
			localStorage.setItem('theme', theme);
		},
		[ theme ]
	);

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Angelo
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<button className='BTN' onClick={cambiaTema}></button>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								Riguardo me
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/skills" className="nav-link">
								Competenze
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/qualification" className="nav-link">
								Esperienze
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/portfolio" className="nav-link">
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link">
								Contatti
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
