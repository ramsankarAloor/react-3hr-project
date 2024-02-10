import { useState } from "react";
import AddProduct from "../add-product/AddProduct";
import ElectronicsList from "../product-listing/ElectronicsList";
import FoodItemsList from "../product-listing/FoodItemsList";
import SkincareList from "../product-listing/SkincareList";
import styles from "./FullPage.module.css";

const FullPage = (props) => {
  const [electronics, setElectronics] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [skincare, setSkincare] = useState([]);

  const addProductHandler = (productInfoObj) => {
    if (productInfoObj.category === "Electronics") {
      setElectronics((prevElectronics) => [productInfoObj, ...prevElectronics]);
    } else if(productInfoObj.category === "Food item"){
      setFoodItems((prevFoodItems) => [productInfoObj, ...prevFoodItems]);
    }else {
      setSkincare( (prevSkincare)=> [productInfoObj, ...prevSkincare])
    }
  };

  return (
    <>
      <div className={styles["left-half"]}>
        <AddProduct onAddProduct={addProductHandler} />
      </div>
      <div className={styles["right-half"]}>
        <ElectronicsList electronicsItems={electronics} />
        <FoodItemsList foodItems={foodItems} />
        <SkincareList skincareItems={skincare}/>
      </div>
    </>
  );
};

export default FullPage;
