import Card from '../UI/Card';
import styles from './ListCard.module.css'

const FoodItemsList = props => {

    // const electronicsList = props.electronicsItems.map(item => <ListElement />)

    return (
        <Card className={styles.input}>
            <h3>Food Items</h3>
        </Card>
    )
}

export default FoodItemsList;