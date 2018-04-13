import React, { Component } from 'react';
import styles from './style.scss';
import bs from 'bootstrap/scss/bootstrap.scss';
import checkers from '../../img/devices/checkers-device.png';
import school from '../../img/devices/school-device.png';
import tictactoe from '../../img/devices/tictactoe-device.png';
import gallows from '../../img/devices/gallows-device.png';
import esp from '../../img/devices/esp.JPG';
import bt from './button.css';




class Projects extends Component {
/*    constructor() {
        super();
    }*/
    render() {
        return (
            <section id='projects-container' className={styles.projectsContainer}>
                <header className={styles.title}>PROJECTS</header>
                <div className={styles.content}>
                    <div>
                        <div>
                            <img src={checkers} alt=""/>
                        </div>
                        <article>
                            <h2>CHECKERS GAME</h2>
                            <p>Multiplayer online checkers game with realtime chat.</p>
                            <p>Stack: Angular, Typescript, NodeJS, Firebase, websockets</p>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}>LIVE</a>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}>GITHUB REPOSITORY</a>

                        </article>
                    </div>
                    <div>
                        <div>
                            <img src={school} alt=""/>
                        </div>
                        <article>
                            <h2>SCHOOL APP</h2>
                            <p>Web application to help teachers doing their work. Includes notepad, gallery, etc. App is still under development.</p>
                            <p>Stack: JS, PHP, MySQL</p>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}>LIVE</a>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}>GITHUB REPOSITORY</a>
                        </article>
                    </div>
                    <div>
                        <div>
                            <img src={tictactoe} alt=""/>
                        </div>
                        <article>
                            <h2>TIC-TAC-TOE GAME</h2>
                            <p>Windows application, includes option to play with other player or computer at easy/hard mode.</p>
                            <p>Stack: C#</p>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}>LIVE</a>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}>GITHUB REPOSITORY</a>
                        </article>
                    </div>
                    <div>
                        <div>
                            <img src={gallows} alt=""/>
                        </div>
                        <article>
                            <h2>GALLOWS</h2>
                            <p>Try to guess your opponents word playing gallows!</p>
                            <p>Stack: Angular, JQuery</p>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}>LIVE</a>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}>GITHUB REPOSITORY</a>
                        </article>
                    </div>
                    <div>
                        <div>
                            <img width='460' height='268' src={esp} alt=""/>
                        </div>
                        <article>
                            <h2>ESP8266 - HOBBY</h2>
                            <p>Control led lights wireless by click on website. Cool things :)</p>
                            <p>Stack: NodeJS, JQuery, Arduino C, websockets, RESTFul API, mongooDB</p>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}>LIVE</a>
                            <a href="#" className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}>GITHUB REPOSITORY</a>
                        </article>
                    </div>
                </div>
            </section>
        );
    }



}


export default Projects;
