import { BsPatchCheckFill } from 'react-icons/bs';

function SkillsCard() {
	return (
		<div>
            <h1 className='d-flex justify-content-center mb-5'>Competenze</h1>
			<div className="skills-section d-flex justify-content-center" style={{ gap: '30px', flexWrap: 'wrap' }}>
				<div>
					<div className="card shadow p-3 mb-5" style={{ borderRadius: '0' }}>
						<div className="card-body">
							<h5 className="card-title text-center mb-4">Frontend Skills</h5>
							<div className="skills-container">
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>HTML</h5>
								</div>
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>CSS</h5>
								</div>
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>SASS</h5>
								</div>
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>JavaScript</h5>
								</div>
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>React</h5>
								</div>
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>Bootstrap</h5>
								</div>
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>GIT</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="card shadow p-3" style={{ borderRadius: '0' }}>
						<div className="card-body">
							<h5 className="card-title text-center mb-4">Backend Skills</h5>
							<div className="skills-container">
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>Node.js</h5>
								</div>
								<div className="skills-content">
									<BsPatchCheckFill />
									<h5>Express.js</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SkillsCard;
