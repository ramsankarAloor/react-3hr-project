import Card from '../UI/Card';
import styles from './ListCard.module.css'

const ElectronicsList = props => {

    // const electronicsList = props.electronicsItems.map(item => <ListElement />)

    return (
        <Card className={styles.input}>
            <h3>Electronics</h3>
        </Card>
    )
}

export default ElectronicsList;