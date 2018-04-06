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

    scrollDown(t) {
        if (!this.locked && t.clientHeight + t.scrollTop === t.scrollHeight) {
            if (this.actualComponent < 4) {
                ++this.actualComponent;
            }
            this.locked = true;
            $('html, body').stop().animate({
                scrollTop: this.actualComponent * $('#welcome').innerHeight()
            }, 300, () => {
                this.menu.toggleMenu(this.actualComponent);
                this.locked = false;
                $(t).scrollTop(0);

            });
        }
    }

    scrollUp(t) {
        if (!this.locked && t.scrollTop === 0) {
            if (this.actualComponent > 0) {
                --this.actualComponent;
            }
            this.locked = true;
            this.menu.toggleMenu(this.actualComponent);
            $('html, body').stop().animate({
                scrollTop: this.actualComponent * $('#welcome').innerHeight()
            }, 300, () => {
                this.locked = false;
                $(t).scrollTop(0);
            });
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