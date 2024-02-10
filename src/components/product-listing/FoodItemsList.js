import Card from "../UI/Card";
import styles from "./ListCard.module.css";
import ListElement from "./ListElement";

const FoodItemsList = (props) => {
  const foodItemsList = props.foodItems.map((item) => (
    <ListElement item={item} key={item.productId}/>
  ));

  return (
    <Card className={styles.products}>
      <h3>Food Items</h3>
      <ul>{foodItemsList}</ul>
    </Card>
  );
};

export default FoodItemsList;
