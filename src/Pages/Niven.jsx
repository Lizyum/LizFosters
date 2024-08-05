import Header from '../Components/Header';

export default function Niven(){
    return (
        <div className="container">
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="fosters.html">Current Fosters</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <button type="button" id="dark-mode-toggle" onClick={changetoDark}>Dark Mode</button>
                <button type="button" id="font-changer" onClick={changeFont}>Change Font</button>
            </nav>
            <main>
                <a href="fosters.html" className="back-button">Back</a>
                <h1>Meet Niven</h1>
                <div className="apply-section">
                    <a href="https://www.onetail.org/available-pets/" className="apply-button">Apply</a>
                </div>
                <p>Niven is a super goofy, loving dog. He loves to play fetch and tug of war.</p>
                <div className="gallery">
                    <img src="img/niven-hershey.jpg" alt="Niven playing tug of war with his Hershey toy" style={{ width: '100px', height: '150px' }} />
                    <img src="img/niven-sleeping.jpg" alt="Niven taking a nap in the car" style={{ width: '100px', height: '150px' }} />
                </div>
            </main>
        </div>
    );
}