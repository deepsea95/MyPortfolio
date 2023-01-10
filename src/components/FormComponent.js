import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TbSend } from 'react-icons/tb';

const FormComponent = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_d9tgmpb', 'template_93uon8o', form.current, '1QfMwVHAr3d2rEc_D').then(
			(result) => {
				toast.success('messaggio inviato');
			},
			e.target.reset()
		);
	};

	return (
		<div className="form-container">
			<ToastContainer position="top-center" limit={1} />

			<form ref={form} onSubmit={sendEmail}>
				<div class="mb-3">
					<input
						type="email"
						placeholder="Email"
						class="form-control shadow"
						name="email"
						// onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<input
						type="text"
						placeholder="Oggetto"
						class="form-control shadow"
						name="subject"
						// onChange={(e) => setSubject(e.target.value)}
					/>
				</div>
				<div class="mb-3">
					<textarea
						name="message"
						placeholder="Messaggio"
						class="form-control textarea shadow"
						// onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
				<div className="d-flex justify-content-center">
					<button type="submit" value="Send" className="BTN" style={{ width: '300px', height: '50px' }}>
						Invia
						<TbSend size="30" className="p-1" />
					</button>
					{/* <input type="submit" value="Send" className="BTN" style={{ width: '300px', height: '50px' }} /> */}
				</div>
			</form>
		</div>

		// <form ref={form} onSubmit={sendEmail}>
		// 	<label>Name</label>
		// 	<input type="text" name="subject" />
		// 	<label>Email</label>
		// 	<input type="email" name="email" />
		// 	<label>Message</label>
		// 	<textarea name="message" />
		// 	<input type="submit" value="Send" />
		// </form>
	);
};

export default FormComponent;
