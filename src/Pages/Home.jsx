import Header from '../Components/Header';

export default function Home(){
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
            <h1>Hey!</h1>
            <p>My name is Lizbeth. I foster animals and post them here so their forever homes can find them!</p>
            <img src="img/me.jpg" alt="Welcome Image" style={{ width: '700px', height: '500px' }} />
        </main>
    </div>
    );
}