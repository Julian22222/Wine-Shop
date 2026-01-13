import "../Styles/WineCard.css";

const WineCard = ({ name, wine, rating, image }) => {
  return (
    <div className="card">
      <img
        src={image}
        alt={`${name} wine`}
        width="195"
        height="300"
        className="card-img"
        loading="lazy"
      />
      <div className="card-body">
        <h2 className="card-title">{name}.</h2>
        <p className="card-sub-title">{wine} wine.</p>
        <p className="card-info">{rating} /5</p>
      </div>
    </div>
  );
};

export default WineCard;
