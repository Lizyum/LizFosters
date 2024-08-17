import Header from '../Components/Header';
import alicia_sleeping from "../assets/alicia-sleeping.jpg";
import React, {useState} from 'react';
import { Toggle } from '../Components/Toggle';
import { FontChanger } from '../Components/FontChanger';
import alicia_walking from "../assets/alicia-walking.jpg";
import bubble_wrap_alicia from "../assets/bubble-wrap-alicia.jpg";


export default function Alicia(){
    const [isDark, setIsDark] = useState(true);
    const gallery_pic_size = { width: '300px', height: '450px' }

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
                <a href="fosters" className="back-button">Back</a>
                <h1>Meet Alicia</h1>
                <div className="apply-section">
                    <a href="https://www.onetail.org/available-pets/" className="apply-button">Apply</a>
                </div>
                <p>Alicia is a playful and loving cat looking for her forever home. She loves to cuddle and is very friendly with other pets.</p>
                <div className="gallery">
                    <img src={alicia_sleeping} alt="Alicia sleeping on a desk" style={gallery_pic_size} />
                    <img src={bubble_wrap_alicia} alt="Alicia playing with packing bubbles" style={gallery_pic_size} />
                </div>
            </main>
        </div>
    );
}