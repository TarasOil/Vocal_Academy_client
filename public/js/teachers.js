$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    getTeachers();
});

function getTeachers() {
    $.ajax({
        url: serverUrl + 'teachers',
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
                        <td><img src="${ value.photo }" width="200px"></td>
                        <td>${ value.firstName }</td>
                        <td>${ value.lastName }</td>
                        <td>${ value.age }</td>
                        <td>${ value.phone }</td>
                        <td>${ value.email }</td>
                        <td>${ value.education }</td>
                        <td>${ value.experience }</td>
                    </tr>
                    `
                );
            })
            $('#dataTable').dataTable();
        }
    })
}