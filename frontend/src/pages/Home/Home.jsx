import React from 'react'
import style from "./Home.module.css";
import {Link,useNavigate } from "react-router-dom";
import Card from '../../components/shared/card/Card';
import Button from '../../components/shared/button/Button';


function Home() {
const linktag = {
  color: "#49A4F8",
  textDecoration: "none",
  cursor: "pointer",
  fontWeight: "bold"

};

const navigate =  useNavigate();

function startRegister () {
  navigate('/register');
}





  return (
   <div className={style.cardwrapper}>

<Card title="Welcome to SocialHub!" icon= "like" >

      <p className={style.text}> We are working hard to get SocialHub ready for
      everyone! while we wrap up the finishing touches, 
      we are adding people gradually to make sure nothing breaks.
      </p>
          <div >
             <Button onClick={startRegister} text = "Get your username"/>
            </div>

        <div className={style.signinwrapper}>
              <span className={style.hasInvite}>Have an invite text?</span>
              <Link to ="/login" style={linktag}>Sign In</Link>
        </div>
 
</Card>
    
  </div>

  );

};

export default Home