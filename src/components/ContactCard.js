import { MdOutlineEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';

function ContactCard() {
	return (
		<div>
			<div
				className="d-flex flex-column justify-content-center text-dark"
				style={{ gap: '30px', flexWrap: 'wrap' }}
			>
				<div>
					<div className="card shadow p-3">
						<div className="card-body text-center">
							<BsTelephone size="25" />
							<h5 className="card-title text-center mb-4 mt-3">Numero</h5>
							<p>3455850034</p>
						</div>
					</div>
				</div>
				<div>
					<div className="card shadow p-3">
						<div className="card-body text-center">
							<MdOutlineEmail size="25" />
							<h5 className="card-title text-center mb-4 mt-3">Email</h5>
							<p>angelo.derosa95@gmail.com</p>
						</div>
					</div>
				</div>
				<div>
					<div className="card shadow p-3">
						<div className="card-body text-center">
							<AiOutlineMessage size="25" />
							<h5 className="card-title text-center mb-4 mt-3">Messanger</h5>
							<p>angelo.derosa95</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;
