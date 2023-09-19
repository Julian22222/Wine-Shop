import Context from "./Context";
import { useContext } from "react";

const SearchBar = () => {
  const value = useContext(Context);

  const handleType = (event) => {
    value.setWineType(event.target.value);
    console.log(event.target.value);
    console.log(value.wineType);
  };

  const handleSortBy = (event) => {
    console.log(event.target.value);
    value.setSortBy(event.target.value);
    console.log(value.SortBy);
  };

  const handleOrder = (event) => {
    console.log(event.target.value);
    value.setOrder(event.target.value);
    console.log(value.order);
  };

  return (
    <div className="SearchBar">
      <label style={{ fontSize: 20, fontWeight: "bolder" }}>Wine Type: </label>
      <select onChange={handleType} name="SortBy" className="SortBy">
        <option value=""></option>
        <option value="Red">Red</option>
        <option value="White">White</option>
        <option value="Sparkling">Sparkling</option>
        <option value="Rose">Rose</option>
        <option value="Dessert">Dessert</option>
      </select>

      <span
        className="sort-block"
        style={{ fontSize: 20, fontWeight: "bolder" }}
      >
        {" "}
        Sort By:{" "}
      </span>
      <select onChange={handleSortBy}>
        <option></option>
        <option value="reviews">Reviews</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
        <option value="votes">Votes</option>
      </select>

      <span
        className="order-block"
        style={{ fontSize: 20, fontWeight: "bolder" }}
      >
        {" "}
        Order:{" "}
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
