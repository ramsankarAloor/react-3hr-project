import { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddProduct.module.css";

const AddProduct = (props) => {
  const productIdRef = useRef()
  const sellingPriceRef = useRef()
  const productNameRef = useRef()
  const categoryRef = useRef()

  const onSubmitHandler=event=>{
    event.preventDefault()
    const productInfo = {
      productId : productIdRef.current.value,
      sellingPrice : sellingPriceRef.current.value,
      productName : productNameRef.current.value,
      category : categoryRef.current.value
    }

    productIdRef.current.value = ''
    sellingPriceRef.current.value = ''
    productNameRef.current.value = ''
    categoryRef.current.value = 'Electronics'
    
  }
  
  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="product-id">Product ID</label>
        <input id="product-id" type="text" ref={productIdRef}/>

        <label htmlFor="selling-price">Selling price</label>
        <input ref={sellingPriceRef} id="selling-price" type="number" min={0.01} step={0.01} />

        <label htmlFor="product-name">Product name</label>
        <input ref={productNameRef} id="product-name" type="text" />

        <label htmlFor="category">Choose category</label>
        <select ref={categoryRef} id="category">
          <option value="Electronics">Electronics</option>
          <option value="Food Item">Food item</option>
          <option value="Skin care">Skin care</option>
        </select>

        <Button type="submit">Add product</Button>
      </form>
    </Card>
  );
};

export default AddProduct;
