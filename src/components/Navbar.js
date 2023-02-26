import { useRef } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useTranslation } from "react-i18next";
// import LogoNavbarNero from '../Assets/logo-navbar-nero.png';
import LogoNavbarBianco from "../Assets/logo-navbar-bianco.png";

function Navbar() {
  const { t } = useTranslation();

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
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
            {t("about")}
          </Link>

          <Link to="/skills" className="link">
            {t("skills")}
          </Link>

          <Link to="/project" className="link">
            {t("projects")}
          </Link>

          <Link to="/qualification" className="link">
            {t("experience")}
          </Link>

          <Link to="/contact" className="link">
            {t("contact")}
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
