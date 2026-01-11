import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import WineCard from "./WineCard";
import Context from "./Context";
import { useContext } from "react";
import SearchBar from "./SearchBar";
import loadingGif from "../IMG/loading.gif";

const Home = () => {
  const value = useContext(Context);

  const handleCard = (event) => {
    value.setWhatOthersBuy([]);
    // What others are buying, get random 10 wines
    for (let i = 0; i < 10; i++) {
      let randomIndex = Math.floor(Math.random() * value.wineList.length);
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
    let list = [...value.wineList];

    // Filter
    if (filterFunctions[value.wineType]) {
      list = list.filter(filterFunctions[value.wineType]);
    }

    // Sort
    if (sortFunctions[value.SortBy]) {
      list.sort(sortFunctions[value.SortBy]);
      if (value.order === "desc") {
        list.reverse();
      }
    }

    return list;
  }, [value.wineList, value.wineType, value.SortBy, value.order]);

  return (
    <div>
      <SearchBar />

      {processedWineList.length > 0 ? (
        <div className="wine-container">
          <ul>
            {processedWineList.map((item) => (
              <Link to={`/wines/${item._id}`} className="Border" key={item._id}>
                <button onClick={handleCard} className="single">
                  <li>
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
            ))}
          </ul>
        </div>
      ) : (
        <div className="loading-container">
          <img src={loadingGif} alt="loading-gif" className="loading-gif" />
          <p className="loading-home">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Home;
