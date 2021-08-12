import React from 'react';
import styles from "./Outcome.module.css";
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import ProductsApi from '../../api/api';


const Outcome = () => {
    const products = useSelector(state => state.tablesPage);

    const toCartClick = () => {
        const data = new Object;
        data.product = products.product;
        ProductsApi.addProducts(data)
    }
    
    const outcomeAmountProducts = Object.values(products.product);
    const outcomePriceProducts = Object.values(products.price)
    let x = 0;
    let y = 0;
    const outcomeAmount = outcomeAmountProducts.map(item => x += item).reverse()[0] || 0;
    const outcomePrice = outcomePriceProducts.map(item => y += item).reverse()[0] || 0;
    return (
        <div className={styles.outcome}>
            <div className={styles.amount}>
                Общее количество: {outcomeAmount}
            </div>
            <div className={styles.price}>
                Общей суммы за товары: {outcomePrice} руб
            </div>
            <div className={styles.outcome_btn}>
                <Button variant="contained" color="primary" onClick={toCartClick}>
                    В корзину
                </Button>
            </div>
        </div>
    )
}


export default Outcome;