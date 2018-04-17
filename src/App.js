import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import AboutMe from "./components/About-me/About-me";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
//import * as $ from 'jquery';


class App extends Component {

    scroll;

    /*constructor(props) {
        super(props);

    }*/

    render() {
        return (
            <div className="App">
                <Welcome scroll={this.getScroll}/>
                <Menu ref={scr => { this.scr = scr }}/>
                <AboutMe/>
                <Technologies/>
                <Projects/>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
        this.scroll = this.scr.scroll;

        /*setTimeout(() =>
            this.scroll.scrollOnce());*/
    };

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    };


    handleScroll = event => {
        if (event.deltaY > 0) {
            this.scroll.scrollDown();
        } else {
            this.scroll.scrollUp();
        }
    };

    getScroll = () => {
        return this.scroll;
    };

}

export default App;
