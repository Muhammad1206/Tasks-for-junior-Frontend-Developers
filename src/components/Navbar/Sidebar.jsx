import React from 'react';
import styles from "./Sidebar.module.css";
import { NavLink } from 'react-router-dom';


const Sidebar = (props) => {

    const listProducts = props.productsData.map(item => <li key={item.rid}>
        <NavLink  to={`/${item.urlalias}`}> {item.rname} </NavLink>
    </li>
    );
    return (
        <div className={styles.sidebar}>
            <ul>
                {listProducts}
            </ul>
        </div>
    )
};


export default Sidebar;
