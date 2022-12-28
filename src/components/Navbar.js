import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';

function Navbar() {
	// const [toggle, setToggle] = useState(false);

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};
	return (
		// <nav className="nav container">
		// 	<Link to="/" className="nav_logo">
		// 		Angelo
		// 	</Link>

		// 	<div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
		// 		<ul className="nav__list grid">
		// 			<li className="nav__item">
		// 				<Link to="/" className="nav__link">
		// 					Home
		// 				</Link>
		// 			</li>
		// 			<li className="nav__item">
		// 				<Link to="/about" className="nav__link">
		// 					Riguardo me
		// 				</Link>
		// 			</li>
		// 			<li className="nav__item">
		// 				<Link to="/skills" className="nav__link">
		// 					Competenze
		// 				</Link>
		// 			</li>
		// 			<li className="nav__item">
		// 				<Link to="/qualification" className="nav__link">
		// 					Esperienze
		// 				</Link>
		// 			</li>
		// 			<li className="nav__item">
		// 				<Link to="/portfolio" className="nav__link">
		// 					Portfolio
		// 				</Link>
		// 			</li>
		// 			<li className="nav__item">
		// 				<Link to="/contact" className="nav__link">
		// 					Contatti
		// 				</Link>
		// 			</li>
		// 		</ul>

		// 		<i className='nav__close' onClick={() => setToggle(!toggle)}>
		// 			<CgClose />
		// 		</i>
		// 	</div>

		// 	<div className='nav__toggle' onClick={() => setToggle(!toggle)}>
		// 		<RxHamburgerMenu size='25'/>
		// 	</div>
		// </nav>
		<div className="nav-section">
			<Link to="/">
				<h3>Angelo</h3>
			</Link>

			<header>
				<nav ref={navRef}>
					<Link to="/" className="">
						Home
					</Link>

					<Link to="/about" className="">
						Riguardo me
					</Link>

					<Link to="/skills" className="">
						Competenze
					</Link>

					<Link to="/qualification" className="">
						Esperienze
					</Link>

					<Link to="/portfolio" className="">
						Portfolio
					</Link>

					<Link to="/contact" className="">
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
