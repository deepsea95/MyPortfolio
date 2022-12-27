import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg ">
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
				<div className="collapse navbar-collapse position-absolute end-0" id="navbarNav">
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
