import React from "react";
import "./qualification.css";
import {FaBriefcase} from 'react-icons/fa'


const QualTwo = () => {
    return (
            <div className="skills__content">
            <h3 className="skills__title">Web Apps</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">Bitters</h3>
                            <span className="skills__level">.NET Blazor Application</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">Banking Application</h3>
                            <span className="skills__level">Console Application</span>
                        </div>
                    </div>

                    
                </div>

                <div className="skills__group">
                <div className="skills__data">
                <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">Makaan</h3>
                            <span className="skills__level">PHP Application</span>
                        </div>
                    </div>

                    <div className="skills__data">
                    <FaBriefcase/>
                        <div>
                            <h3 className="skills__name">Facebook Automation</h3>
                            <span className="skills__level">Selenium Python</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default QualTwo;