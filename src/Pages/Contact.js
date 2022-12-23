import React from "react";
import ContactCard from "../components/ContactCard";
import Navbar from "../components/Navbar";


function Contact() {
    return ( 
        <React.Fragment>
            <Navbar />
            <ContactCard />
        </React.Fragment>
     );
}

export default Contact;