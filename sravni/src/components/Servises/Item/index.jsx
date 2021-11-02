import React from 'react';
import styles from './Item.module.css';

const Item = (props) => {
    const { id, image, name, link } = props;

    return (
      <a href={link}>
          <img src={image} className={styles.icon}/>
          <li  id={id} className={styles.container}>
            {name}
          </li>
      </a>
    );
}

export default Item;