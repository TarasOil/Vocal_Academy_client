$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#songForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let name = $('#name').val();
        let singerId = $('#singerId').val();

        let song = {
            name: name,
            singer: {
                id: singerId
            }
        };

        if(recordId) {
            $.ajax({
                url: serverUrl + 'songs/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(song),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        $('#songForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'songs',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(song),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        $('#songForm')[0].reset();
                    }
                }
            })
        }

    });
});