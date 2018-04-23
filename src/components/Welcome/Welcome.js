import React, {Component} from 'react';
import styles from './style.scss';
import comp from './css/component.css';
import * as $ from 'jquery';

class Welcome extends Component {

    scroll;

    constructor(props) {
        super(props);
        this.scroll = props.scroll;

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
        this.scroll().actualComponent = 0;
        this.scroll().scrollDown();
    };

    componentDidMount() {
        $('body').append(`
                        <script src="js/TweenLite.min.js"></script>
                        <script src="js/EasePack.min.js"></script>
                        <script src="js/rAF.js"></script>
                        <script src="js/demo-1.js"></script>
                        `);
    }

}


export default Welcome;