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
    toggle;

    constructor(ac,tgl) {
        this.toggle = tgl;
        this.actualComponent = ac;
        this.locked = false;
        this.menu = new Menu(false);
        this.t = $('#projects-container');
        this.projectsCount = this.t.children().find('div').length/2;

        setTimeout(()=> {
            this.animations = new ProjectsAnimation(this.t[0].scrollHeight, this.t[0].clientHeight, this.projectsCount)});

        this.togglePortfolioImage(this.actualComponent);
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
                    this.togglePortfolioImage(this.actualComponent);

                    this.menu.toggleMenu(this.actualComponent);

                });
            }
        };

        if (this.actualComponent === 3) {
            this.animations.animate(this.t.scrollTop());
            if (!this.locked && this.t[0].clientHeight + this.t.scrollTop() === this.t[0].scrollHeight) {
                scroll();
                this.hideMenu();
            }
        } else {
            scroll();
            this.hideMenu();
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

                    this.togglePortfolioImage(this.actualComponent);
                });
            }
        };
        if (this.actualComponent === 3 && this.t.scrollTop() === 0) {
            scroll();
            this.hideMenu();
        } else if (this.actualComponent !== 3) {
            scroll();
            this.hideMenu();
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

    hideMenu() {
        $("#nav").addClass(this.toggle);
    };

    togglePortfolioImage(nr) {
        if (nr === 1) {
            $('#portfolio-img').css('opacity','1');
        } else {
            $('#portfolio-img').css('opacity','0');
        }
    }

}