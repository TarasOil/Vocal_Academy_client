$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#studentForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let age = $('#age').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let teacherId = $('#teacherId').val();

        let student = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            phone: phone,
            email: email,
            teacher: {
                id: teacherId
            }
        };

        if(recordId) {
            $.ajax({
                url: serverUrl + 'students/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(student),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        $('#studentForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'students',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(student),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        $('#studentForm')[0].reset();
                    }
                }
            })
        }

    });
});