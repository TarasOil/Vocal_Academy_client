$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    getStudents();
});

function getStudents() {
    $.ajax({
        url: serverUrl + 'students',
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
                        <td>${ value.age }</td>
                        <td>${ value.phone }</td>
                        <td>${ value.email }</td>
                        <td>${ value.teacher.firstName } ${ value.teacher.lastName }</td>
                    </tr>
                    `
                );
            })
            $('#dataTable').dataTable();
        }
    })
}