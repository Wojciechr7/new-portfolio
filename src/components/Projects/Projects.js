import React, {Component} from 'react';
import styles from './style.scss';
import loading from './loading.scss';
import bs from 'bootstrap/scss/bootstrap.scss';
import bt from './button.css';
import {MyProjects} from '../../classes/MyProjects';


class Projects extends Component {

    myProjects;
    projects;

    constructor() {
        super();
        this.myProjects = new MyProjects();

    }

    render() {
        return (
            <section id='projects-container' className={styles.projectsContainer}>
                <header className={styles.title}><p>PROJECTS</p></header>
                <div id='projects-content' className={styles.content}>
                    {this.state && this.state.data ? this.state.data.map(p =>
                            <div key={p.id.toString()} className={styles.block}>
                                <div className={[bs["card"], bs["bg-light"], styles.card].join(' ')}>
                                    <img src={p.img} alt=""/>
                                </div>
                                <article className={[bs["card"], bs["bg-dark"], bs["text-white"]].join(' ')}>
                                    <h2 className={bs["card-header"]}>{p.name}</h2>
                                    <p>{p.description}</p>
                                    <p>Stack: {p.stack}</p>
                                    <div className={styles.buttonsContainer}>
                                        <a {...(p.liveUrl !== "#" ? {href: p.liveUrl} : {})}
                                           className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaOne].join(' ')}
                                           target="_blank">LIVE</a>


                                        <a {...(p.githubUrl !== "#" ? {href: p.githubUrl} : {})}
                                           className={[bs["btn"], bs["btn-sm"], bt.animatedButton, bt.victoriaTwo].join(' ')}
                                           target="_blank">GITHUB REPOSITORY</a>
                                    </div>
                                </article>
                            </div>
                        ) :
                        <aside>
                            <div className={loading["loading-container"]}>
                                <div className={loading["e-loadholder"]}>
                                    <div className={loading["m-loader"]}>
                                        <span className={loading["e-text"]}>Loading</span>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    }


                </div>

            </section>
        );
    }

    componentDidMount() {
        this.myProjects.getProjects(this);
    }


}


export default Projects;
