import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand">
					Angelo
				</Link>
				<button
					className="navbar-toggler"
					// aria-label="Toggle navigation"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasTop"
					aria-controls="offcanvasTop"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="offcanvas offcanvas-top  text-bg-dark" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
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
