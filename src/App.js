import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import Language from './components/Language/Language';
import AboutMe from "./components/About-me/About-me";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Contact from "./components/Contact/Contact";
import styles from './style.scss';
import {Scroll} from "./classes/Scroll";

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




        return (
            <div className="App">
                <Welcome scroll={this.state.scrollObject}/>
                <AboutMe/>
                <Technologies/>
                <Projects/>
                <Contact/>
                <Language/>
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



export default App;

