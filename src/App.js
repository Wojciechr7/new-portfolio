import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import AboutMe from "./components/About-me/About-me";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import styles from './style.scss';
import {Scroll} from "./classes/Scroll";
import { translate } from "react-i18next";
//import bs from 'bootstrap/scss/bootstrap.scss';


class App extends Component {

    scroll;

    constructor(props) {
        super(props);

        this.scroll = new Scroll(0);

        this.state = {
            scrollObject: this.scroll
        }

    }

    render() {

        const { i18n } = this.props;

        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };


        return (
            <div className="App">
                <Welcome scroll={this.state.scrollObject}/>
                <AboutMe/>
                <div className={styles.languageButtons}>
                    <div className="container">
                        <form onChange={(e) => changeLanguage(e.target.value)} className={[styles["switch"], styles["switch--vertical"]].join(' ')}>
                            <input value="en" id="radio-c" type="radio" name="second-switch" defaultChecked/>
                            <label htmlFor="radio-c">EN</label>
                            <input value="pl" id="radio-d" type="radio" name="second-switch"/>
                            <label htmlFor="radio-d">PL</label><span className={styles["toggle-outside"]}><span className={styles["toggle-inside"]}></span></span>
                        </form>
                    </div>
                </div>
                <Technologies/>
                <Projects/>
                <Contact/>
                <Menu scroll={this.state}/>
                <aside className={styles.background}></aside>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
        window.addEventListener('keydown', this.handleKey);

        setTimeout(() =>
            this.scroll.scrollOnce());
    };

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
        window.removeEventListener('keydown', this.handleKey);
    };



    handleScroll = event => {
        if (event.deltaY > 0) {
            this.scroll.scrollDown();
        } else {
            this.scroll.scrollUp();
        }
    };


    handleKey = event => {
        if (event.keyCode === 40) {
            this.scroll.scrollDown();
        } else if (event.keyCode === 38) {
            this.scroll.scrollUp();
        }
    };

    changeLanguage = lng => {
        this.i18n.changeLanguage(lng);
    };

}



export default translate("translations")(App);

