import React from 'react'
import {FaDribbble, FaGithub} from 'react-icons/fa'

const Social = () => {
    return(
        <div className="home__social">
            <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
                <i class="uil uil-instagram"></i>
            </a>
            <a href="https://www.dribble.com/" className="home__social-icon" target="_blank">
                <FaDribbble />
            </a>
            <a href="https://github.com/" className="home__social-icon" target="_blank">
                <FaGithub />
            </a>
        </div>
    )
}

export default Social

