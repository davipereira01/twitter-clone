import './Login.css';
import React, {Component} from "react";
import background from './backgroundTwitter.png';
import bird from './twitter.png';
import birdLogo from './twitterLogo.png';
import Modal from './ModalLoginUser';

class Login extends Component {
    constructor() {
    super();
    this.state = {
      show: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
 render(){
    return (<
        div className="Login" >
<Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <div className="imgContainer">

            <img src={background} alt="imagem de fundo" />
            <img id="birdCover" src={bird} alt="home-icon" />

        </div>
        <div className="loginContainer">

            <img id="birdLogo" src={birdLogo} alt="home-icon" />

            <div className="textContainer">

                <h1>Acontecendo agora</h1>

            </div>

            <div className="textContainer">

                <h2>Inscreva-se no Twitter hoje mesmo.</h2>

            </div>

            <button className="btnInscrever">Inscrever-se</button>
            <button className="btnEntrar" onClick={this.showModal}>Entrar</button>


        </div>

        <footer>

            <ul>

                <li>

                    <a>Sobre</a>

                </li>

                <li>

                    <a>Central de Ajuda</a>

                </li>

                <li>

                    <a>Termos de serviços</a>

                </li>

                <li>

                    <a>Política de privacidade</a>

                </li>

                <li>

                    <a>Política de cookies</a>

                </li>

                <li>

                    <a>Informações de anúncios</a>

                </li>

                <li>

                    <a>Blog</a>

                </li>

                <li>

                    <a>Status</a>

                </li>

                <li>

                    <a>Carreiras</a>

                </li>

                <li>

                    <a>Recursos da Marca</a>

                </li>

                <li>

                    <a>Publicidade</a>

                </li>

                <li>

                    <a>Marketing</a>

                </li>

                <li>

                    <a>Twitter para empresas</a>

                </li>





                <li>

                    <a>Desenvolvedores</a>

                </li>

                <li>

                    <a>Diretório</a>

                </li>

                <li>

                    <a>Configurações</a>

                </li>

                <li>

                    <p>© 2021 Twitter, Inc.</p>

                </li>




            </ul>

        </footer>




    </div>



    );
}
}
export default Login;