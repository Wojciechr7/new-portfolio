import * as $ from 'jquery';
import {Menu} from "./Menu";

export class Scroll {

    actualComponent;
    locked;
    menu;

    constructor(ac) {
        this.actualComponent = ac;
        this.locked = false;
        this.menu = new Menu(false);
    }

    scrollDown(e) {
        let t = $('#projects-container');
        /*        console.log($('#projects-container'));
                console.log(t[0].clientHeight, t.scrollTop(), t[0].scrollHeight);*/

        let scroll = () => {
            if (!this.locked) {
                if (this.actualComponent < 4) {
                    ++this.actualComponent;
                }
                console.log(this.actualComponent);
                this.locked = true;
                $('html, body').stop().animate({
                    scrollTop: this.actualComponent * $('#welcome').innerHeight()
                }, 300, () => {
                    this.menu.toggleMenu(this.actualComponent);
                    this.locked = false;
                    //$(t).scrollTop(0);

                });
            }
        };

        if ($(e.target).parents().is('#projects-container')) {
            if (!this.locked && t[0].clientHeight + t.scrollTop() === t[0].scrollHeight) {
                scroll();
            }
        } else {
            scroll();
        }

    }

    scrollUp(e) {
        let t = $('#projects-container');
        let scroll = () => {
            if (!this.locked) {
                if (this.actualComponent > 0) {
                    --this.actualComponent;
                }
                console.log(this.actualComponent);
                this.locked = true;
                this.menu.toggleMenu(this.actualComponent);
                $('html, body').stop().animate({
                    scrollTop: this.actualComponent * $('#welcome').innerHeight()
                }, 300, () => {
                    this.locked = false;
                    //$(t).scrollTop(0);
                });
            }

        };
        if ($(e.target).parents().is('#projects-container') && t.scrollTop() === 0) {
            scroll();
        } else if (!$(e.target).parents().is('#projects-container')) {
            scroll();
        }


    }

    scrollOnce() {
        if (this.actualComponent < 4) {
            ++this.actualComponent;
        }
        this.locked = true;
        $('html, body').stop().animate({
            scrollTop: this.actualComponent * $('#welcome').innerHeight()
        }, 300, () => {
            this.locked = false;
            this.menu.toggleMenu(this.actualComponent);
        });
    }

}