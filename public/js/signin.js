$(document).ready(function(e) {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#signinForm').submit(function(e) {
        e.preventDefault();
        signin();
    })
});

function signin() {

    let loginData = {
        username: $('#username').val(),
        password: $('#password').val()
    };

    $.ajax({
        url: serverUrl + 'auth/signin',
        method: 'POST',
        data: JSON.stringify(loginData),
        contentType: 'application/json',
        complete: function(data) {
            if(data.status == 200) {
                window.localStorage.setItem('auth_token', data.responseJSON.token);
                window.localStorage.setItem('auth_role', data.responseJSON.role);
                console.log(data.responseJSON);
                if(data.responseJSON.role == 'ROLE_ADMIN') {
                    $(location).attr('href', 'dashboard/dashboard.html');
                }
                if(data.responseJSON.role == 'ROLE_TEACHER') {
                    $(location).attr('href', 'public/html/schedule.html');
                }
            }
        }
    })
}