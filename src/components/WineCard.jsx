const WineCard = (props) => {
  return (
    <div className="card">
      {/* <div className="Card"> */}
      {/* <p>Name: {props.name}</p>
        <p>Wine: {props.wine}</p>
        <p>Rating: {props.rating}</p> */}
      {/* <p>Votes: {props.votes}</p> */}
      {/* <p>Location: {props.location}</p> */}
      {/* </div> */}
      <img
        src={props.image}
        alt="different wines"
        width="200"
        height="300"
        className="card-img"
      />
      <div className="card-body">
        <h1 className="card-title">{props.name}.</h1>
        <p className="card-sub-title">{props.wine} wine.</p>
        <p className="card-info">{props.rating}</p>
      </div>
    </div>
  );
};

export default WineCard;
