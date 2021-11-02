import React from 'react';
import styles from './Item.module.css';
import Item from './Item';

const servs = [
    {
        id: "1",
        image: "https://cdn-icons-png.flaticon.com/128/158/158756.png",
        name: "подбор кредита",
        link: "https://google.com"
    },
    {
        id: "2",
        image: "https://cdn-icons-png.flaticon.com/128/158/158704.png",
        name: "кредитный рейтинг",
        link: "https://google.com",
    },
    {
        id: "3",
        image: "https://cdn-icons-png.flaticon.com/128/126/126157.png",
        name: "вклады",
        link: "https://google.com"
    },
    {
        id: "4",
        image: "https://cdn-icons-png.flaticon.com/128/126/126122.png",
        name: "ипотека",
        link: "https://google.com"
    },
    {
        id: "5",
        image: "https://cdn-icons-png.flaticon.com/128/126/126176.png",
        name: "займы",
        link: "https://google.com"
    },
    {
        id: "6",
        image: "https://cdn-icons-png.flaticon.com/128/126/126092.png",
        name: "осаго",
        link: "https://google.com"
    },
    {
        id: "7",
        image: "https://cdn-icons-png.flaticon.com/128/126/126092.png",
        name: "каско",
        link: "https://google.com"
    },
    {
        id: "8",
        image: "https://cdn-icons-png.flaticon.com/128/159/159773.png",
        name: "страхование путешествий",
        link: "https://google.com"
    },
    {
        id: "9",
        image: "https://cdn-icons-png.flaticon.com/128/126/126122.png",
        name: "страхование ипотеки",
        link: "https://google.com"
    },
    {
        id: "10",
        image: "https://cdn-icons-png.flaticon.com/128/126/126109.png",
        name: "страхование спортсменов",
        link: "https://google.com"
    }
];

const Servises = () => {
    return(
        <div className={styles.container}>
            {
                servs.map(serv => <Item id={serv.id} image={serv.image} name={serv.name} link={serv.link} />) 
            }
        </div> 
    )
};

export default Servises;