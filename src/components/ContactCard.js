

function ContactCard() {
	return (
		<div>
            <h1 className='d-flex justify-content-center mb-5'>Contact</h1>
			<div className="d-flex justify-content-center text-dark" style={{ gap: '30px', flexWrap: 'wrap' }}>
				<div>
					<div className="card shadow p-3 mb-5" style={{ borderRadius: '0' }}>
						<div className="card-body">
							<h5 className="card-title text-center mb-4">Email</h5>
						
						</div>
					</div>
				</div>
				<div>
					<div className="card shadow p-3" style={{ borderRadius: '0' }}>
						<div className="card-body">
							<h5 className="card-title text-center mb-4">Messanger</h5>
							
						</div>
					</div>
				</div>
                <div>
					<div className="card shadow p-3" style={{ borderRadius: '0' }}>
						<div className="card-body">
							<h5 className="card-title text-center mb-4">Number</h5>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactCard;