import React, {Component} from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import {Scroll} from "./classes/Scroll";
import AboutMe from "./components/About-me/About-me";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";


class App extends Component {

    scroll;

    constructor(props) {
        super(props);
        this.scroll = new Scroll(0);


/*        setTimeout(() =>
        this.scroll.scrollDown());*/

    }

    render() {
        return (
            <div className="App">
                <Welcome scroll={this.scroll}/>
                <Menu/>
                <AboutMe/>
                <Technologies/>
                <Projects/>
            </div>
        );
    }
    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);
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
}

export default App;
