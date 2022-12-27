import React from "react";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Contact() {
    return ( 
        <React.Fragment>
            <Navbar />
            <ContactCard />
            <Footer />
        </React.Fragment>
     );
}

export default Contact;