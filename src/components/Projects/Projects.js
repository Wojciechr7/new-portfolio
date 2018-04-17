import React, { Component } from 'react';
import styles from './style.scss';
import bs from 'bootstrap/scss/bootstrap.scss';
import bt from './button.css';
import { MyProjects } from '../../classes/MyProjects';


class Projects extends Component {
/*    constructor() {
        super();
    }*/
    render() {
        return (
            <section id='projects-container' className={styles.projectsContainer}>
                <header className={styles.title}>PROJECTS</header>
                <div className={styles.content}>
                    { MyProjects.getProjects().map(p =>
                        <div key={p.id.toString()}>
                            <div>
                                <img src={p.img} alt=""/>
                            </div>
                            <article>
                                <h2>{p.name}</h2>
                                <p>{p.description}</p>
                                <p>Stack: {p.stack}</p>
                                <div className={styles.buttonsContainer}>
                                    <a href={p.liveUrl} className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}>LIVE</a>
                                    <a href={p.githubUrl} className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}>GITHUB REPOSITORY</a>
                                </div>

                            </article>
                        </div>
                    )}
                </div>
            </section>
        );
    }



}


export default Projects;
