import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbSend } from 'react-icons/tb';

function FormComponent() {
	const [ email, setEmail ] = useState('');
	const [ subject, setSubject ] = useState('');
	const [ message, setMessage ] = useState('');

	const submitHandler = async (e) => {
		e.preventDefault();
		e.target.reset();
		if (!email || !subject || !message) {
			return toast.error('Si prega di compilare e-mail, oggetto e il messaggio');
		} else {
			toast.success('messaggio inviato con successo');
		}
		try {
			const { data } = await axios.post(`http://localhost:5000/api/sendMail`, {
				email,
				subject,
				message
			});
			toast.success(data.message);
		} catch (err) {
			toast.error(err.response && err.response.data.message ? err.response.data.message : err.message);
		}
	};

	return (
		<div className="form-container">
			<ToastContainer position="top-center" limit={1} />

			<form onSubmit={submitHandler}>
				<div class="mb-3">
					<input
						type="email"
						placeholder="Email"
						class="form-control shadow"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<input
						type="text"
						placeholder="Oggetto"
						class="form-control shadow"
						id="subject"
						onChange={(e) => setSubject(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<textarea
						id="message"
						placeholder="Messaggio"
						class="form-control textarea shadow"
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" className="BTN" style={{ width: '300px', height: '50px' }}>
						Invia
						<TbSend size="30" className="p-1" />
					</button>
				</div>
			</form>
		</div>
	);
}

export default FormComponent;
