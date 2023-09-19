import Context from "./Context";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import logoBack from "../IMG/back.jpg";

const CheckoutPage = () => {
  const value = useContext(Context);

  // show payment seccesfull block
  const [msgSendOrder, setMsgSendOrder] = useState(false);

  const [transactionNr, setTransactionNr] = useState("");

  const handlePay = () => {
    value.setBasketList([]);
    setMsgSendOrder(true);

    // random transactionNr creation - 2 Letters + 10 numbers
    const arrLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

    for (let i = 0; i < 2; i++) {
      const index = Math.floor(Math.random() * 10); //random nr from 0 -9
      setTransactionNr((prevNr) => {
        return prevNr + arrLetters[index];
      });
    }

    const arrNr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 10; i++) {
      const index = Math.floor(Math.random() * 10);
      setTransactionNr((prevNr) => {
        return prevNr + arrNr[index];
      });
    }
  };

  return (
    <div>
      <h1 className="Checkout-head">Checkout</h1>
      <div className="main-flex-checkout">
        <div className="left-side-flexbox">
          <div className="whole-container">
            <form className="border-container-main">
              <div class="border-container">
                <label className="border-container-head-text">
                  Payment method:{" "}
                </label>
                <br />
                <div>
                  <input
                    className="checkout-payment-input"
                    type="radio"
                    id="Visa"
                    name="PaymentMethod"
                    value="Visa"
                    checked
                  />
                  <label className="checkout-payment" for="Visa">
                    Visa
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-payment-input"
                    type="radio"
                    id="MasterCard"
                    name="PaymentMethod"
                    value="MasterCard"
                  />
                  <label className="checkout-payment" for="MasterCard">
                    MasterCard
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-payment-input"
                    type="radio"
                    id="Amex"
                    name="PaymentMethod"
                    value="Amex"
                  />
                  <label className="checkout-payment" for="Amex">
                    Amex
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-payment-input"
                    type="radio"
                    id="PayPal"
                    name="PaymentMethod"
                    value="PayPal"
                  />
                  <label className="checkout-payment" for="PayPal">
                    PayPal
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-payment-input"
                    type="radio"
                    id="Google Pay"
                    name="PaymentMethod"
                    value="Google Pay"
                  />
                  <label className="checkout-payment" for="Google Pay">
                    Google Pay
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-payment-input"
                    type="radio"
                    id="Apple Pay"
                    name="PaymentMethod"
                    value="Apple Pay"
                  />
                  <label className="checkout-payment" for="Apple Pay">
                    Apple Pay
                  </label>
                </div>
                <br />
              </div>
            </form>

            {/* /////////////////////////////////////////////////////////////////////////////////// */}

            <form className="border-container-main">
              <div class="border-container">
                <label className="border-container-head-text">
                  Shipping Info:{" "}
                </label>
                <br />
                <label>Name</label>
                <br />
                <input />
                <br />
                <label>Surname</label>
                <br />
                <input />
                <br />
                <label>Address</label>
                <br />
                <input />
                <br />
                <label>Postcode</label>
                <br />
                <input />
              </div>
            </form>

            {/* ///////////////////////////////////////////////////////////////////////////////////// */}

            <form className="border-container-main">
              <div class="border-container">
                <label className="border-container-head-text">
                  Choose Delivery method:{" "}
                </label>
                <br />
                <div>
                  <input
                    className="checkout-delivery-input"
                    type="radio"
                    id="3-5workDays"
                    name="deliveryMethod"
                    value="£5.95"
                    checked
                  />
                  <label className="checkout-label" for="3-5workDays">
                    3-5 Working Day Service - £5.95
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-delivery-input"
                    type="radio"
                    id="1-2workDays"
                    name="deliveryMethod"
                    value="£7.95"
                  />
                  <label className="checkout-label" for="1-2workDays">
                    1-2 Working Day Service - £7.95
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-delivery-input"
                    type="radio"
                    id="NextworkDay"
                    name="deliveryMethod"
                    value="£10.95"
                  />
                  <label className="checkout-label" for="NextworkDay">
                    Next Working Day Service (Order by 2pm) - £10.95
                  </label>
                </div>
                <br />

                <div>
                  <input
                    className="checkout-delivery-input"
                    type="radio"
                    id="Saturday"
                    name="deliveryMethod"
                    value="£14.95"
                  />
                  <label className="checkout-label" for="Saturday">
                    Saturday Delivery (Order by 2pm Friday) - £14.95
                  </label>
                </div>
                <br />
              </div>
            </form>

            <div className="totalOrder-container">
              <h3>Order Total:</h3>
              <p>£ {value.totalBill}</p>

              <button onClick={handlePay} style={{ padding: 5 }}>
                Confirm and Pay
              </button>
            </div>
          </div>
          <div className="right-side-flexbox">
            <img src={logoBack} alt="pcs" style={{ width: 500 }} />
            <img src={logoBack} alt="pcs" style={{ width: 500 }} />
          </div>
        </div>

        {/* <p>when you click on Pay button - basketList - become empty, show message your order has been sent</p>  */}

        {msgSendOrder ? (
          <div className="payment-container-checkout">
            <FontAwesomeIcon icon={faCircleCheck} className="tick-checkout" />
            <h2>Payment successful!</h2>
            <p>Hooray! You have completed your payment.</p>
            <hr style={{ marginBottom: 20 }} />
            <span style={{ fontWeight: "bold", color: "black" }}>
              Transaction Nr.:
            </span>{" "}
            <span>{transactionNr}</span>
            <br />
            <span style={{ fontWeight: "bold", color: "black" }}>
              Amount Paid:
            </span>{" "}
            <span>£{value.totalBill}</span>
            <br />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CheckoutPage;
