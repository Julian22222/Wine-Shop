import Context from "./Context";
import { useContext } from "react";

const SearchBar = () => {
  const value = useContext(Context);

  const handleType = (event) => {
    value.setWineType(event.target.value);
  };

  const handleSortBy = (event) => {
    value.setSortBy(event.target.value);
  };

  const handleOrder = (event) => {
    value.setOrder(event.target.value);
  };

  return (
    <div className="SearchBar">
      <label style={{ fontSize: 20, fontWeight: "bolder" }}>Wine Type: </label>
      <select onChange={handleType} name="wineType" className="wine-type">
        <option value=""></option>
        <option value="Red">Red</option>
        <option value="White">White</option>
        <option value="Sparkling">Sparkling</option>
        <option value="Rose">Rose</option>
        <option value="Dessert">Dessert</option>
      </select>

      <span
        className="sort-block"
        style={{
          fontSize: 20,
          fontWeight: "bolder",
          marginLeft: 15,
          marginRight: 5,
        }}
      >
        Sort By:
      </span>
      <select onChange={handleSortBy}>
        <option value=""></option>
        <option value="reviews">Reviews</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
        <option value="votes">Votes</option>
      </select>

      <span
        className="order-block"
        style={{
          fontSize: 20,
          fontWeight: "bolder",
          marginLeft: 15,
          marginRight: 5,
        }}
      >
        Order:
      </span>
      <select onChange={handleOrder}>
        <option></option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SearchBar;
