// //--simple validation for button enable or disable--//
document.getElementById('password').addEventListener('keyup', function (event){
    if(event.target.value == 'admin'){
        document.getElementById('loginBtn').removeAttribute('disabled');
    }else{
        document.getElementById('loginBtn').setAttribute('disabled', true);
    }
});


function getValueFromField(fieldId){
    const findField = document.getElementById(fieldId);
    const fieldValue = findField.value;
    findField.value = '';
    return fieldValue;
}

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {
    const email = getValueFromField('email');
    const password = getValueFromField('password');
    if(email == 'admin@gmail.com'){
        window.location.href = 'users/index.html';
    }else{
        alert('Please enter your valid email address!!!!');
    }
});

