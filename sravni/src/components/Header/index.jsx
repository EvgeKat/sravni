import React from 'react';
import styles from './Header.module.css';
import Menu from "../Menu";
import Login from "../Login";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
      <Menu />
      <Login />
      </div>
    </header>
  )
};

export default Header;