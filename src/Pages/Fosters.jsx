import Header from '../Components/Header';
import Card from '../Components/Card';
import Aliciapfp from '../assets/bubble-wrap-alicia.jpg';
import Nivenpfp from '../assets/niven-posing.jpg';
import React, {useState} from 'react';
import {Toggle} from '../Components/Toggle';
import { FontChanger } from '../Components/FontChanger';

export default function Fosters_Page(){
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
            <h1>Current Fosters!</h1>
            <Card page="alicia"src={Aliciapfp} alt="Picture of cat" name= "Alicia" description="A lovable, gentle cat -- Alicia is the sweetest cat you could ever meet!"/>
            <Card page="niven" src={Nivenpfp} alt="Picture of dog" name="Niven" description="If you want a super goofy dog that will light up your day, meet Niven!" />
        </main>
    </div>
    );
}