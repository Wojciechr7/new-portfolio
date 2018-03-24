import * as $ from 'jquery';

export class Menu {

    visibility;

    constructor(vs) {
        this.visibility = vs;
    }

    toggleMenu(ac) {
        if (ac === 0) {
            $('#main-menu').hide();
            this.visibility = false;
        } else if (this.visibility === false) {
            this.visibility = true;
            $('#main-menu').animate({
                height: 'toggle'
            });
        }

    }


}