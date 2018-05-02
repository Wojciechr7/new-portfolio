import React, {Component} from 'react';
import styles from './style.scss';
import comp from './css/component.css';
import {Particle} from "../../classes/Particle";


class Welcome extends Component {

    scroll;
    particles;

    constructor(props) {
        super(props);
        this.scroll = props.scroll;
        this.particles = new Particle();

    }

    render() {
        return (
            <section id='welcome'>
                <div className={styles.welcome}>
                    <div className={styles.welcomeMsg}>
                        <p></p>
                    </div>
                    <div onClick={this.handleScroll} className={styles.arrow}>></div>
                    <div id="large-header" className={comp["large-header"]}>
                        <canvas id="demo-canvas"></canvas>
                    </div>
                </div>
            </section>
        );
    }

    handleScroll = () => {
        this.scroll.actualComponent = 0;
        this.scroll.scrollDown();
    };

    componentDidMount() {
        this.particles.animate();
    }

}


export default Welcome;