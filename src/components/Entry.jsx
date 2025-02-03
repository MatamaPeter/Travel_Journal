/* eslint-disable react/prop-types */
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.data.img.src} alt={props.data.img.alt}/>
            </div>
            <div>
                <div className="main-content">
                    <img src="marker.png" alt="map-icon" />
                    <span>{props.data.country}</span>
                        <a href={props.data.googleMapsLink}>View on Google Maps</a>
                </div>
                <h2>{props.data.title}</h2>
                <p>{props.data.dates}</p>
                <p className="ellipsis">
                    {props.data.text}
                </p>
            </div>
            
        </article>

    );
}


