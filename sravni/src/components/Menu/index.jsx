import React from 'react';
import Item from './components/Item';
import styles from './Menu.module.css';

const items = [
    {
        id: "money",
        name: "Деньги",
    },
    {
        id: "insurance",
        name: "Страхование",
    },
    {
        id: "business",
        name: "Бизнес",
    },
    {
        id: "journal",
        name: "Журнал",
    },
]

const Menu = () => {
    return (
        <nav>
         <ul className={styles.container}>
            {
                items.map(item => <Item id={item.id} name={item.name} />)
            }
         </ul>
        </nav>
    );
}

export default Menu;