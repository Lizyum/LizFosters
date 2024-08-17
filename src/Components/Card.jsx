function Card(props) {
    const handleClick = () => {
        window.location.href = props.page;
    };

    return(
        <div className = "card" onClick={handleClick}> 
            <img className="card-image" src={props.src} alt={props.alt}></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.description}</p>
        
        </div>


    );
}

export default Card