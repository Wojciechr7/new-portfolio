import * as $ from 'jquery';

export class SkillsetAnimation {


    toggle(nr) {

        let index = 0;
        if (nr === 2) {
            for (let item of $('#skillset-images').children()) {
                setTimeout(() => {
                    $(item).css('opacity', '1');
                }, index++ * 100);
            }
        } else {
            for (let item of $('#skillset-images').children()) {
                $(item).css('opacity', '0');
            }
        }
    }


}