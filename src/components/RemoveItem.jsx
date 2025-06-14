import Context from "./Context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const RemoveItem = (props) => {
  const { item } = props;
  const value = useContext(Context);
  // console.log(item);
  //   const handleRemove = (itemOfBasket) => {
  //     value.setBasketList((current) => {
  //   const newBasket = [...current];
  //   const findItem = newBasket.findIndex((itemObj) => {
  //     return itemObj.itemName === item.itemName;
  //   });
  //   newBasket.splice(findItem, 1);
  //   return newBasket;
  // });

  const handleRemove = (item) => {
    const newList = value.basketList.filter((element) => element !== item);

    value.setBasketList(newList);
  };

  return (
    <div>
      <button onClick={() => handleRemove(item)} className="RemoveItem">
        {/* Remove item */}
        <FontAwesomeIcon icon={faTrashCan} style={{ fontSize: "25px" }} />
      </button>
    </div>
  );
};

export default RemoveItem;
