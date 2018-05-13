import React, {Component} from 'react';
import styles from './style.scss';
//import portfolio10 from '../../img/portfolio10.png';
import bs from 'bootstrap/scss/bootstrap.scss';
import { translate } from "react-i18next";


class AboutMe extends Component {



        /*constructor(props) {
            super(props);
        }*/

    render() {
        const { t } = this.props;
        return (
            <section className={styles.aboutMeContainer}>
                <header className={styles.title}><p>HELLO</p></header>
                <div className={styles.contentBox}>
                    {/*<a href="https://my-portfolio-cms.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img id="portfolio-img" className={styles.portfolioImage} src={portfolio10} alt=""/></a>*/}
                    <div className={[styles.content, bs["card"], bs["bg-light"]].join(' ')}>
                        <div className={bs["card-header"]}>{t("About me")}</div>
                        <div className={bs["card-body"]}>{t("About me hello")}
                            <b>Front-end developer</b>. {t("About me description")}
                        </div>
                    </div>
                </div>
            </section>
        );
    }


}


export default translate("translations")(AboutMe);
