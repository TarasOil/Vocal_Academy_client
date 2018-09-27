$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    getSongs();
});

function getSongs() {
    $.ajax({
        url: serverUrl + 'songs',
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
                        <td>${ value.name }</td>
                        <td>${ value.singer.firstName } ${ value.singer.lastName }</td>
                    </tr>
                    `
                );
            })
            $('#dataTable').dataTable();
        }
    })
}