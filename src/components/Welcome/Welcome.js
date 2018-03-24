import React, { Component } from 'react';
import styles from './style.scss';



class Welcome extends Component {

    scroll;

    constructor(props) {
        super(props);
        this.scroll = props.scroll;
    }
    render() {
        return (
            <div id='welcome'>
                <div className={styles.welcome}>
                    <div className={styles.welcomeMsg}>
                        <p></p>
                    </div>
                    <div onClick={this.handleScroll} className={styles.arrow}>></div>
                </div>
            </div>
        );
    }

    handleScroll = () => {
        this.scroll.scrollDown();
    }

}


export default Welcome;
