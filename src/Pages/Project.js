import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HoverCards from "../components/projectComponents/hoverCards";


function Project() {
    return ( 
        <React.Fragment>
            <Navbar/>
            <HoverCards/>
            <Footer/>
        </React.Fragment>
     );
}

export default Project;