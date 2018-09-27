$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    getSingers();
});

function getSingers() {
    $.ajax({
        url: serverUrl + 'singers',
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
                        <td>${ value.firstName }</td>
                        <td>${ value.lastName }</td>
                        <td>${ value.alias }</td>
                    </tr>
                    `
                );
            })
            $('#dataTable').dataTable();
        }
    })
}