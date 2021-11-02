import React from 'react';
import styles from './Item.module.css';

const Card = (props) => {
    const { subTitle, description, buttonText, image, link } = props;

    return (
      <div className={styles.column}>
        <a href={link}>
        <div className={styles.block}>
          <h3>{subTitle}</h3>
          <p>{description}</p>
          <button>{buttonText}</button>
        </div>
        <div className={styles.block}> 
          <img src={image} className={styles.picture}/>
        </div></a>
      </div>
    );
}

export default Card;