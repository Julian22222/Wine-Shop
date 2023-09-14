const RequestCard = (props) => {
  return (
    <div className="RequestCard">
      <span style={{ color: "#ccc" }}>User : </span>
      <span>{props.user_name}</span>
      <br />
      <span style={{ color: "#ccc" }}>City / Region :</span>
      <span> {props.regionDetails}</span>
      <br />
      <span style={{ color: "#ccc" }}>Client comment:</span>
      <span> {props.comments}</span>
    </div>
  );
};

export default RequestCard;
