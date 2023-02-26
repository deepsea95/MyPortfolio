import React from 'react';
import Navbar from '../components/Navbar';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';
import Footer from '../components/Footer';
import ImgProfile from '../Assets/profile-pic.png';
import { useTranslation } from 'react-i18next';

function Home() {
	const { t } = useTranslation();

	return (
		<React.Fragment>
			<Navbar />
			<section className="container">
				<div className="icon">
					<a href="https://www.linkedin.com/in/angelo-de-rosa-"  target="_blank" rel="noreferrer">
						<CiLinkedin size="30" />
					</a>

					<a href="https://github.com/deepsea95"  target="_blank" rel="noreferrer">
						<VscGithubAlt size="30" />
					</a>
				</div>
				<div>
					<h1 className="title">Angelo De Rosa</h1>
					<h3 className="subtitle">Jr Developer</h3>
					<p>
						{t("homeDescription")}
					</p>
				</div>
				<img className="avatar" src={ImgProfile} alt='img-profile'/>
			</section>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
