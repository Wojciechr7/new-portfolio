import React, { Component } from 'react';
import styles from './style.scss';
import * as $ from 'jquery';
import {ScrollTo} from "../../classes/ScrollTo";
import {Scroll} from "../../classes/Scroll";
//import {Scroll} from "../../classes/Scroll";




class Menu extends Component {

    scrollTo;
    scroll;
    toggleClassName;

    /*constructor(props) {
        super(props);
    }*/
    render() {
        return (
            <div id='main-menu' className={styles.menu}>
                <div id='nav' className={[styles.wrapCircles, styles.closed, styles.nav].join(' ')}>
                    <div className={[styles.circle, styles.c1].join(' ')}><span><div className={styles.link} onClick={this.handleScrollTo.bind(this, 1)}>a</div></span></div>
                    <div className={[styles.circle, styles.c2].join(' ')}><span><div className={styles.link} onClick={this.handleScrollTo.bind(this, 2)}>a</div></span></div>
                    <div className={[styles.circle, styles.c3].join(' ')}><span><div className={styles.link} onClick={this.handleScrollTo.bind(this, 3)}>a</div></span></div>
                    <div className={[styles.circle, styles.c4].join(' ')}><span><div className={styles.link} onClick={this.handleScrollTo.bind(this, 4)}>a</div></span></div>
                    <div id='click' className={[styles.circle, styles.c5, styles.click].join(' ')}><span><div className={styles.link}></div></span></div>
                </div>
            </div>

        );
    }
    componentDidMount() {
        this.toggleClassName = $("#nav").attr('class').split(' ')[1];
        this.scroll = new Scroll(0, this.toggleClassName);
        this.handleScrollTo = new ScrollTo(this.scroll);



        $("#click").click(()=>{
            this.toggleMenu();
        });
    };


    toggleMenu() {
        $("#nav").toggleClass(this.toggleClassName);
    }
    hideMenu = () => {
        $("#nav").addClass(this.toggleClassName);
    };

    handleScrollTo(nr) {
        this.handleScrollTo.scroll(nr);
        this.hideMenu();
    }





}


export default Menu;
