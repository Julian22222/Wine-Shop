import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "./Context";
import { useContext } from "react";
import RemoveItem from "./RemoveItem";

const Basket = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const [updateQty, setUpdateQty] = useState(0);

  const value = useContext(Context);

  // const [msgSendOrder, setMsgSendOrder] = useState(false);

  useEffect(() => {}, [count, total, updateQty]);

  const hadleOrder = () => {
    value.setBasketList([]);
  };
  //////////////////////////////////////////////////////////////////////////////
  // const handleAddQty = (num, itemQty, itemPrice) => {
  //   setCount(count + num);
  //   setTotal(Number(total) + Number(itemPrice.slice(1)));
  // };

  const handleremoveQty = (num, itemQty, itemPrice) => {
    setCount(count + num);
    setTotal(total - Number(itemPrice.slice(1)));
  };

  return (
    <div className="Basket">
      <h1>My Basket</h1>
      <p className="TotalBasket">
        Amount of different items in my basket: {value.basketList.length}
      </p>
      <ul>
        {value.basketList.map((item) => {
          return (
            <li key={(item.id, item.image)} className="basketItems">
              <Link to={`/wines/${item._id}`} className="Border">
                <button className="single-btn-basket">
                  <div className="card">
                    <img
                      src={item.image}
                      alt="different wines"
                      width="100"
                      height="221"
                      className="card-img"
                    />
                  </div>
                </button>
              </Link>

              <RemoveItem item={item} />
              <p>{item.price} per bottle</p>
              <p className="Quantity">Quantity:</p>
              <br />
              {/* <p className="QuantityNum">{Number(item.qty) + Number(count)}</p> */}
              <p className="QuantityNum">{Number(item.qty)}</p>
              <div className="QuantityBtn-container">
                <button
                  className="QuantityBtn"
                  // 2 functions within onCLick block
                  onClick={(event) => {
                    item.qty--;
                    setUpdateQty((prevState) => {
                      prevState--;
                    });
                    console.log(updateQty);
                  }}
                >
                  -
                </button>

                {/* <button
                  disabled={Number(item.qty) + Number(count) === 0}
                  className="QuantityBtn"
                  onClick={() => handleremoveQty(-1, item.qty, item.price)}
                >
                  -
                </button> */}

                {/* ///////////////////////////////////////////////////////////////////// */}

                {/* <button
                  className="QuantityBtn"
                  onClick={() => handleAddQty(1, item.qty, item.price)}
                >
                  +
                </button> */}

                <button
                  className="QuantityBtn"
                  // 2 functions within onCLick block
                  onClick={(event) => {
                    item.qty++;
                    setUpdateQty((prevState) => {
                      prevState++;
                    });
                    console.log(updateQty);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                <p className="totalPrice-forThisTypeOfWine">
                  Total:{" "}
                  {(
                    Number(item.qty) * Number(item.price.slice(1)) +
                    Number(total)
                  ).toFixed(2)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      {value.basketList.length > 0 ? (
        <Link to="/checkout">
          <button className="OrderBtn" onClick={hadleOrder}>
            Checkout
          </button>
        </Link>
      ) : null}

      {/* <p> button Order appears when basketList.length more than 0 </p>
      <p>when you click on Order button - basketList - become empty, show message your order has been sent</p> */}
    </div>
  );
};

export default Basket;
