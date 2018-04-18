import React, {Component} from 'react';
import styles from './style.scss';
import portfolio10 from '../../img/portfolio10.png';
import bs from 'bootstrap/scss/bootstrap.scss';


class AboutMe extends Component {


    /*    constructor() {
            super();
        }*/
    render() {
        return (
            <section className={styles.aboutMeContainer}>
                <header className={[styles.title, bs["d-block"], bs["d-md-none"]].join(' ')}>HELLO</header>
                <div className={styles.contentBox}>
                    <img id="portfolio-img" className={styles.portfolioImage} src={portfolio10} alt=""/>
                    <div className={[styles.content, bs["card"], bs["bg-light"]].join(' ')}>
                        <div className={bs["card-header"]}>About me</div>
                        <div className={bs["card-body"]}>
                            Hello, my name is Robert, <b>front-end developer</b>. I'm studying informatics at University
                            of Warmia and Mazury in Olsztyn. I'm generally interested in programming and everything
                            similar like microcontrolers.
                        </div>
                    </div>
                </div>

            </section>
        );
    }


}


export default AboutMe;
