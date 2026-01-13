import "../Styles/Basket.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";
import RemoveItem from "./RemoveItem";

const Basket = () => {
  const [updateQty, setUpdateQty] = useState(0);

  const value = useContext(Context);

  useEffect(() => {}, [updateQty]);

  //////////////////////////////////////////////////////////////////////////////

  return (
    <div className="Basket">
      <h1>My Basket</h1>
      <p className="TotalBasket">
        Amount of different items in my basket: {value.basketList.length}
      </p>
      <ul>
        {value.basketList.map((item) => {
          return (
            <li key={item.id} className="basketItems">
              <Link to={`/wines/${item._id}`} className="Border">
                <button className="single-btn-basket">
                  <div className="card">
                    <img
                      src={item.image}
                      alt="different wines"
                      width="100"
                      height="220"
                      className="card-img"
                    />
                  </div>
                </button>
              </Link>

              <RemoveItem item={item} />
              <p className="itemPrice-perBottle">{item.price} per bottle</p>
              <p className="Quantity">Quantity:</p>
              <br />

              <p className="QuantityNum">{Number(item.qty)}</p>
              <div className="QuantityBtn-container">
                <button
                  className="QuantityBtn"
                  // 4 functions within onCLick block
                  onClick={() => {
                    item.qty--;
                    setUpdateQty((prevState) => {
                      return prevState - 1;
                    });

                    //set total Bill
                    value.setTotalBill((prevData) => {
                      return (
                        Number(prevData) - Number(item.price.slice(1))
                      ).toFixed(2);
                    });
                  }}
                  disabled={item.qty === 0}
                >
                  -
                </button>

                {/* ///////////////////////////////////////////////////////////////////// */}

                <button
                  className="QuantityBtn"
                  // 4 functions within onCLick block
                  onClick={() => {
                    item.qty++;
                    setUpdateQty((prevState) => {
                      return prevState + 1;
                    });

                    //set total Bill
                    value.setTotalBill((prevData) => {
                      return (
                        Number(prevData) + Number(item.price.slice(1))
                      ).toFixed(2);
                    });

                    console.log(updateQty);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                <p className="totalPrice-forThisTypeOfWine">
                  Wine cost: £
                  {(Number(item.qty) * Number(item.price.slice(1))).toFixed(2)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      {value.basketList.length > 0 ? (
        <div className="basket-bottom-container">
          <p className="totalBill">Total:£{value.totalBill}</p>
          <Link to="/checkout">
            <button className="OrderBtn">Checkout</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Basket;
