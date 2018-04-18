import React, { Component } from 'react';
import styles from './style.scss';


//TODO font 4-bit

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
                </div>
            </section>
        );
    }

    handleScroll = () => {
        this.scroll().actualComponent = 0;
        this.scroll().scrollDown();
    }

}


export default Welcome;
