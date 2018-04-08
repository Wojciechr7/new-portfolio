import * as $ from 'jquery';
import {Menu} from "./Menu";
import {ProjectsAnimation} from "./ProjectsAnimation";

export class Scroll {

    actualComponent;
    locked;
    menu;
    animations;
    t;
    projectsCount;

    constructor(ac) {
        this.actualComponent = ac;
        this.locked = false;
        this.menu = new Menu(false);
        this.t = $('#projects-container');
        this.projectsCount = this.t.children().find('div').length/2;

        setTimeout(()=> {
            this.animations = new ProjectsAnimation(this.t[0].scrollHeight, this.t[0].clientHeight, this.projectsCount)});
    }

    scrollDown() {
        let scroll = () => {
            if (!this.locked) {
                if (this.actualComponent < 4) {
                    ++this.actualComponent;
                }
                this.locked = true;
                $('html, body').stop().animate({
                    scrollTop: this.actualComponent * $('#welcome').innerHeight()
                }, 300, () => {
                    this.locked = false;
                    //$(t).scrollTop(0);
                    if (this.actualComponent === 2) {
                        $('#portfolio-img').css('opacity','1');
                    } else {
                        $('#portfolio-img').css('opacity','0');
                    }
                    this.menu.toggleMenu(this.actualComponent);

                });
            }
        };

        if (this.actualComponent === 1) {
            this.animations.animate(this.t.scrollTop());
            if (!this.locked && this.t[0].clientHeight + this.t.scrollTop() === this.t[0].scrollHeight) {
                scroll();
            }
        } else {
            scroll();
        }

    }

    scrollUp() {
        let scroll = () => {
            if (!this.locked) {
                if (this.actualComponent > 0) {
                    --this.actualComponent;
                }
                this.locked = true;
                this.menu.toggleMenu(this.actualComponent);
                $('html, body').stop().animate({
                    scrollTop: this.actualComponent * $('#welcome').innerHeight()
                }, 300, () => {
                    this.locked = false;
                    //$(t).scrollTop(0);
                    if (this.actualComponent === 2) {
                        $('#portfolio-img').css('opacity','1');
                    } else {
                        $('#portfolio-img').css('opacity','0');
                    }
                });
            }

        };
        if (this.actualComponent === 1 && this.t.scrollTop() === 0) {
            scroll();
        } else if (this.actualComponent !== 1) {
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