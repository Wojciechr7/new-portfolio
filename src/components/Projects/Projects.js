import React, { Component } from 'react';
import styles from './style.scss';



class Projects extends Component {
/*    constructor() {
        super();
    }*/
    render() {
        return (
            <section id='projects-container' className={styles.projectsContainer}>
                <header className={styles.title}>Projects</header>
                <div className={styles.content}></div>
            </section>
        );
    }



}


export default Projects;
