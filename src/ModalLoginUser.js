import './ModalLoginUser.css';
import React from "react";
import birdLogo from './twitterLogo.png';
import closeBtn from './close.png';





function ModalLoginUser({ handleClose, show, children }) {
  

    return (
        <div className={show ? "display-block" : "display-none"}>
        <div className="ModalLoginUser">
        <div className="containerModal">



            <img id="xBtn" onClick={handleClose} src={closeBtn} alt="botão x" />
            <img id="birdLogo" src={birdLogo} alt="home-icon" />


            <h1 className="modalTitle">Para começar, informe telefone, e-mail ou @nomedeusuario</h1>


            <input placeholder="Celular, e-mail ou nome de usuário" autocapitalize="none" autocomplete="username" autocorrect="off" inputmode="text" name="username" spellcheck="false" type="text" dir="auto" className="inputModal"></input>
            <input placeholder="Senha" autocapitalize="none" autocomplete="username" autocorrect="off" inputmode="text" name="username" spellcheck="false" type="password" dir="auto" className="inputModal"></input>

            <a href="https://dreamy-tesla-8589fd.netlify.app/"><div className="btnModal">Avançar</div></a>

        </div>




    </div>
</div>


    );
}

export default ModalLoginUser;