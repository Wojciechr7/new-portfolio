import * as $ from 'jquery';
import axios from 'axios'

export class Form {

    constructor() {
        this.disableSumbits();
    }




    disableSumbits() {
        $('form').submit(function(event){event.preventDefault();});
    }

    send(msg) {

        axios.post(`http://localhost:3001/messages`, msg)
            .then(res => {
                $('#form-button').text('Message sended');
                $('#form-button').css('background-color', 'green');
                $('#form-button').attr('disabled', true);

                setTimeout(() => {
                    $('#form-button').text('Send');
                    $('#form-button').css('background-color', '#ff4b5a');
                    $('#form-button').attr('disabled', false);
                }, 3000)});

    }


}