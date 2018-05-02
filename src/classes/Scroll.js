import * as $ from 'jquery';
import {Menu} from "./Menu";
import {SkillsetAnimation} from "./SkillsetAnimation";

export class Scroll {

    actualComponent;
    locked;
    menu;
    t;
    toggle;
    skillAnimations;

    constructor(ac) {
        this.actualComponent = ac;
        this.locked = false;
        this.menu = new Menu(false);

        setTimeout(() => {
            this.skillAnimations = new SkillsetAnimation();
            this.t = $('#projects-content');
            this.toggle = $("#nav").attr('class').split(' ')[1];
        });


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
                    this.skillAnimations.toggle(this.actualComponent);

                    if (window.innerWidth > 768) {
                        this.menu.toggleMenu(this.actualComponent);
                    }
                });
            }
        };

        if (this.actualComponent === 3) {
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

                    this.togglePortfolioImage(this.actualComponent);
                    this.skillAnimations.toggle(this.actualComponent);
                });
            }
        };
        if (this.actualComponent === 3 && this.t.scrollTop() === 0) {
            scroll();
        } else if (this.actualComponent !== 3) {
            scroll();
        }


    }

    scrollOnce() {
        if (this.actualComponent < 4) {
            this.actualComponent = 1;
        }
        this.locked = true;
        $('html, body').stop().animate({
            scrollTop: this.actualComponent * $('#welcome').innerHeight()
        }, 300, () => {
            this.locked = false;
            this.menu.toggleMenu(this.actualComponent);
        });
    }

    togglePortfolioImage(nr) {
        if (nr === 1) {
            $('#portfolio-img').css('opacity', '1');
        } else {
            $('#portfolio-img').css('opacity', '0');
        }
    }

}