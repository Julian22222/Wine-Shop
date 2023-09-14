const CheckoutPage = () => {
  return (
    <div>
      <h1 className="Checkout-head">Checkout</h1>

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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
                checked
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
          <p>$ Amount</p>

          <button>Confirm and Pay</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
