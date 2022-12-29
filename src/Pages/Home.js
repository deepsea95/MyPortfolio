import React from 'react';
import Navbar from '../components/Navbar';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';
import Footer from '../components/Footer';
import ImgProfile from '../Assets/profile-pic.png';

function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<section className="container">
				<div className="icon">
					<a href="https://www.linkedin.com/in/angelo-de-rosa-"  target="_blank" rel="noreferrer">
						<CiLinkedin size="25" />
					</a>

					<a href="https://github.com/deepsea95"  target="_blank" rel="noreferrer">
						<VscGithubAlt size="25" />
					</a>
				</div>
				<div>
					<h1 className="title">Angelo De Rosa</h1>
					<h4 className="subtitle">Jr Full Stack Developer</h4>
					<p>
						Sono un Jr Full Stack Developer situato a Napoli, <br />
						e sono molto appassionato e dedito al mio lavoro.
					</p>
				</div>
				<img className="avatar" src={ImgProfile} alt='img-profile'/>
			</section>
			<Footer />
		</React.Fragment>
	);
}

export default Home;
