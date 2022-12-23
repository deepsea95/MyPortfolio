import { FiFileText } from 'react-icons/fi';

function AboutCard() {
	return (
		<div className='container about-section'>
			<h1 className='about-title'>About Me</h1>
			<div className="about-container">
				<img src="https://via.placeholder.com/330" className="avatar-img" />
				<div>
					<p style={{ marginBottom: '50px' }}>
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					</p>
					<button type="button" className="btn btn-light btn-lg">
						Download CV <FiFileText size="25px" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default AboutCard;
