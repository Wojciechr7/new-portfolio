import * as $ from 'jquery';

export class ProjectsAnimation {

    range;
    divide;
    contentSize;

    constructor(full, screen, projectsCount) {
        this.range = full - screen;
        this.divide = this.range / projectsCount;

        this.contentSize = $(window)[0].innerHeight;

    }

    animate(scrolled) {
        $(`#projects-container div div div img`).css('margin','auto auto auto 3%');
        for (let i = 4; i >= 0; i--) {
            if (i * 300 - (this.contentSize - 335) < scrolled) {
                $(`#projects-container div div:nth-child(${i+1}) div img`).css('margin','auto auto auto 10%');
                break;
            }
        }
    }


}