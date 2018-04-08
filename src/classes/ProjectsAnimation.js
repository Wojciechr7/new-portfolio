import * as $ from 'jquery';

export class ProjectsAnimation {

    range;
    divide;
    contentSize;

    constructor(full, screen, projectsCount) {
        this.range = full - screen;
        this.divide = this.range / projectsCount;
        //console.log(this.divide);

        this.contentSize = $(window)[0].innerHeight;

    }

    animate(scrolled) {
        $(`#projects-container div div div img`).css('left','0');
        for (let i = 4; i >= 0; i--) {
            if (i * 300 - (this.contentSize - 335) < scrolled) {
                $(`#projects-container div div:nth-child(${i+1}) div img`).css('left','25px');
                break;
            }
        }

    }


}