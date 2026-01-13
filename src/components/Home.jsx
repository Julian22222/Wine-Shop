import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import WineCard from "./WineCard";
import Context from "./Context";
import { useContext } from "react";
import SearchBar from "./SearchBar";
import loadingGif from "../IMG/loading.gif";

const Home = () => {
  const { setWhatOthersBuy, wineList, setWineList, wineType, sortBy, order } =
    useContext(Context);

  const [isLoading, setIsLoading] = useState(true);

  const handleCard = (event) => {
    setWhatOthersBuy([]);
    // What others are buying, get random 10 wines
    for (let i = 0; i < 7; i++) {
      let randomIndex = Math.floor(Math.random() * wineList.length);
      setWhatOthersBuy((prevArray) => [...prevArray, wineList[randomIndex]]);
    }
  };

  useEffect(() => {
    fetch("https://wine-shop-backend.onrender.com/wines")
      .then((allWines) => allWines.json())
      .then((data) => {
        setWineList(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Filtering logic
  const filterFunctions = {
    Red: (wine) => wine.wine === "Red",
    White: (wine) => wine.wine === "White",
    Sparkling: (wine) => wine.wine === "Sparkling",
    Rose: (wine) => wine.wine === "Rose",
    Dessert: (wine) => wine.wine === "Dessert",
  };

  // Sorting logic
  const sortFunctions = {
    year: (a, b) => Number(a.year) - Number(b.year),
    reviews: (a, b) => a.reviews.length - b.reviews.length,
    rating: (a, b) => a.rating - b.rating,
    votes: (a, b) => a.votes - b.votes,
  };

  const processedWineList = useMemo(() => {
    let list = [...wineList];

    // Filter
    if (filterFunctions[wineType]) {
      list = list.filter(filterFunctions[wineType]);
    }

    // Sort
    if (sortFunctions[sortBy]) {
      list.sort(sortFunctions[sortBy]);
      if (order === "desc") {
        list.reverse();
      }
    }

    return list;
  }, [wineList, wineType, sortBy, order]);

  return (
    <>
      <SearchBar />

      {isLoading ? (
        <div className="loading-container">
          <img src={loadingGif} alt="loading-gif" className="loading-gif" />
          <p className="loading-home">Loading...</p>
        </div>
      ) : (
        <div className="wine-container">
          <ul>
            {processedWineList.map((item) => (
              <li key={item._id} className="Border">
                <Link to={`/wines/${item._id}`}>
                  <button onClick={handleCard} className="single">
                    <WineCard
                      name={item.name}
                      wine={item.wine}
                      rating={item.rating}
                      votes={item.votes}
                      location={item.location}
                      image={item.image}
                      id={item._id}
                    />
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Home;
