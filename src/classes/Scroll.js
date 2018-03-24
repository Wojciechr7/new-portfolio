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

    scrollDown() {
        if (!this.locked) {
            if (this.actualComponent < 4) {
                ++this.actualComponent;
            }
            this.locked = true;
            $('html, body').stop().animate({
                scrollTop: this.actualComponent * $('#welcome').innerHeight()
            }, () => {
                this.locked = false;
                this.menu.toggleMenu(this.actualComponent);
            });
        }
    }

    scrollUp() {
        if (!this.locked) {
            if (this.actualComponent > 0) {
                --this.actualComponent;
            }
            this.locked = true;
            this.menu.toggleMenu(this.actualComponent);
            $('html, body').stop().animate({
                scrollTop: this.actualComponent * $('#welcome').innerHeight()
            }, () => {
                this.locked = false;
            });
        }
    }

}