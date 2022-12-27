import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SkillsCard from "../components/SkillsCard";

function Skills() {
    return ( 
        <React.Fragment>
            <Navbar />
            <SkillsCard />
            <Footer />
        </React.Fragment>
     );
}

export default Skills;