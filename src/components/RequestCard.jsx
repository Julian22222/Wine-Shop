const RequestCard = (props) => {
  return (
    <div className="RequestCard">
      <span style={{ color: "white", fontWeight: "bolder" }}>User : </span>
      <span>{props.user_name}</span>
      <br />
      <span style={{ color: "white", fontWeight: "bolder" }}>
        City / Region :
      </span>
      <span> {props.regionDetails}</span>
      <br />
      <span style={{ color: "white", fontWeight: "bolder" }}>
        Client comment:
      </span>
      <span> {props.comments}</span>
    </div>
  );
};

export default RequestCard;
