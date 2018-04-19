$(document).ready(function() {

    reloadMessages();



    $('.add-btn').click(function() {
        var data = {};
        data.name = $('.msg-name').val();
        data.email = $('.msg-email').val();
        data.text = $('.msg-text').val();

        $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            url: 'http://localhost:3001/messages',
            success: function(data) {
                reloadMessages();
            }
        });
    });
});




function reloadMessages() {
    var data = {};
    $.ajax({
        type: 'GET',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:3001/messages',
        success: function(data) {
            $('.single-msg').remove();
            for (var msg of data) {
                $('.messages-container table').append(
                    '<tr class="single-msg"><td>' + msg.name + '</td><td>' + msg.email + '</td><td>' + msg.text + '</td><td><button class="btn btn-danger" onclick="removeMsg(' + "'" + msg._id + "'" + ')">detele</button><button class="btn btn-primary" onclick="updateMsg(' + "'" + msg._id + "'" + ')">update</button></td></tr>'
                );
            }
        }
    });
}



function removeMsg(id) {
	var data = {};
    $.ajax({
        type: 'DELETE',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:3001/messages/' + id,
        success: function(data) {
            reloadMessages();
        }
    });
}



function updateMsg(id) {
	var data = {};
	data.name = prompt("name");
	data.email = prompt("email");
	data.text = prompt("text");
    $.ajax({
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: 'http://localhost:3001/messages/' + id,
        success: function(data) {
            reloadMessages();
        }
    });


}