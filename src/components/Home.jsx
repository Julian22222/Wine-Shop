import { useEffect } from "react";
import { Link } from "react-router-dom";
import WineCard from "./WineCard";
import Context from "./Context";
import { useContext } from "react";
// import { useParams } from "react-router-dom";
// import ButtonForEachCard from "./ButtonForEachCard";
import SearchBar from "./SearchBar";
import loadingGif from "../IMG/loading.gif";

const Home = () => {
  const value = useContext(Context);

  // const [cardId, setCardId] = useState([]);

  // const { id } = useParams();

  const handleCard = (event) => {
    // alert("You clicked me");

    value.setWhatOthersBuy([]);

    //what others are buying, get random 10 wines
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * value.wineList.length);
      // console.log("Random Index", randomIndex);
      // console.log("All wine list", value.wineList);
      // setWhatOthersBuy(whatOthersBuy, value.wineList[randomIndex]);

      value.setWhatOthersBuy((prevArray) => [
        ...prevArray,
        value.wineList[randomIndex],
      ]);
    }
  };

  useEffect(() => {
    fetch("https://wine-shop-backend.onrender.com/wines")
      .then((allWines) => allWines.json())
      .then((data) => {
        value.setWineList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value.wineType, value.SortBy, value.order]);

  ////////////////////////////////////////////////////// value.wineType, value.SortBy, value.order

  if (value.wineType === "Red") {
    value.wineList = value.wineList.filter((element) => {
      return element.wine === "Red";
    });
  }

  if (value.wineType === "White") {
    value.wineList = value.wineList.filter((element) => {
      return element.wine === "White";
    });
  }

  if (value.wineType === "Sparkling") {
    value.wineList = value.wineList.filter((element) => {
      return element.wine === "Sparkling";
    });
  }

  if (value.wineType === "Rose") {
    value.wineList = value.wineList.filter((element) => {
      return element.wine === "Rose";
    });
  }

  if (value.wineType === "Dessert") {
    value.wineList = value.wineList.filter((element) => {
      return element.wine === "Dessert";
    });
  }

  ///////////////////////////////////////////////////////////////SortBy

  if (value.SortBy === "year" && value.order === "asc") {
    value.wineList.sort((a, b) => {
      return Number(a.year) > Number(b.year) ? -1 : 1;
    });
  }

  if (value.SortBy === "year" && value.order === "desc") {
    value.wineList.sort((a, b) => {
      return Number(a.year) > Number(b.year) ? 1 : -1;
    });
  }

  if (value.SortBy === "reviews" && value.order === "asc") {
    value.wineList.sort((a, b) => {
      return a.reviews.length > b.reviews.length ? -1 : 1;
    });
  }

  if (value.SortBy === "reviews" && value.order === "desc") {
    value.wineList.sort((a, b) => {
      return a.reviews.length > b.reviews.length ? 1 : -1;
    });
  }

  if (value.SortBy === "rating" && value.order === "asc") {
    value.wineList.sort((a, b) => {
      return a.rating > b.rating ? -1 : 1;
    });
  }

  if (value.SortBy === "rating" && value.order === "desc") {
    value.wineList.sort((a, b) => {
      return a.rating > b.rating ? 1 : -1;
    });
  }
  ///////////////////////////////////////////////////////////////////////////

  if (value.SortBy === "votes" && value.order === "asc") {
    value.wineList.sort((a, b) => {
      return a.votes > b.votes ? -1 : 1;
    });
  }

  if (value.SortBy === "votes" && value.order === "desc") {
    value.wineList.sort((a, b) => {
      return a.votes > b.votes ? 1 : -1;
    });
  }

  return (
    <div>
      <SearchBar />

      {value.wineList.length > 0 ? (
        <div className="wine-container">
          <ul>
            {value.wineList?.map((item) => {
              return (
                <Link to={`/wines/${item._id}`} className="Border">
                  <button onClick={handleCard} className="single">
                    <li key={(item.name, item._id)}>
                      <WineCard
                        name={item.name}
                        wine={item.wine}
                        rating={item.rating}
                        votes={item.votes}
                        location={item.location}
                        image={item.image}
                        id={item._id}
                      />
                    </li>
                  </button>
                </Link>
              );
            })}
          </ul>
        </div>
      ) : (
        <div style={{ marginTop: "-300px" }}>
          <img
            src={loadingGif}
            alt="loading-gif"
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
          <p className="loading-home" style={{ marginTop: "-100px" }}>
            Loading...
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
