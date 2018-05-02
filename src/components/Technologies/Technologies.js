import React, {Component} from 'react';
import styles from './style.scss';
import git from '../../img/git.png';
import lin from '../../img/Linux-icon.png';
import web from '../../img/ws.png';
import win from '../../img/win.png';
import bs from 'bootstrap/scss/bootstrap.scss';
import { translate } from "react-i18next";


class Technologies extends Component {
    /*    constructor() {
            super();
        }*/
    render() {
        const { t } = this.props;
        return (
            <section className={styles.technologiesContainer}>
                <header className={styles.title}>SKILLSET</header>
                <div className={[styles.techDesc, bs["card"], bs["bg-light"]].join(' ')}>
                    <div className={bs["card-header"]}>{t("Familiar technologies")}</div>
                    <div className={[bs["card-body"], styles.cardBody].join(' ')}>
                        <div id="skillset-images" className={styles.imagesInterior}>
                            <div className={styles.imageItem}>
                                <img src={lin} alt=""/>
                                <p>Linux</p>
                            </div>
                            <div className={styles.imageItem}>
                                <img src={win} alt=""/>
                                <p>Windows</p>
                            </div>
                            <div className={styles.imageItem}>
                                <img src={git} alt=""/>
                                <p>Github</p>
                            </div>
                            <div className={styles.imageItem}>
                                <img src={web} alt=""/>
                                <p>Webstorm</p>
                            </div>
                        </div>
                        <div className={styles.listInterior}>
                            <ul className={bs["list-group"]}>
                                <li className={bs["list-group-item"]}>HTML / CSS / SASS</li>
                                <li className={bs["list-group-item"]}>JS / ES6 / TypeScript</li>
                                <li className={bs["list-group-item"]}>Angular 2+</li>
                                <li className={bs["list-group-item"]}>Bootstrap</li>
                                <li className={bs["list-group-item"]}>JQuery</li>
                                <li className={bs["list-group-item"]}>NODE.JS / NPM</li>
                                <li className={bs["list-group-item"]}>OOP</li>
                                <li className={bs["list-group-item"]}>C#</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


}


export default translate("translations")(Technologies);
