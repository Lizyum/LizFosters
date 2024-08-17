import Header from '../Components/Header';
import React, {useState} from 'react';
import {Toggle} from '../Components/Toggle';
import { FontChanger } from '../Components/FontChanger';
import niven_hershey from "../assets/niven-hershey.jpg";
import niven_sleeping from "../assets/niven-sleeping.jpg";

export default function Niven(){
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
                 <h1>Meet Niven</h1>
                 <div className="apply-section">
                     <a href="https://www.onetail.org/available-pets/" className="apply-button">Apply</a>
                 </div>
                 <p>Niven is a super goofy, loving dog. He loves to play fetch and tug of war.</p>
                 <div className="gallery">
                     <img src={niven_hershey} alt="Niven playing tug of war with his Hershey toy" style={gallery_pic_size} />
                     <img src={niven_sleeping} alt="Niven taking a nap in the car" style={gallery_pic_size} />
                 </div>
             </main>
            
        </div>

    );
}