import React from "react";
import AboutCard from '../components/AboutCard';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
    return ( 
        <React.Fragment>
            <Navbar />
            <AboutCard />
            <Footer />
        </React.Fragment>
     );
}

export default About;