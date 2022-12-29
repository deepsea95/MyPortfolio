import { FiFileText } from 'react-icons/fi';
import CV from '../Assets/CV - Angelo De Rosa.pdf';
import ImgProfile from '../Assets/profile-pic.png';

function AboutCard() {
	return (
		<div className="container about-section">
			<h1 className="about-title">Riguardo me</h1>
			<div className="about-container">
				<img src={ImgProfile} className="avatar-about" alt='img-profile'/>
				<div>
					<p style={{ marginBottom: '50px' }}>
						Jr Full Stack Web - amante della tecnologia , dei PC e dei videogame. <br/> Dopo aver lavorato per
						anni in vari ambiti ho deciso di dare una svolta alla mia vita, dedicandomi allo studio dello
						sviluppo web acquisendo quindi nuove competenze, formandomi tramite un corso intensivo proposto
						da Develhope, nel quale ho imparato lo sviluppo FE/BE/FS, con Html, CSS, SASS, Javascript, ad
						utilizzare Git e ho acquisito le competenze necessarie su TypeScript. Nella seconda parte ho
						approfondito tutti gli elementi essenziali per sviluppare software in React e ho sviluppato una
						vera applicazione web con metodologie agile.
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
