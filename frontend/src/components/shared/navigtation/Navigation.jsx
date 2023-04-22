import React from 'react'
import {Link} from 'react-router-dom';
import "./Navigation.module.css";


function Navigation() {

    const brandStyle = {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "22px",
        display: "flex",
        alignItems: "center",
        margin: "15px",
       
    };

    const logoText ={
        marginLeft: "5px"
    };

    const logoImg = {
        
        height: "30px"
    
    };
    const logoBorder = {
        display: "flex",
        alignItems: "center",
       border: "2px solid #FF5C87",
        padding: "5px",
        borderRadius: "50px"
    }



  return (
   <nav className='container navbar'>
    <Link style = {brandStyle}to = "/">
        <div style={logoBorder}>
        <img src="/images/like.png" alt="logo"  style={logoImg}/>
        <span style={logoText}>SocialHub</span>
        </div>
    </Link>
   </nav>
  )
}

export default Navigation