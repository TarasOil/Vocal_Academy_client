$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#competitionForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let name = $('#name').val();
        let studentId = $('#studentId').val();
        let songId = $('#songId').val();
        let date = $('#date').val();
        let city = $('#city').val();

        let competition = {
           name: name,
           student: {
               id: studentId
           },
           song: {
               id: songId
           },
           date: date,
           city: city
        };

        if(recordId) {
            $.ajax({
                url: serverUrl + 'competitions/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(competition),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        $('#competitionForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'competitions',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(competition),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        $('#competitionForm')[0].reset();
                    }
                }
            })
        }

    });
});