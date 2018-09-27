$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    getSchedule();
});

function getSchedule() {
    $.ajax({
        url: serverUrl + 'schedule',
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
                        <td>${ value.teacher.firstName } ${ value.teacher.lastName }</td>
                        <td>${ value.student.firstName } ${ value.student.lastName }</td>
                        <td>${ value.date }</td>
                        <td>${ value.timeFrom }</td>
                        <td>${ value.timeTo }</td>
                    </tr>
                    `
                );
            })
            $('#dataTable').dataTable();
        }
    })
}