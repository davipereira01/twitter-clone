import './ModalLoginPassword.css';
import React from "react";
import birdLogo from './twitterLogo.png';
import closeBtn from './close.png';
import background from './backgroundTwitter.png';
import bird from './twitter.png';



function ModalLoginPassword() {
    return (<
        div className="ModalLoginPassword" >

        <div className="container">



            <img id="xBtn" src={closeBtn} alt="botão x" />
            <img id="birdLogo" src={birdLogo} alt="home-icon" />

            <h1>Digite sua senha</h1>

            <input id="nameUser" placeholder="Nome de usuário" autocapitalize="sentences" autocomplete="on" autocorrect="on" disabled="" name="username" spellcheck="true" type="text" dir="auto" class="r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-14j79pv r-poiln3 r-7cikom r-1ny4l3l r-t60dpp r-1dz5y72 r-fdjqy7 r-13qz1uu" value="falaedavii"></input>

            <input autocapitalize="sentences" autocomplete="current-password" autocorrect="on" name="password" spellcheck="true" type="password" dir="auto" class="r-30o5oe r-1niwhzg r-17gur6a r-1yadl64 r-deolkf r-homxoj r-poiln3 r-7cikom r-1ny4l3l r-t60dpp r-1dz5y72 r-fdjqy7 r-13qz1uu" aria-autocomplete="list"></input>
            <a>Mostrar senha</a>
            <button>Entrar</button>

        </div>




    </div>



    );
}

export default ModalLoginPassword;