import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import QualificationComponent from '../components/QualificationComponent';

function Qualification() {
	return (
		<React.Fragment>
			<Navbar />
            <QualificationComponent />
			<Footer />
		</React.Fragment>
	);
}

export default Qualification;
