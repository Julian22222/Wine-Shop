import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";

import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Basket from "./components/Basket";
import Requests from "./components/Requests";
import SingleCard from "./components/SingleCard";
import Footer from "./components/Footer";
import Context from "./components/Context";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  //all wine list
  const [wineList, setWineList] = useState([]);
  const [wineType, setWineType] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [order, setOrder] = useState("");
  const [basketList, setBasketList] = useState([]);

  //what others are buying, get random 10 wines - in sigleCard
  const [whatOthersBuy, setWhatOthersBuy] = useState([]);

  // if the order basket already contains the same item -> show msg, you already have this item in the basket
  const [msgAlreadyInTheBasket, setMsgAlreadyInTheBasket] = useState(false);

  //totalBill for all wines ,from basket page
  const [totalBill, setTotalBill] = useState(0);

  const value = {
    wineList,
    setWineList,
    wineType,
    setWineType,
    sortBy,
    setSortBy,
    order,
    setOrder,
    basketList,
    setBasketList,
    whatOthersBuy,
    setWhatOthersBuy,
    msgAlreadyInTheBasket,
    setMsgAlreadyInTheBasket,
    totalBill,
    setTotalBill,
  };

  return (
    <BrowserRouter>
      <Context.Provider value={value}>
        <div className="App-header">
          <div className="background" />
          <Banner />
          <NavBar />
          <main className="main-content">
            <Routes>
              <Route path="/Wine-Shop" element={<Home />} />
              <Route path="/wines/:_id" element={<SingleCard />} />
              <Route path="/basket" element={<Basket />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
