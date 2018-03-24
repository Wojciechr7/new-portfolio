import React, { Component } from 'react';
import styles from './style.scss';



class Menu extends Component {
/*    constructor(props) {
        super(props);
    }*/
    render() {
        return (
            <div id="main-menu" className={styles.menu}>
                <nav>
                    <ul>
                        <li>
                            <a href="http://google.com/">About me</a>
                        </li>
                        <li>
                            <a href="http://google.com/">Technologies</a>
                        </li>
                        <li>
                            <a href="http://google.com/">Projects</a>
                        </li>
                        <li>
                            <a href="http://google.com/">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }



}


export default Menu;
