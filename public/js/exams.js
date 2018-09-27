$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    getExams();
});

function getExams() {
    $.ajax({
        url: serverUrl + 'exams',
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
                        <td>${ value.student.firstName } ${ value.student.lastName }</td>
                        <td>${ value.song.name }</td>
                        <td>${ value.date }</td>
                    </tr>
                    `
                );
            })
            $('#dataTable').dataTable();
        }
    })
}