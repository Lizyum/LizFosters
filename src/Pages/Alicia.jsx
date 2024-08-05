import Header from '../Components/Header';

export default function Alicia(){
    return (
        <div className="container">
            <nav>
                <ul>
                    <li><a href="index">Home</a></li>
                    <li><a href="fosters">Current Fosters</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
                <button type="button" id="dark-mode-toggle" onClick={() => changetoDark()}>Dark Mode</button>
                <button type="button" id="font-changer" onClick={() => changeFont()}>Change Font</button>
            </nav>
            <main>
                <a href="fosters" className="back-button">Back</a>
                <h1>Meet Alicia</h1>
                <div className="apply-section">
                    <a href="https://www.onetail.org/available-pets/" className="apply-button">Apply</a>
                </div>
                <p>Alicia is a playful and loving cat looking for her forever home. She loves to cuddle and is very friendly with other pets.</p>
                <div className="gallery">
                    <img src="img/alicia-sleeping.jpg" alt="Alicia sleeping on a desk" style={{ width: '100px', height: '150px' }} />
                    <img src="img/bubble-wrap-alicia.jpg" alt="Alicia playing with packing bubbles" style={{ width: '100px', height: '150px' }} />
                </div>
            </main>
        </div>
    );
}