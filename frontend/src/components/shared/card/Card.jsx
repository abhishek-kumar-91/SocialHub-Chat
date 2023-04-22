import React from 'react';
import style from "./Card.module.css";



function Card({title, icon, children}) {
    const logoImg = {
        height: "40px"
      }
  return (
   
    <div className={style.card}>
    <div className={style.headingWrapper}>
        <img src={`/images/${icon}.png`} alt="logo" style={logoImg}/>
        <h1 className={style.heading}>{title} </h1>
    </div>

   {children}
   </div>
  );
};

export default Card;