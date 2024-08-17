import Header from '../Components/Header';
import React, {useState} from 'react';
import {Toggle} from '../Components/Toggle';
import { FontChanger } from '../Components/FontChanger';
import alicia_walking from "../assets/alicia-walking.jpg";
export default function Contact(){
    const [isDark, setIsDark] = useState(true);

    return (
        <div className="container" data-theme={isDark ? "dark" : "light"}>
            <nav>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="fosters">Current Fosters</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
                <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
                <FontChanger />

            </nav>

            <main>
                <h1>Contact</h1>
                <p>Want to meet before deciding to adopt? Schedule a playdate!</p>
                <div className="contact-item">
                    <img src={alicia_walking} alt="Alicia walking" style={{ width: '300px', height: '450px' }} />

                    <div className="details">
                        <h4>
                             <a href="mailto:lizbeth@example.com?subject=Playdate%20with%20AnimalName">
                             <button className="email-btn">Send me an email!</button>
                            </a>
                        </h4>
                    </div>
                    {/* <div className="details">
                        <h4><a href="mailto:lizbeth@example.com?subject=Playdate%20with%20AnimalName">Send me an email!</a></h4>
                    </div> */}
                </div>
                {/* Add more contact items as needed */}
            </main>
        </div>
    );

}