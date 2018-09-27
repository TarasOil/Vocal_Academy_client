$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#singerForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let alias = $('#alias').val();

        let singer = {
            firstName: firstName,
            lastName: lastName,
            alias: alias
        };

        if(recordId){
            $.ajax({
                url: serverUrl + 'singers/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(singer),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        $('#singerForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'singers',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(singer),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        $('#singerForm')[0].reset();
                    }
                }
            })
        }

    });
});