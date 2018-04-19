import * as $ from 'jquery';

export class Form {

    constructor() {
        this.disableSumbits();
    }




    disableSumbits() {
        $('form').submit(function(event){event.preventDefault();});
    }

    send() {
        console.log('wyslano');
    }


}