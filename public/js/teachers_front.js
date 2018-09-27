$(document).ready(function() {
    getTeachers();
});

function getTeachers() {
    $.ajax({
        url: serverUrl + 'teachers',
        method: 'GET',
        dataType: 'JSON',
        contentType: 'application/json',
        success: function(response) {
            $('#teachersList').empty();
            $.each(response, function(key, value) {
                $('#teachersList').append(
                    `
                    <div class="col-sm-4">
                        <div class="card mb-4">
                            <img class="card-img-top" src="${value.photo}">
                            <div class="card-header">
                                ${value.firstName} ${value.lastName}
                            </div>
                        </div>
                    </div>
                    `
                );
            }) 
        }
    })
}