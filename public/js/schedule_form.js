$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#scheduleForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let teacherId = $('#teacherId').val();
        let studentId = $('#studentId').val();
        let date = $('#date').val();
        let timeFrom = $('#timeFrom').val();
        let timeTo = $('#timeTo').val();

        let schedule = {
            teacher: {
                id: teacherId
            },
            student: {
                id: studentId
            },
            date: date,
            timeFrom: timeFrom,
            timeTo: timeTo            
        };

        if(recordId) {
            $.ajax({
                url: serverUrl + 'schedule/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(schedule),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        $('#scheduleForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'schedule',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(schedule),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        $('#scheduleForm')[0].reset();
                    }
                }
            })
        }

    });
});