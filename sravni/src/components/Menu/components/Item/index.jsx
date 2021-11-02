import React from 'react';
import styles from './Item.module.css';

const Item = (props) => {
    const { id, name } = props;

    return (
        <li id={id} className={styles.container}>
         {name}
        </li>
    );
}

export default Item;