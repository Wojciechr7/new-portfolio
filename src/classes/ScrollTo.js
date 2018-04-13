import * as $ from 'jquery';

export class ScrollTo {

    scrollInstance;

    constructor(s) {
        this.scrollInstance = s;
    }

    scroll(nr) {
        this.togglePortfolioImage(nr);

        $('html, body').stop().animate({
            scrollTop: nr * $('#welcome').innerHeight()
        }, 600, ()=> this.scrollInstance.actualComponent = nr);
    }

    togglePortfolioImage(nr) {
        if (nr === 2) {
            $('#portfolio-img').css('opacity','1');
        } else {
            $('#portfolio-img').css('opacity','0');
        }
    }


}