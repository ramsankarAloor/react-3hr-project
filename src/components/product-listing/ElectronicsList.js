import Card from "../UI/Card";
import styles from "./ListCard.module.css";
import ListElement from "./ListElement";

const ElectronicsList = (props) => {
  return (
    <Card className={styles.products}>
      <h3>Electronics</h3>
      <ul>
        {props.electronicsItems.map((item) => (
        <ListElement item={item} key={item.productId}/>
        ))}
      </ul>
    </Card>
  );
};

export default ElectronicsList;
