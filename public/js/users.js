$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    getUsers();
});

function getUsers() {
    $.ajax({
        url: serverUrl + 'users',
        method: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            console.log(response);
            $.each(response, function(key, value) {
                $('#dataTable tbody').append(
                    `
                    <tr>
                        <td>${ value.id }</td>
                        <td>${ value.username }</td>
                        <td>${ value.firstName }</td>
                        <td>${ value.lastName }</td>
                        <td>${ value.role }</td>
                    </tr>
                    `
                );
            })
            $('#dataTable').dataTable();
        }
    })
}