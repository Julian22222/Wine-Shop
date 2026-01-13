import RequestCard from "./RequestCard";

const RequestList = ({ allComments }) => {
  return (
    <>
      <h3 className="requestListArea">
        List of all requests/ suggestions/ comments:
      </h3>
      {allComments.length > 0 ? (
        <ul>
          {allComments.map((el) => {
            return (
              <li key={(el.user + el.region + el.comments).toString()}>
                <RequestCard
                  user_name={el.user}
                  regionDetails={el.region}
                  comments={el.comments}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No requests yet</p>
      )}
    </>
  );
};

export default RequestList;
