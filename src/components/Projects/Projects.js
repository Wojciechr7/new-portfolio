import React, {Component} from 'react';
import styles from './style.scss';
import bs from 'bootstrap/scss/bootstrap.scss';
import bt from './button.css';
import {MyProjects} from '../../classes/MyProjects';


class Projects extends Component {
    /*    constructor() {
            super();
        }*/
    render() {
        return (
            <section id='projects-container' className={styles.projectsContainer}>
                <header className={styles.title}>PROJECTS</header>
                <div id='projects-content' className={styles.content}>
                    {MyProjects.getProjects().map(p =>
                        <div key={p.id.toString()}>
                            <div className={[bs["card"], bs["bg-light"]].join(' ')}>
                                <img src={p.img} alt=""/>
                            </div>
                            <article className={[bs["card"], bs["bg-dark"], bs["text-white"]].join(' ')}>
                                <h2 className={bs["card-header"]}>{p.name}</h2>
                                <p>{p.description}</p>
                                <p>Stack: {p.stack}</p>
                                <div className={styles.buttonsContainer}>
                                    <a href={p.liveUrl}
                                       className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}>LIVE</a>
                                    <a href={p.githubUrl}
                                       className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}>GITHUB
                                        REPOSITORY</a>
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
