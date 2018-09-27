$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#examForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let studentId = $('#studentId').val();
        let songId = $('#songId').val();
        let date = $('#date').val();


        let exam = {
            student: {
                id: studentId
            },
            song: {
                id: songId
            },
            date: date
        };

        if(recordId) {
            $.ajax({
                url: serverUrl + 'exams/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(exam),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        $('#examForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'exams',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(exam),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        $('#examForm')[0].reset();
                    }
                }
            })
        }

    });
});