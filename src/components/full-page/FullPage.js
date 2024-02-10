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

  const deleteHandlerElectronics = (id) => {
    const updated = electronics.filter((item) => item.productId !== id);
    setElectronics(updated);
    localStorage.removeItem(id);
  };

  const deleteHandlerFoodItems = (id) => {
    const updated = foodItems.filter((item) => item.productId !== id);
    setFoodItems(updated);
    localStorage.removeItem(id);
  };

  const deleteHandlerSkincare = (id) => {
    const updated = foodItems.filter((item) => item.productId !== id);
    setSkincare(updated);
    localStorage.removeItem(id);
  };

  const addProductHandler = (productInfoObj) => {
    if (productInfoObj.category === "Electronics") {
      setElectronics((prevElectronics) => [productInfoObj, ...prevElectronics]);
    } else if (productInfoObj.category === "Food item") {
      setFoodItems((prevFoodItems) => [productInfoObj, ...prevFoodItems]);
    } else {
      setSkincare((prevSkincare) => [productInfoObj, ...prevSkincare]);
    }
  };

  return (
    <>
      <div className={styles["left-half"]}>
        <AddProduct onAddProduct={addProductHandler} />
      </div>
      <div className={styles["right-half"]}>
        <ElectronicsList
          electronicsItems={electronics}
          deleteHandler={deleteHandlerElectronics}
        />
        <FoodItemsList
          foodItems={foodItems}
          deleteHandler={deleteHandlerFoodItems}
        />
        <SkincareList
          skincareItems={skincare}
          deleteHandler={deleteHandlerSkincare}
        />
      </div>
    </>
  );
};

export default FullPage;
