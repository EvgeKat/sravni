import React from 'react';
import style from './Item.module.css';

const Title = (props) => {
    const { TitleText } = props;

    return (
      <h1 className={style.conteiner}>
       {TitleText}
      </h1>
    );
}

export default Title;