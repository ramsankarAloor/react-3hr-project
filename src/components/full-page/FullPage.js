import AddProduct from "../add-product/AddProduct";
import ElectronicsList from "../product-listing/ElectronicsList";
import FoodItemsList from "../product-listing/FoodItemsList";
import SkincareList from "../product-listing/SkincareList";
import styles from "./FullPage.module.css";

const FullPage = (props) => {
  return (
    <>
      <div className={styles['left-half']}>
        <AddProduct />
      </div>
      <div className={styles['right-half']}>
        <ElectronicsList />
        <FoodItemsList />
        <SkincareList />
      </div>
    </>
  );
};

export default FullPage;
