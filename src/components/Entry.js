export default function Entry(props) {
  return (
    <div>
      <div className="entry__container">
        <img className="entry__photo" src={props.entry.imageUrl}></img>
        <div className="entry__info">
          <i className="entry__location-icon fa-solid fa-location-dot"></i>
          <p className="entry__country">{props.entry.location}</p>
          <a className="entry__map-link" href={props.entry.googleMapsUrl}>
            View on Google Maps
          </a>
          <h2 className="entry__attraction-name">{props.entry.title}</h2>
          <p className="entry__dates">
            <span className="entry__start-date">{props.entry.startDate}</span> -
            <span className="entry__end-date">{props.entry.endDate}</span>
          </p>
          <p className="entry__attraction-description">
            {props.entry.description}
          </p>
        </div>
      </div>
      <div className="entry__separator"></div>
    </div>
  );
}
