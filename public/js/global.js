let serverUrl = 'https://damp-everglades-66477.herokuapp.com/';

let token = window.localStorage.getItem('auth_token');
let role = window.localStorage.getItem('auth_role');

$(document).ready(function() {
    $('#signOutButton').on('click', function() {
        window.localStorage.removeItem('auth_token');
        window.localStorage.removeItem('auth_role');

        $(location).attr('href', '../../index.html');
    });
});