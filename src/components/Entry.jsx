/* eslint-disable react/prop-types */
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.img.src} alt={props.img.alt}/>
            </div>
            <div>
                <div className="main-content">
                    <img src="marker.png" alt="map-icon" />
                    <span>{props.country}</span>
                        <a href={props.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p>{props.dates}</p>
                <p className="ellipsis">
                    {props.text}
                </p>
            </div>
            
        </article>

    );
}


