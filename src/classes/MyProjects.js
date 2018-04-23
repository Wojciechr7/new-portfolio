import axios from 'axios';

export class MyProjects {


    getProjects(self) {

        axios.get(`https://my-portfolio-cms.herokuapp.com/projectss/`)
            .then(res => {
                res.data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
                self.setState({ data: res.data })
            });

        /*return [
            {
                id: 1,
                name: "CHECKERS GAME",
                img: checkers,
                description: "Multiplayer online checkers game with realtime chat.",
                stack: "Angular, Typescript, NodeJS, Firebase, websockets",
                githubUrl: "https://github.com/Wojciechr7/checkers-game",
                liveUrl: "https://ng-checkers-game.herokuapp.com/"
            },
            {
                id: 2,
                name: "SCHOOL APP",
                img: school,
                description: "Web application to help teachers doing their work. Includes notepad, gallery, etc. App is still under development.",
                stack: "JS, PHP, MySQL",
                githubUrl: "https://github.com/Wojciechr7/school-app",
                liveUrl: "http://school-app.rf.gd/"
            },
            {
                id: 3,
                name: "TIC-TAC-TOE GAME",
                img: tictactoe,
                description: "Windows application, includes option to play with other player or computer at easy/hard mode.",
                stack: "C#",
                githubUrl: "https://github.com/Wojciechr7/TicTacToe",
                liveUrl: "#"
            },
            {
                id: 4,
                name: "GALLOWS",
                img: gallows,
                description: "Try to guess your opponents word playing gallows!",
                stack: "Angular, JQuery",
                githubUrl: "#",
                liveUrl: "https://szubienica-2c5f2.firebaseapp.com/"
            },
            {
                id: 5,
                name: "ESP8266 - HOBBY",
                img: esp,
                description: "Control led lights wireless by click on website. Cool things :)",
                stack: "NodeJS, JQuery, Arduino C, websockets, RESTFul API, mongooDB",
                githubUrl: "https://github.com/Wojciechr7/ESP8266-RESTful-leds",
                liveUrl: "#"
            }
        ]*/
    }




}