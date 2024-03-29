import Context from "./Context";
import { useContext } from "react";
import { useState } from "react";

const ButtonToBasket = (props) => {
  const value = useContext(Context);

  // quantity ,how many bottles client wants to order,( ButtonToBasket )
  const [quantity, setQuantity] = useState(1);

  const handleBtn = (event) => {
    event.preventDefault();

    // creating variable ->qty in eachCard, where we store quantity of this wine customer would like to buy
    props.eachCard.qty = quantity;

    // creating variable ->total in eachCard, where we keep total amount of money to pay for this type of wine
    props.eachCard.total = (quantity * props.eachCard.price.slice(1)).toFixed(
      2
    );

    // console.log("BASKETLIST", value.basketList);
    // console.log("EACH CARD", props.eachCard);

    // if the order basket already contains the same item -> show msg, you already have this item in the basket
    if (
      value.basketList.some(
        (element) =>
          JSON.stringify(element.name) === JSON.stringify(props.eachCard.name)
      )
    ) {
      value.setMsgAlreadyInTheBasket(true);

      setTimeout(() => {
        value.setMsgAlreadyInTheBasket(false);
      }, 2000);
    } else {
      value.setBasketList([props.eachCard, ...value.basketList]);
      // console.log(props.eachCard);
      // value.setBasketList(props.eachCard);
      // console.log(props.quantity);
      // console.log("quantity", quantity);
      // console.log("basketList", value.basketList);
      // console.log("props.eachCard.qty", props.eachCard.qty);
      // console.log("value.msgAlreadyInTheBasket", value.msgAlreadyInTheBasket);

      props.setShowAddedToTheBasketMSG(true);

      setTimeout(() => {
        props.setShowAddedToTheBasketMSG(false);
      }, 2000);
    }

    value.setTotalBill((prevData) => {
      return (Number(prevData) + Number(props.eachCard.total)).toFixed(2);
    });

    // console.log("Total price for this wine", props.eachCard.total);

    //////////////////////////////////////////////////////////////////////////////////////////////////////
  };
  //   console.log(value.basketList);

  return (
    <div className="qty-container">
      <label className="qty-text">Qty:</label>
      <input
        type="number"
        className="input-number"
        value={quantity}
        onChange={(event) => setQuantity(event.target.value.replace(/\D/, ""))}
        min="0"
        // max="20"
      />
      <button onClick={handleBtn} className="ButtonForCard">
        Add to basket
      </button>
    </div>
  );
};

export default ButtonToBasket;
