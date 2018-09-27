$(document).ready(function() {
    $.ajaxSetup({
        headers: {
            'Authorization' : 'Bearer ' + token
        }
    });
    $('#teacherForm').submit(function(e) {
        e.preventDefault();

        let recordId = $('#recordId').val();
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let age = $('#age').val();
        let phone = $('#phone').val();
        let email = $('#email').val();
        let education = $('#education').val();
        let experience = $('#experience').val();

        let teacher = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            phone: phone,
            email: email,
            education: education,
            experience: experience
        };

        if(recordId) {
            $.ajax({
                url: serverUrl + 'teachers/' + recordId,
                method: 'PUT',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(teacher),
                complete: function(data) {
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 200) {
                        if(document.getElementById("photo").files.length != 0){
                            uploadPhoto(recordId);
                        }
                        $('#teacherForm')[0].reset();
                    }
                }
            })
        } else {
            $.ajax({
                url: serverUrl + 'teachers',
                method: 'POST',
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(teacher),
                complete: function(data) {
                    console.log(data);
                    if(data.status == 500) {
                        console.log('Error has occured');
                    }
                    if(data.status == 201) {
                        if(document.getElementById("photo").files.length != 0){
                            uploadPhoto(data.responseJSON.id);
                        }
                        $('#teacherForm')[0].reset();    
                    }
                }
            })
        }

    });
});

function uploadPhoto(teacherId) {
    let photo = new FormData();
    photo.append('photo', $('#photo')[0].files[0]);

    $.ajax({
        url: serverUrl + 'teachers/photo/' + teacherId,
        method: 'POST',
        contentType: false,
        data: photo,
        processData: false
    })
}