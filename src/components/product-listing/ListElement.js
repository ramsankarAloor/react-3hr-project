import styles from "./ListElement.module.css";
import Button from "../UI/Button";

const ListElement = (props) => {

    const onDelete=()=>{
        props.deleteHandler(props.item.productId)
    }

  return (
    <li key={props.item.productId}>
      <div className={styles["inside-li"]}>
        <div className={styles["text-div"]}>
          {props.item.productName} {props.item.sellingPrice}
        </div>
        <div className={styles["delete-button-div"]}>
          <Button className={styles["delete-button"]} onClick={onDelete}>Delete</Button>
        </div>
      </div>
    </li>
  );
};

export default ListElement;
