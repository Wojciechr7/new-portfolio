import React, { Component } from 'react';
import styles from './style.scss';
import checkers from '../../img/devices/checkers-device.png';
import school from '../../img/devices/school-device.png';
import tictactoe from '../../img/devices/tictactoe-device.png';
import gallows from '../../img/devices/gallows-device.png';




class Projects extends Component {
/*    constructor() {
        super();
    }*/
    render() {
        return (
            <section id='projects-container' className={styles.projectsContainer}>
                <header className={styles.title}>Projects</header>
                <div className={styles.content}>
                    <div>
                        <div>
                            <img src={checkers} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={school} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={tictactoe} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={gallows} alt=""/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={gallows} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }



}


export default Projects;
