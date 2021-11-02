import React from 'react';
import Card from './components/Item';
import style from './Main.module.css';
import Title from './components/title';

const cards = [
  {
    subTitle: "Подбор кредита",
    description: "Подберем банки с высокой \n вероятностью одобрения",
    buttonText: "Подобрать",
    image: "https://s91588.cdn.ngenix.net/home/_next/static/images/promoCredit-0188e96e9911d2807dee40248837417e.jpg.webp",
    link: "https://google.com"
  },
  {
    subTitle: "ОСАГО",
    description: "Поможем сравнить цены \n и сэкономить до 3 000 руб",
    buttonText: "Сравнить",
    image: "https://s91588.cdn.ngenix.net/home/_next/static/images/promoOsago-b93f36b7a511676367b1628d277cb500.jpg",
    link: "https://google.com"
  }
];

const TitleText = "Супермаркет финансовых и страховых услуг";

const Main = () => {
  return (
   <div className={style.conteiner}>
      <Title TitleText={TitleText}/>
      <div className={style.columns}>
      {
       cards.map(сard => <Card subTitle={сard.subTitle} description={сard.description} buttonText={сard.buttonText} image = {сard.image} link={сard.link} />)
      }
      </div>
    </div>
  )
}

export default Main;