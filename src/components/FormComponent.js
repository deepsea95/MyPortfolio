import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbSend } from 'react-icons/tb';

const FormComponent = () => {
	const form = useRef(null);
	const [ error, setError ] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();

		if (!form.current.email.value, !form.current.subject.value, !form.current.message.value) {
			toast.error('Si prega di compilare il form');
			setError(true);
		} else {
			setError(false);
			try {
				await emailjs.sendForm('service_d9tgmpb', 'template_93uon8o', form.current, '1QfMwVHAr3d2rEc_D');
				toast.success('Email inviata con successo');
				e.target.reset()
			} catch (error) {
				toast.error("Errore nell'invio del form");
			}
		}
	};

	return (
		<div className="form-container">
			<ToastContainer position="top-center" limit={1} />

			<form ref={form} onSubmit={sendEmail}>
				<div class="mb-3">
					<input type="email" placeholder="Email" class="form-control shadow" name="email" />
				</div>
				<div class="mb-3">
					<input type="text" placeholder="Oggetto" class="form-control shadow" name="subject" />
				</div>
				<div class="mb-3">
					<textarea name="message" placeholder="Messaggio" class="form-control textarea shadow" />
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" value="Send" className="BTN" style={{ width: '300px', height: '50px' }}>
						Invia
						<TbSend size="30" className="p-1" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormComponent;
