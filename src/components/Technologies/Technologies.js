import React, {Component} from 'react';
import styles from './style.scss';
import git from '../../img/git.png';
import lin from '../../img/Linux-icon.png';
import web from '../../img/ws.png';
import win from '../../img/win.png';


class Technologies extends Component {
    /*    constructor() {
            super();
        }*/
    render() {
        return (
            <div className={styles.technologiesContainer}>
                <div className={styles.techImages}>
                    <div className={styles.techImagesRow}>
                        <div className={styles.imageItem}>
                            <img width="100px" height="100px" src={lin} alt=""/>
                            <p>Linux</p>
                        </div>
                        <div className={styles.imageItem}>
                            <img width="100px" height="100px" src={win} alt=""/>
                            <p>Windows</p>
                        </div>
                    </div>
                    <div className={styles.techImagesRow}>
                        <div className={styles.imageItem}>
                            <img width="100px" height="100px" src={git} alt=""/>
                            <p>Github</p>
                        </div>
                        <div className={styles.imageItem}>
                            <img width="100px" height="100px" src={web} alt=""/>
                            <p>Webstorm</p>
                        </div>
                    </div>
                </div>
                <div className={styles.techDesc}>
                    <ul>
                        <li>HTML / CSS / SASS</li>
                        <li>JS / ES6 / TypeScript</li>
                        <li>Angular 2+</li>
                        <li>Bootstrap</li>
                        <li>JQuery</li>
                        <li>NODE.JS / NPM</li>
                        <li>OOP</li>
                        <li>C#</li>
                    </ul>
                </div>
            </div>
        );
    }


}


export default Technologies;
