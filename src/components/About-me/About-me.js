import React, { Component } from 'react';
import styles from './style.scss';
import portfolio10 from '../../img/portfolio10.png';



class AboutMe extends Component {


/*    constructor() {
        super();
    }*/
    render() {
        return (
            <section className={styles.aboutMeContainer}>
                <div className={styles.contentBox}>
                    <img id="portfolio-img" className={styles.portfolioImage} src={portfolio10} alt=""/>
                    <div className={styles.content}>
                        Hello, my name is Robert, <b>front-end developer</b>. I'm studying informatics at University of Warmia and Mazury in Olsztyn. I'm generally interested in programming and everything similar like microcontrolers.
                    </div>
                </div>

            </section>
        );
    }


}


export default AboutMe;
