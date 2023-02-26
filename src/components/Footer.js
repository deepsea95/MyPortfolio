import { CiLinkedin } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import LogoFooterNero from "../Assets/Logo-nero-footer.png";
import LogoFooterBianco from "../Assets/Logo-bianco-footer.png";
import { useTranslation } from "react-i18next";

const getFromLocalStorage = () => {
  if (localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
};

function Footer() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  //Stato iniziale per la nostra modalità
  const [theme, setTheme] = useState(getFromLocalStorage());

  //Cambia il valore dello state theme
  const cambiaTema = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  useEffect(() => {
    //Attacca classe al html tag
    document.documentElement.className = theme;

    //inserisco valore di theme nel localStorage ogni volta viene mutato il suo state
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <hr style={{ width: "100%" }} />

      <div className="d-flex gap-3 ms-4">
        {theme === "light-mode" ? (
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "15px",
            }}
            onClick={cambiaTema}
          >
            <MdOutlineDarkMode color="black" size="30" />
          </button>
        ) : (
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              marginLeft: "15px",
            }}
            onClick={cambiaTema}
          >
            <MdOutlineLightMode color="white" size="30" />
          </button>
        )}

        <select onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="it">Italiano</option>
        </select>
      </div>

      <footer>
        {theme === "light-mode" ? (
          <img className="footer-logo" src={LogoFooterNero} alt="Logo-img" />
        ) : (
          <img className="footer-logo" src={LogoFooterBianco} alt="Logo-img" />
        )}

        <div className="footer-link">
          <Link to="/about" className="link">
            {t("about")}
          </Link>
          <Link to="/contact" className="link">
            {t("contact")}
          </Link>
        </div>

        <div className="icon-footer">
          <a
            href="https://www.linkedin.com/in/angelo-de-rosa-"
            target="_blank"
            rel="noreferrer"
          >
            <CiLinkedin size="35" />
          </a>

          <a
            href="https://github.com/deepsea95"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithubAlt size="35" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
