import "../Styles/SingleCard.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";
import { useContext } from "react";
import ButtonToBasket from "./ButtonToBasket";

import ups from "../IMG/ups.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faCommentSlash } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const SingleCard = () => {
  const value = useContext(Context);
  const [showAddedToTheBasketMSG, setShowAddedToTheBasketMSG] = useState(false);

  //data for each card
  const [eachCard, setEachCard] = useState([]);

  // delivery info btn
  const [showDelivery, setShowDelivery] = useState(false);

  const [voteIncrementCounter, setVoteIncrementCounter] = useState(0);
  const [voteDecrementCounter, setVoteDecrementCounter] = useState(0);
  const [err, setErr] = useState(null);

  const [showComments, setShowComments] = useState(false);

  const [yourComment, setYourComment] = useState(false);

  const [reviewPost, setReviewPost] = useState({
    name: "",
    text: "",
  });

  // show msg when comment has been posted
  const [commentShowMsg, setCommentShowMsg] = useState(false);

  const { _id } = useParams();
  // console.log( _id);

  const handleSingleCard = () => {
    value.setWhatOthersBuy([]);

    // what others are buying, get random 7 wines
    for (let i = 0; i < 7; i++) {
      let randomIndex = Math.floor(Math.random() * value.wineList.length);

      value.setWhatOthersBuy((prevArray) => [
        ...prevArray,
        value.wineList[randomIndex],
      ]);
    }
  };

  const handleLike = () => {
    setVoteIncrementCounter((currentLikes) => currentLikes + 1);
    setErr(null);

    const updatedVotes = eachCard?.votes + 1;

    fetch(`https://wine-shop-backend.onrender.com/wines/${_id}`, {
      method: "PATCH",
      body: JSON.stringify({
        votes: updatedVotes,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    setReviewPost((prevPost) => {
      let newDataPost = { ...prevPost };

      newDataPost[`${e.target.id}`] = e.target.value;

      console.log("reviewPost", reviewPost);
      console.log(reviewPost.name);

      return newDataPost;
    });
  };

  /////////////////////////////////////////////////////handlePost

  const handlePost = (e) => {
    e.preventDefault();

    // set date and time for post
    const nowTime = new Date();

    eachCard.reviews.unshift({
      name: reviewPost.name,
      text: reviewPost.text,
      date_time: nowTime.toLocaleString(),
    });

    console.log(eachCard.reviews);

    // const updatedReviews = eachCard?reviews + new review

    fetch(`https://wine-shop-backend.onrender.com/wines/${_id}`, {
      method: "PATCH",
      // method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        reviews: eachCard.reviews,
      }),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });

    setReviewPost({ name: "", text: "" });
    setYourComment(false);
    setCommentShowMsg(true);
  };

  const handleDecrementVote = () => {
    setVoteDecrementCounter((currentLikes) => currentLikes - 1);
    setErr(null);

    const updatedVotes = eachCard?.votes - 1;

    fetch(`https://wine-shop-backend.onrender.com/wines/${_id}`, {
      method: "PATCH",
      body: JSON.stringify({
        votes: updatedVotes,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => {
        setErr("Something went wrong");
      });
  };

  useEffect(() => {
    fetch(`https://wine-shop-backend.onrender.com/wines/${_id}`)
      .then((topicData) => topicData.json())
      .then((data) => {
        setEachCard(data);
      });
  }, [_id, eachCard.reviews]);

  return (
    <div>
      <div className="SingleCard">
        {eachCard?.name ? (
          <div key={(eachCard.name, eachCard.location)}>
            <div className="main-single-card-container">
              {/* //////////////////////////////////////left flexbox container */}
              <div className="left-flexbox-container">
                <div className="img-likes-comments-container">
                  <img
                    src={eachCard?.image}
                    alt="different wines"
                    width="300"
                    height="350"
                    className="pcs-singleCard"
                    style={{ marginLeft: "5%" }}
                  />
                  <div className="like-dislike-container">
                    <button
                      onClick={handleLike}
                      //  disabled={voteIncrementCounter !== 0 && voteDecrementCounter ===0}
                      disabled={voteIncrementCounter !== 0}
                    >
                      {/* Like */}
                      <FontAwesomeIcon icon={faThumbsUp} className="thumbsUp" />
                    </button>
                    <button
                      onClick={handleDecrementVote}
                      disabled={voteDecrementCounter !== 0}
                    >
                      {/* Dislike */}
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        className="thumbsDown"
                      />
                    </button>
                  </div>
                </div>

                {showComments ? (
                  <button
                    onClick={() => {
                      setShowComments(false);
                    }}
                    className="button-singleCard"
                  >
                    {/* Hide Comments */}
                    <FontAwesomeIcon
                      icon={faCommentSlash}
                      className="thumbsUp"
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setShowComments(true);
                    }}
                    className="button-singleCard"
                  >
                    {/* Show Comments */}
                    <FontAwesomeIcon icon={faComment} className="thumbsUp" />
                  </button>
                )}

                {showComments && eachCard.reviews.length === 0 ? (
                  <div>
                    <p className="noCom">No Comments here. </p>
                  </div>
                ) : null}

                {showComments && yourComment ? (
                  <div style={{ marginTop: "10px" }}>
                    <label
                      className="nameReq-singleCard"
                      style={{ fontWeight: "bold" }}
                    >
                      Name:
                    </label>
                    <form onSubmit={handlePost}>
                      <input
                        className="input-singleCard"
                        onChange={handleChange}
                        type="text"
                        value={reviewPost.name}
                        id="name"
                        placeholder="insert your name"
                        required
                      />
                      <div>
                        <label style={{ fontWeight: "bold" }}>Comment:</label>
                      </div>
                      <textarea
                        onChange={handleChange}
                        value={reviewPost.text}
                        id="text"
                        className="textarea-singleCard"
                        placeholder="Insert your comments"
                        type="text"
                        required
                      />
                      <button type="submit" className="post-comment-btn">
                        Post
                      </button>

                      <button
                        onClick={() => {
                          setYourComment(false);
                        }}
                        className="close-comment-btn"
                      >
                        Close
                      </button>
                    </form>
                    <div>
                      {/* ////////////////////////////////////////////////////////////////////////// */}
                      {showComments && commentShowMsg ? (
                        <p style={{ color: "#ccc" }}>
                          Your commnet has been posted
                        </p>
                      ) : null}

                      {/* ///////////////////////////////////////////////////////////////////////////////// */}

                      <ul>
                        {eachCard.reviews.map((review) => {
                          return (
                            <li key={review.name}>
                              <div className="eachReview-conatiner">
                                <p>{review.name}</p>
                                <p className="reviewLine">{review.text}</p>
                                <p>{review.date_time}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ) : null}

                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {showComments && !yourComment ? (
                  <div>
                    <button
                      onClick={() => {
                        setYourComment(true);
                      }}
                      className="add-comment"
                    >
                      <FontAwesomeIcon icon={faPlus} /> Add comment
                    </button>
                    <ul>
                      {eachCard.reviews.map((review) => {
                        return (
                          <li key={review.name}>
                            <div className="eachReview-conatiner">
                              <p>{review.name}</p>
                              <p>{review.text}</p>
                              <p>{review.date_time}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ) : null}
              </div>

              {/* ///////////////////////////////////////right flexbox container */}
              <div className="right-flexbox-container">
                <h1> {eachCard?.name}</h1>
                <strong>Price: </strong>
                <span> {eachCard?.price}</span>
                <br />
                <strong>Availability: </strong>{" "}
                <span>
                  {" "}
                  {eachCard.available > 0 ? "Available" : "Out of stock"}
                </span>
                <br />
                <strong>Wine: </strong> <span> {eachCard?.wine}</span>
                <br />
                <strong>Winery: </strong> <span> {eachCard?.winery}</span>
                <br />
                <strong>Location: </strong> <span> {eachCard?.location}</span>
                <br />
                <strong>Year: </strong> <span> {eachCard?.year} </span>
                <br />
                <strong>Grade: </strong> <span> {eachCard?.grade}</span>
                <br />
                <strong>Votes: </strong>{" "}
                <span>
                  {" "}
                  {eachCard?.votes +
                    voteIncrementCounter +
                    voteDecrementCounter}
                </span>
                <br />
                <strong>Rating: </strong> <span> {eachCard?.rating}</span>
                <br />
                <br />
                <strong>Description:</strong>{" "}
                <span>{eachCard?.description}</span>
                <ButtonToBasket
                  eachCard={eachCard}
                  setShowAddedToTheBasketMSG={setShowAddedToTheBasketMSG}
                />
                <br />
                <div className="delivery-container">
                  <strong>Delivery Information: </strong>{" "}
                  {showDelivery ? (
                    <span>
                      <button
                        className="delivery-singleCard"
                        onClick={() => setShowDelivery(false)}
                      >
                        {/* close */}
                        <FontAwesomeIcon
                          icon={faArrowUp}
                          className="arrowDown"
                        />
                      </button>
                    </span>
                  ) : (
                    <span>
                      <button
                        className="delivery-singleCard"
                        onClick={() => setShowDelivery(true)}
                      >
                        {/* open */}
                        <FontAwesomeIcon
                          icon={faArrowDown}
                          className="arrowDown"
                        />
                      </button>
                    </span>
                  )}
                  {showDelivery ? (
                    <div className="delivery-info">
                      <img
                        src={ups}
                        className="ups"
                        alt="ups"
                        width="50"
                        height="50"
                      />

                      <p>• 3-5 Working Day Service - £5.95</p>
                      <p>• 1-2 Working Day Service - £7.95</p>
                      <p>• Next Working Day Service (Order by 2pm) - £10.95</p>
                      <p>• Orders are processed Monday - Friday</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Page is loading...</p>
        )}
      </div>

      <h2 className="singleCard-others-buying">
        Take a look at what others are buying
      </h2>

      <div className="othersBuy-container">
        <ul className="ob-container">
          {value.whatOthersBuy?.map((item) => {
            return (
              <Link to={`/wines/${item._id}`} className="Border">
                <button onClick={handleSingleCard} className="single">
                  <li key={item._id}>
                    <div className="card">
                      <img
                        src={item.image}
                        alt="different wines"
                        width="100"
                        height="200"
                        className="card-img"
                      />
                      <div className="card-body">
                        <h1 className="card-title-singleCard">{item.name}.</h1>
                        <p className="card-sub-title-singleCard">
                          {item.wine} wine.
                        </p>
                        <p className="card-info-singleCard">{item.rating}</p>
                      </div>
                    </div>
                  </li>
                </button>
              </Link>
            );
          })}
        </ul>
      </div>

      {/* if orderBasket dosn't contain the same item you adding, it will show msg ->your order has been sent */}
      {showAddedToTheBasketMSG && !value.msgAlreadyInTheBasket ? (
        <p className="SingleCardMsgBasket">
          This Wine has been added to the basket.
        </p>
      ) : null}

      {/* if orderBasket contains the same item you adding, it will show msg ->You already have this item in the basket*/}
      {value.msgAlreadyInTheBasket ? (
        <p className="SingleCardMsgBasket">
          You already have this item in the basket.
        </p>
      ) : null}

      {err ? <p>{err}</p> : null}
    </div>
  );
};

export default SingleCard;
