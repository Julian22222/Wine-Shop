import Context from "./Context";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const value = useContext(Context);

  const navigate = useNavigate();

  // show payment seccesfull block
  const [msgSendOrder, setMsgSendOrder] = useState(false);

  const [transactionNr, setTransactionNr] = useState("");

  const [paymentOption, setPaymentOption] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  let totalOrder = Number(value.totalBill) + Number(deliveryMethod);

  const handleSubmit = (e) => {
    e.preventDefault();

    value.setBasketList([]);

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

    if (!paymentOption) {
      setFormSubmitted(true); // show error
      return;
    }

    if (!deliveryMethod) {
      setFormSubmitted(true); // show error
      return;
    }

    // handle valid form submission
    alert(
      `Payment successful!\nPayment method: ${paymentOption}\nDelivery cost: £${deliveryMethod}\nTotal order: £${
        Number(value.totalBill) + Number(deliveryMethod)
      }\nTransaction Nr.: ${transactionNr}\nThank you for your order!`
    );

    navigate("/Wine-Shop"); // Navigate to home page after successful payment, after pressing Ok in alert
  };

  return (
    <div>
      <h1 className="Checkout-head">Checkout</h1>
      <div className="main-checkout">
        <form className="whole-container" onSubmit={handleSubmit}>
          <div className="checkout-container">
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
                  // checked
                  onChange={(e) => {
                    setPaymentOption(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPaymentOption(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPaymentOption(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPaymentOption(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPaymentOption(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setPaymentOption(e.target.value);
                  }}
                />
                <label className="checkout-payment" for="Apple Pay">
                  Apple Pay
                </label>
              </div>
              <br />

              {/* Error message in Payment method, if left empty */}
              {formSubmitted && !paymentOption && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Please select Payment option!{" "}
                </p>
              )}
            </div>
          </div>

          {/* /////////////////////////////////////////////////////////////////////////////////// */}

          <div className="checkout-container">
            <div class="border-container">
              <label className="border-container-head-text">
                Shipping Info:{" "}
              </label>
              <br />
              <label>Full Name:</label>
              <input
                required
                type="text"
                placeholder="insert your full name"
                style={{ width: "90%", marginLeft: "5%", marginTop: "5px" }}
              />
              <br />
              <br />
              <label>Address:</label>
              <input
                required
                type="text"
                placeholder="insert your address"
                style={{ width: "90%", marginLeft: "5%", marginTop: "5px" }}
              />
              <br />
              <br />
              <label>Postcode:</label>

              <input
                required
                type="text"
                placeholder="insert your postcode"
                style={{ width: "90%", marginLeft: "5%", marginTop: "5px" }}
              />
              <br />
              <br />
              <label>E-mail:</label>
              <input
                required
                type="email"
                placeholder="insert your email"
                style={{ width: "90%", marginLeft: "5%", marginTop: "5px" }}
              />
              <br />
              <br />
              <label>Phone No.:</label>
              <input
                required
                type="tel"
                style={{ width: "90%", marginLeft: "5%", marginTop: "5px" }}
                placeholder="insert your phone number"
              />
              <br />
            </div>
          </div>

          {/* ///////////////////////////////////////////////////////////////////////////////////// */}

          <div className="checkout-container">
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
                  value="5.95"
                  // checked
                  // onClick={() => {
                  //   setDeliveryCost(5.95);
                  // }}
                  onChange={(e) => {
                    setDeliveryMethod(e.target.value);
                  }}
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
                  value="7.95"
                  // onClick={() => {
                  //   setDeliveryCost(7.95);
                  // }}
                  onChange={(e) => {
                    setDeliveryMethod(e.target.value);
                  }}
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
                  value="10.95"
                  onChange={(e) => {
                    setDeliveryMethod(e.target.value);
                  }}
                />
                <label className="checkout-label" for="NextworkDay">
                  Next Working Day Service (Order by 2pm) - £10.95
                </label>
              </div>
              <br />

              {/* Error message in Delivery method, if left empty */}
              {formSubmitted && !deliveryMethod && (
                <p style={{ color: "red", fontWeight: "bold" }}>
                  Please select Delivery option!{" "}
                </p>
              )}
            </div>
          </div>

          <div className="totalOrder-container">
            <h3>Wine order:</h3>
            <p>£ {value.totalBill}</p>
            <h1 style={{ marginTop: "50px" }}>Total order:</h1>
            <p>£ {totalOrder.toFixed(2)}</p>

            <button
              type="submit"
              style={{
                padding: "5px",
                position: "absolute",
                bottom: "10px",
                right: "10px",
              }}
            >
              Confirm and Pay
            </button>
          </div>
        </form>

        {/* <p>when you click on Pay button - basketList - become empty, show message your order has been sent</p>  */}

        {/* {msgSendOrder ? (
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
        ) : null} */}
      </div>
    </div>
  );
};

export default CheckoutPage;
