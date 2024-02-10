import Card from '../UI/Card';
import styles from './ListCard.module.css'
import ListElement from './ListElement';

const SkincareList = props => {
    const skincareList = props.skincareItems.map((item) => (
        <ListElement item={item} key={item.productId} deleteHandler={props.deleteHandler}/>
      ));
  
    return (
        <Card className={styles.products}>
            <h3>Skincare</h3>
            <ul>{skincareList}</ul>
        </Card>
    )
}

export default SkincareList;