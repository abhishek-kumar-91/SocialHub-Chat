import React from 'react'
import style from "./Button.module.css";


function Button({text, onClick}) {
    const logoArrow = {
        height:"40px",
       marginTop: "8px",
        padding: "2px"
    }
  return (
    
    <button onClick={onClick} className={style.button}>
             <span>{text}</span>
             <img src="/images/arrow.png" alt="arrow" style={logoArrow}/>
     </button>
  )
}

export default Button