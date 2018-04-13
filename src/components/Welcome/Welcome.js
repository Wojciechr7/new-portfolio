import React, { Component } from 'react';
import styles from './style.scss';



class Welcome extends Component {

    //scroll;
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
        this.scroll().scrollDown();
    }

}


export default Welcome;
