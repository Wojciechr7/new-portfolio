import React, { Component } from 'react';
import styles from './style.scss';
import * as $ from 'jquery';
//import {Scroll} from "../../classes/Scroll";




class Menu extends Component {
/*    constructor(props) {
        super(props);
    }*/
    render() {
        return (
            <div id='main-menu' className={styles.menu}>
                <div id='nav' className={[styles.wrapCircles, styles.closed, styles.nav].join(' ')}>
                    <div className={[styles.circle, styles.c1].join(' ')}><span><a className={styles.link} href="https://codepen.io/Chrisstar">a</a></span></div>
                    <div className={[styles.circle, styles.c2].join(' ')}><span><a className={styles.link} href="https://codepen.io/Chrisstar">a</a></span></div>
                    <div className={[styles.circle, styles.c3].join(' ')}><span><a className={styles.link} href="https://codepen.io/Chrisstar">a</a></span></div>
                    <div className={[styles.circle, styles.c4].join(' ')}><span><a className={styles.link} href="https://www.twitter.com/DaChrisstar">a</a></span></div>
                    <div id='click' className={[styles.circle, styles.c5, styles.click].join(' ')}><span><a className={styles.link}></a></span></div>
                </div>
                <div className={styles.elemencik}>siema<i className={styles.podElemencik}></i></div>
            </div>

        );
    }
    componentDidMount() {
        let className = $("#nav").attr('class').match(/style__closed___.{5}/gi);
        $("#click").click(function(){
            $("#nav").toggleClass(className);

        });
    };




}


export default Menu;
