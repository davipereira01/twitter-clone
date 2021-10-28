import './App.css';
import React, { Component } from "react";
import like from './like.png';
import speech from './speech.png';
import retweet from './retweet.png';
import share from './share.png';
import bird from './manifest.png';
import loupe from './loupe.png';
import bell from './bell.png';
import avatar from './avatar.png';
import avatar2 from './avatar2.png';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.png';
import envelope from './message.png';
import bookMark from './bookmark.png';
import list from './list.png';
import user from './user.png';
import hashtag from './hashtag.png';
import midia from './midia.png';
import gif from './gif-file.png';
import chart from './bar-chart.png';
import emoji from './emoji.png';
import calendar from './calendar.png';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import NewsList from './components/NewsList';

import { render } from '@testing-library/react';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tweets: []
        };
     
    }


    componentDidMount() {
        fetch("./tweets.json").then(response => {
            return response.json();
          })
          .then(d => {
            this.setState({ tweets: d });
            console.log("state", this.state.tweets)
          }).catch(error => {
        console.log(error)
    })
}





    render() {
     
        return (<div className="App" >

        <section className="menuNavigation">
            <nav>

                <span>

                    <FontAwesomeIcon icon={faTwitter} />

                </span>

                <ul>
                    <li>

                        <img src={bird} alt="home-icon" />


                        <a>Página Inicial</a>

                    </li> <li >

                        <img src={hashtag} alt="hashtag-icon" />

                        <a> Explorar </a></li >
                    <li >

                        <img src={bell} alt="bell-icon" />

                        <a> Notificações </a></li >
                    <li>

                        <img src={envelope} alt="envelope-icon" />


                        <a> Mensagens </a></li>
                    <li>
                        <img src={bookMark} alt="bookMark-icon" />

                        <a> Itens salvos </a></li >
                    <li>
                        <img src={list} alt="list-icon" />
                        <a>Listas </a></li >
                    <li>
                        <img src={user} alt="user-icon" />
                        <a> Perfil </a></li >
                    <li>

                        <FontAwesomeIcon icon={faEllipsisH} /><a> Mais </a></li >

                </ul>

                <button id="btnMenu"> Tweetar </button>


                <div className="userDados">
                    <div className="profilePhoto" id="photoNav">

                        <img id="avatar" src={avatar} alt="imagem de perfil" />


                    </div>

                    <div id='userNav' className="userInformationNav">


                        <p>Davi</p>
                        <p>@Falaedavii</p>

                    </div>
                </div>

            </nav>

        </section>



        <section className="dashContent">
            <header className="title"><h1>Página Inicial</h1></header>






            <div className="newTweet">



                <form>
                    <div className="profilePhoto">

                        <img id="avatarDash" src={avatar} alt="imagem de perfil" />



                    </div>
                    <textarea required placeholder="O que está acontecendo?" id="teste" maxLength='280' ></textarea>



                    <div className='box-content'>

                       

                            <div className="actionIcons">

                                <img className="actionImg" src={midia} alt="midia icon" />
                                <img className="actionImg" id='gifImage' src={gif} alt="gif icon" />
                                <img className="actionImg" src={chart} alt="chart icon" />
                                <img className="actionImg" src={emoji} alt="emoji icon" />
                                <img className="actionImg" src={calendar} alt="calendar icon" />


                            </div>


                            <button onClick={this.createTweet}> Tweetar </button>


                       


                    </div>



                </form>



            </div>





            <div className="tweetFeed" >

            {this.state.tweets.map(((items, index) =>
                         <div className='feedUpdate'>
                         <div className="feedItem">
                            <div id='profilePhotoFeed' className="profilePhoto">
     
                            </div>
                            <div id="userInformationFeed" className="userComment">
                             <div className='userInformation' key={index}>
     
                             <span>{items.user}</span>
                             <span>{items.nickname}</span>
                             <span>{items.time}</span>
                             </div>
                                <p className="commentContent">{items.comment}</p>
                            </div>
                            </div>
                        <div className="actionsTweetFeed">

                <img src={speech} alt="icone balão de resposta" />
                <img src={retweet} alt="icone de retweet" />
                <img src={like} alt="icone curtir"/>
                <img src={share} alt="icone compartilhar"/>


                </div>
                     </div>

                    ))}
               

                

            </div>




        </section>


        <section className="trendUpdates">
            <div className="searchBox">
                <input id="searchInput" placeholder="Buscar no Twitter" ></input>
                <img id="loupeIcon" src={loupe} alt="icone de lupa" />

            </div>

            <div className="updatesContainer">



                <h2> O que está acontecendo </h2>

                <div className="updateContent">



                    <NewsList />


                </div>

                <div className="showMoreBox">
                    <a>Mostrar mais</a>
                </div>




            </div>



            <div className="sugestionsToFollow">
                <div>
                    <h2>Quem seguir?</h2>

                </div>

                <div className='sugestionBox' id='box-1'>
                    <div className="profilePhoto">

                        <img className='avatarUser' id="avatar2" src={avatar2} alt="imagem de perfil" />
                    </div>


                    <div className="userInformation">


                        <p>Jorge</p>
                        <p>@jorge</p>

                    </div>



                    <button id="sugestionButton">Seguir</button>

                </div>

                <div className='sugestionBox' id='box-1'>
                    <div className="profilePhoto">

                        <img className='avatarUser' id="avatar3" src={avatar3} alt="imagem de perfil" />
                    </div>

                    <div className="userInformation">


                        <p>Pedro</p>
                        <p>@pedro</p>

                    </div>
                    <button id="sugestionButton">Seguir</button>

                </div>

                <div className='sugestionBox' id='box-1'>
                    <div className="profilePhoto">

                        <img className='avatarUser' id="avatar4" src={avatar4} alt="imagem de perfil" />
                    </div>

                    <div className="userInformation">


                        <p>Batman</p>
                        <p>@Batman</p>

                    </div>
                    <button id="sugestionButton">Seguir</button>

                </div>



            </div>

            <section className='policies'>

                <p>Termos de Serviço
                    Política de Privacidade
                    Política de cookies
                    Informações de anúncios
                    Mais
                    © 2021 Twitter, Inc.</p>


            </section>

            <div className="messageContainer">

                <div className="messageBox">

                    <h2>Mensagens</h2>

                </div>

            </div>

        </section>







    </div>




    );
}}

export default App;