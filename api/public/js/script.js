var url = "https://my-portfolio-cms.herokuapp.com";

$(document).ready(function () {

});

function addMsgBtn() {
    var data = {};
    data.date = new Date().toLocaleString('pl');
    data.name = $('.msg-name').val();
    data.email = $('.msg-email').val();
    data.text = $('.msg-text').val();

    $.ajax({
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url + '/messages/' + globalPas,
        success: function (data) {
            reloadMessages();
        }
    });
}


function addProjectBtn() {

    var form = $("#uploadForm");

    var formData = new FormData(form[0]);

    var data = {};
    data.id = $('.p-id').val();
    data.name = $('.p-name').val();
    data.img = $('.p-img').val();
    //data.img = window.location.href + "uploads/" + document.getElementById("file-input").files[0].name;
    data.description = $('.p-description').val();
    data.stack = $('.p-stack').val();
    data.githubUrl = $('.p-githubUrl').val();
    data.liveUrl = $('.p-liveUrl').val();


        $.ajax({
            type: "POST",
            url: url + '/projects/' + globalPas,
            data: JSON.stringify(data),
            contentType: 'application/json',
            error: function (data) {
                console.log("error");
            },
            success: function (data) {
                reloadProjects();
                /*$.ajax({
                    type: "POST",
                    url: $(form).prop("action"),
                    data: formData,
                    contentType: false,
                    processData: false,
                    error: function (data) {
                    },
                    success: function (data) {
                    }
                });*/
            }
        });




}


function reloadMessages() {
    var data = {};
    $.ajax({
        type: 'GET',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url + '/messages/' + globalPas,
        success: function (data) {
            $('.content table').remove();
            $('.content').append(
                '<table class="table table-striped table-bordered table-hover"><thead><th>date</th><th>name</th><th>email</th><th>text</th><th>actions</th></thead></table>');

            for (var msg of data) {
                $('.content table').append(
                    '<tr class="single-msg"><td>' + msg.date + '</td><td>' + msg.name + '</td><td>' + msg.email + '</td><td>' + msg.text + '</td><td><button class="btn btn-danger" onclick="removeMsg(' + "'" + msg._id + "'" + ')">detele</button><button class="btn btn-primary" onclick="updateMsg(' + "'" + msg._id + "'" + ',this)">update</button></td></tr>'
                );
            }
        }
    });
}

function reloadProjects() {
    var data = {};
    $.ajax({
        type: 'GET',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url + '/projects/' + globalPas,
        success: function (data) {
            $('.content table').remove();
            $('.content').append(
                '<table class="table table-striped table-bordered table-hover"><thead><th>id</th><th>name</th><th>image</th><th>description</th><th>stack</th><th>github url</th><th>live url</th><th>actions</th></thead></table>');
            data.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
            for (var p of data) {
                $('.content table').append(
                    `<tr class="single-project">
                        <td>${p.id}</td>
                        <td>${p.name}</td>
                        <td>${p.img}</td>
                        <td>${p.description}</td>
                        <td>${p.stack}</td>
                        <td>${p.githubUrl}</td>
                        <td>${p.liveUrl}</td>
                        <td>
                            <button class="btn btn-danger" onclick="removeProject('${p._id}')">delete</button>
                            <button class="btn btn-primary" onclick="updateProject('${p._id}', this)">update</button>
                        </td>
                    </tr>`
                );

            }
        }
    });
}

function removeProject(id) {
    var data = {};
    $.ajax({
        type: 'DELETE',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url + '/projects/' + globalPas + "&" + id,
        success: function (data) {
            reloadProjects();
        }
    });
}

function updateProject(id, el) {
    var sibl = $(el).parent().siblings();
    var data = {};
    data.id = prompt("id", sibl[0].outerText);
    data.name = prompt("name", sibl[1].outerText);
    data.img = prompt("img", sibl[2].outerText);
    data.description = prompt("description", sibl[3].outerText);
    data.stack = prompt("stack", sibl[4].outerText);
    data.githubUrl = prompt("git url", sibl[5].outerText);
    data.liveUrl = prompt("live url", sibl[6].outerText);

    $.ajax({
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url + '/projects/' + globalPas + '&' + id,
        success: function (data) {
            reloadProjects();
        }
    });

}


function removeMsg(id) {
    var data = {};
    $.ajax({
        type: 'DELETE',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url + '/messages/' + globalPas + '&' + id,
        success: function (data) {
            reloadMessages();
        }
    });
}


function updateMsg(id, el) {
    var sibl = $(el).parent().siblings();
    var data = {};
    data.date = new Date().toLocaleString('pl');
    data.name = prompt("name", sibl[1].outerText);
    data.email = prompt("email", sibl[2].outerText);
    data.text = prompt("text", sibl[3].outerText);
    $.ajax({
        type: 'PUT',
        data: JSON.stringify(data),
        contentType: 'application/json',
        url: url + '/messages/' + globalPas + "&" + id,
        success: function (data) {
            reloadMessages();
        }
    });

}

function switchInputs(v) {
    $('.messages-inputs').remove();
    $('.projects-inputs').remove();

    if (v === "messages") {
        $('.add-content').append(`<div class="messages-inputs">
        <input name="name" class="msg-name" placeholder="name">
        <input name="email" class="msg-email" placeholder="email">
        <textarea name="text" class="msg-text" placeholder="text"></textarea>
        <button onclick="addMsgBtn()" class="add-message btn btn-warning">add new</button>
        <button onclick="clearInputs()" class="btn btn-success">clear</button>
    </div>`);
    } else {
        $('.add-content').append(`<div class="projects-inputs">
        <input name="id" class="p-id" placeholder="id">
        <input name="name" class="p-name" placeholder="name">
        
        
        <!--<form id="uploadForm" enctype="multipart/form-data" action="/projects/img" method="post">
            <input id="file-input" type="file" name="project-image" />
        </form>-->
        
        <input name="img" class="p-img" placeholder="img">
        <textarea name="description" class="p-description" placeholder="description"></textarea>
        <textarea name="stack" class="p-stack" placeholder="stack"></textarea>
        <input name="githubUrl" class="p-githubUrl" placeholder="githubUrl">
        <input name="liveUrl" class="p-liveUrl" placeholder="liveUrl">
        <button onclick="addProjectBtn()" class="add-project btn btn-warning">add new</button>
        <button onclick="clearInputs()" class="btn btn-success">clear</button>
    </div>`);
    }

}

function clearInputs() {
    $('input').val("");
    $('textarea').val("");
}

function changeTable(value) {
    switchInputs(value);

    if (value === "messages") {
        reloadMessages();
    } else {
        reloadProjects();
    }


}