import React from 'react';
import Navbar from '../components/Navbar';
import { CiLinkedin } from 'react-icons/ci';
import { VscGithubAlt } from 'react-icons/vsc';

function Home() {
	return (
		<React.Fragment>
			<Navbar />
			<section className="container">
				<div className="icon">
					<a href="https://www.linkedin.com/in/angelo-de-rosa-">
						<CiLinkedin size="25" />
					</a>

					<a href="https://github.com/deepsea95">
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
				<img className="avatar" src="https://via.placeholder.com/330" />
			</section>
		</React.Fragment>
	);
}

export default Home;
