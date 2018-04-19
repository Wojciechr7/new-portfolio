import * as $ from 'jquery';
import axios from 'axios'

export class Form {

    alertClass;

    constructor() {
        this.disableSumbits();


        this.alertClass = $("#sender-name").parent().attr('class').split(' ')[3];
        $("#sender-name").parent().removeClass(this.alertClass);


        $('.input100').each(function(){
            $(this).focus(function(){
                hideValidate(this);
            });
        });

        let bindedAlert = this.alertClass;
        function hideValidate(input) {
            let thisAlert = $(input).parent();

            $(thisAlert).removeClass(bindedAlert);
        }


    }




    disableSumbits() {
        $('form').submit(function(event){event.preventDefault();});
    }

    send(msg) {
        let input = $('.input100');
        let check = true;
        for(let i=0; i<input.length; i++) {
            if(this.validate(input[i]) === false){
                this.showValidate(input[i]);
                check=false;
            }
        }

        if (check) {
            axios.post(`http://localhost:3001/messages`, msg)
            .then(res => {
                $('#form-button').text('Message sended');
                $('#form-button').css('background-color', 'green');
                $('#form-button').attr('disabled', true);
                $('textarea').val('');

                setTimeout(() => {
                    $('#form-button').text('Send');
                    $('#form-button').css('background-color', '#ff4b5a');
                    $('#form-button').attr('disabled', false);
                }, 3000)});
        }

    }


    validate(input) {
        if($(input).attr('type') === 'email' || $(input).attr('name') === 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) === null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() === ''){
                return false;
            }
        }
    }

    showValidate(input) {
        let thisAlert = $(input).parent();
        $(thisAlert).addClass(this.alertClass);
    }




}