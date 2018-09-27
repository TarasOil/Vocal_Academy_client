$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#userForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let username = $('#username').val();
        let password = $('#password').val();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();

        let user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName
        };

        if(recordId) {
            $.ajax({
                url: serverUrl + 'users/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(user),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        $('#userForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'auth/signup',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(user),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        $('#userForm')[0].reset();
                    }
                }
            })
        }

    });
});