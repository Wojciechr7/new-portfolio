import React, {Component} from 'react';
import styles from './style.scss';
import * as $ from 'jquery';
import {ScrollTo} from "../../classes/ScrollTo";


class Menu extends Component {

    scrollTo;
    scroll;
    toggleClassName;

    constructor(props) {
        super(props);

        this.scrollTo = new ScrollTo(this.props.scroll.scrollObject);
    }

    render() {
        return (
            <div id='main-menu' className={styles.menu}>
                <div>
                    <div id='nav' className={[styles.wrapCircles, styles.closed, styles.nav].join(' ')}>
                        <div className={[styles.circle, styles.c1].join(' ')}><span><div className={styles.link}
                                                                                         onClick={(e) => this.handleScrollTo(1, e)}>a</div></span>
                        </div>
                        <div className={[styles.circle, styles.c2].join(' ')}><span><div className={styles.link}
                                                                                         onClick={(e) => this.handleScrollTo(2, e)}>a</div></span>
                        </div>
                        <div className={[styles.circle, styles.c3].join(' ')}><span><div className={styles.link}
                                                                                         onClick={(e) => this.handleScrollTo(3, e)}>a</div></span>
                        </div>
                        <div className={[styles.circle, styles.c4].join(' ')}><span><div className={styles.link}
                                                                                         onClick={(e) => this.handleScrollTo(4, e)}>a</div></span>
                        </div>
                        <div id='click' className={[styles.circle, styles.c5, styles.click].join(' ')}><span><div
                            className={styles.link}></div></span></div>
                    </div>
                </div>
            </div>

        );
    }

    componentDidMount() {

        this.toggleClassName = $("#nav").attr('class').split(' ')[1];

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

    handleScrollTo = nr => {
        this.scrollTo.scroll(nr);
        this.hideMenu();
    }


}


export default Menu;
