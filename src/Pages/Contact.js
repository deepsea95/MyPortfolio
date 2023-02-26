import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactCard from '../components/ContactComponents/ContactCard';
import FormComponent from '../components/ContactComponents/FormComponent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact() {
	const { t } = useTranslation();

	return (
		<React.Fragment>
			<Navbar />
			<h1 className="d-flex justify-content-center mb-5">{t("contact")}</h1>
			<div className="main-container">
				<ContactCard />
				<FormComponent />
			</div>
			<Footer />
		</React.Fragment>
	);
}

export default Contact;
