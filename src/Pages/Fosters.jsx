import Header from '../Components/Header';

export default function Fosters_Page(){
    return (
        <div className="container">
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="fosters.html">Current Fosters</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <button type="button" id="dark-mode-toggle" onClick={() => changetoDark()}>Dark Mode</button>
            <button type="button" id="font-changer" onClick={() => changeFont()}>Change Font</button>
        </nav>
        <main>
            <h1>Current Fosters!</h1>
            <div className="foster">
                <img src="img/clingy-alicia.jpg" alt="Picture of Cat" style={{ width: '100px', height: '100px' }} />
                <div className="details">
                    <h2><a href="alicia.html">Alicia</a></h2>
                    <p>A lovable, gentle cat -- Alicia is the sweetest cat you could ever meet!</p>
                </div>
            </div> 
            <div className="foster">
                <img src="img/niven-posing.jpg" alt="Picture of Dog" style={{ width: '100px', height: '100px' }} />
                <div className="details">
                    <h2><a href="niven.html">Niven</a></h2>
                    <p>If you want a super goofy dog that will light up your day, come meet Niven!</p>
                </div>
            </div>
        </main>
    </div>
    );
}