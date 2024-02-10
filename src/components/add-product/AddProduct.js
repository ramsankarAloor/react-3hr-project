import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddProduct.module.css";

const AddProduct = (props) => {
  return (
    <Card className={styles.input}>
      <form >
        <label htmlFor="product-id">Product ID</label>
        <input id="product-id" type="text" />
        <label htmlFor="selling-price">Selling price</label>
        <input id="selling-price" type="number" min={0.01} step={0.01} />
        <label htmlFor="product-name">Product name</label>
        <input id="product-name" type="text" />
        <label htmlFor="category">Choose category</label>
        <select id="category">
          <option value="volvo">Electronics</option>
          <option value="saab">Food item</option>
          <option value="mercedes">Skin care</option>
        </select>
        <Button type="submit">Add product</Button>
      </form>
    </Card>
  );
};

export default AddProduct;
