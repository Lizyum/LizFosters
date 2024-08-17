import Header from '../Components/Header';
import me_img from "../assets/me.jpg";
import React, {useState} from 'react';
import {Toggle} from '../Components/Toggle';
import { FontChanger } from '../Components/FontChanger';


export default function Home(){
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
            <h1>Hey!</h1>
            <p>My name is Lizbeth. I foster animals and post them here so their forever homes can find them!</p>
            <img src={me_img} alt="Welcome Image" style={{ width: '700px', height: '500px' }} />
        </main>
    </div>
    );
}