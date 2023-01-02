import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';
// import LogoNavbarNero from '../Assets/logo-navbar-nero.png';
import LogoNavbarBianco from '../Assets/logo-navbar-bianco.png';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<div className="nav-section ms-4">
			<Link to="/" className="logo-width">
				<img width="20%" src={LogoNavbarBianco} alt="Logo-img" />
			</Link>

			<header>
				<nav ref={navRef}>
					<Link to="/" className="link">
						Home
					</Link>

					<Link to="/about" className="link">
						Riguardo me
					</Link>

					<Link to="/skills" className="link">
						Competenze
					</Link>

					<Link to="/qualification" className="link">
						Esperienze
					</Link>

					<Link to="/contact" className="link">
						Contatti
					</Link>

					<button className="nav-btn nav-close-btn" onClick={showNavbar}>
						<CgClose />
					</button>
				</nav>

				<button className="nav-btn" onClick={showNavbar}>
					<RxHamburgerMenu />
				</button>
			</header>
		</div>
	);
}

export default Navbar;
