import { Link } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Angelo
				</a>
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
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link active" aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/skills" className="nav-link">
								Skills
							</Link>
						</li>
                        <li className="nav-item">
							<Link to="/portfolio" className="nav-link">
								Portfolio
							</Link>
						</li>
                        <li className="nav-item">
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
