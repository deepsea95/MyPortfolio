import { FiFileText } from 'react-icons/fi';
import { useTranslation } from "react-i18next";
import CV from '../Assets/CV - Angelo De Rosa.pdf';
import ImgProfile from '../Assets/profile-pic.png';

function AboutCard() {
	const { t } = useTranslation();

	return (
		<div className="container about-section">
			<h1 className="about-title">{t("about")}</h1>
			<div className="about-container">
				<img src={ImgProfile} className="avatar-about" alt='img-profile'/>
				<div>
					<p style={{ marginBottom: '50px' }}>
						{t("aboutDescription")}
					</p>
					<a download="" href={CV} className="BTN cv-BTN">
						Download CV <FiFileText size="25px" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default AboutCard;
