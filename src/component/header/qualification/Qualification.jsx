import React from "react";
import "./qualification.css";

import {FaBriefcase} from 'react-icons/fa'

const Qualification = () => {
    return (
            <div className="skills__content">
            <h3 className="skills__title">Mobile Apps</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">Mechanify</h3>
                            <span className="skills__level">Flutter Application</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">MLSA AIR Application</h3>
                            <span className="skills__level">Flutter Application</span>
                        </div>
                    </div>

                    
                </div>

                <div className="skills__group">
                <div className="skills__data">
                <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">SaudaSalaf</h3>
                            <span className="skills__level">Android Application</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">Nitters</h3>
                            <span className="skills__level">Android Application</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Qualification;