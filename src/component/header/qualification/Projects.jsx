import React from "react";
import './qualification.css';
import QualTwo from "./QualTwo";
import Qualification from "./Qualification";

const Projects = () => {
    return (
        <section className="skills section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My personal Projects</span>
            <div className="skills__container container grid">
                <QualTwo />
                <Qualification />
            </div>
        </section>
    )

}

export default Projects;