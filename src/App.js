import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { React, useState } from "react";

import "./App.css";
import "./Styles/HomePage.css";
import "./Styles/WineCard.css";
import "./Styles/NavBar.css";
import "./Styles/SingleCard.css";
import "./Styles/ButtonToBasket.css";
import "./Styles/Footer.css";
import "./Styles/Basket.css";
import "./Styles/RemoveItem.css";
import "./Styles/Request.css";
import "./Styles/CheckoutPage.css";

import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import Basket from "./components/Basket";
import Requests from "./components/Requests";
import SingleCard from "./components/SingleCard";
import Footer from "./components/Footer";
import Context from "./components/Context";
import Checkout from "./components/CheckoutPage";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  //all wine list
  const [wineList, setWineList] = useState([]);
  const [wineType, setWineType] = useState("");
  const [SortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [basketList, setBasketList] = useState([]);

  //what others are buying, get random 10 wines - in sigleCard
  const [whatOthersBuy, setWhatOthersBuy] = useState([]);

  // if the order basket already contains the same item -> show msg, you already have this item in the basket
  const [msgAlreadyInTheBasket, setMsgAlreadyInTheBasket] = useState(false);

  const value = {
    wineList,
    setWineList,
    wineType,
    setWineType,
    SortBy,
    setSortBy,
    order,
    setOrder,
    basketList,
    setBasketList,
    whatOthersBuy,
    setWhatOthersBuy,
    msgAlreadyInTheBasket,
    setMsgAlreadyInTheBasket,
  };

  return (
    <BrowserRouter>
      <Context.Provider value={value}>
        <div className="App-header">
          <Homepage />
          <NavBar />
          <Routes>
            <Route path="/Wine-Shop" element={<Home />} />
            <Route path="/wines/:_id" element={<SingleCard />} />
            <Route
              path="/basket"
              element={<Basket basketList={basketList} />}
            />
            <Route path="/requests" element={<Requests />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
          <Footer />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
