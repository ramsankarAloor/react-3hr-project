import AddProduct from "../add-product/AddProduct";
import styles from "./FullPage.module.css";

const FullPage = (props) => {
  return (
    <>
      <div className={styles['left-half']}>
        <AddProduct />
      </div>
      <div className={styles['right-half']}>
        
      </div>
    </>
  );
};

export default FullPage;
