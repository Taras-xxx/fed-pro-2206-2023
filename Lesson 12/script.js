    window.onload = function(){
    let nickNameInput = document.querySelector('#userNickName');
    let userEmail = document.querySelector('#userEmail');
    let userPhone = document.querySelector('#userPhone');
    let submitBtn = document.querySelector('#submitBtn');
    let form = document.querySelector('form');


    let nickNameRegex = /^[a-zA-Z]{2,}$/;
    let emailRegex = /^[a-z0-9._]+@[a-z0-9._]+\.[a-z]{2,4}$/i;
    let phoneNumberRegex = /^\+380\d{9}$/;

    function validateForm (){
        let nickName = nickNameInput.value;
        let email = userEmail.value;
        let phoneNumber = userPhone.value;

        let isNickNameValid = nickNameRegex.test(nickName);
        let isEmailValid = emailRegex.test(email);
        let isPhoneNumberValid = phoneNumberRegex.test(phoneNumber);

        submitBtn.disabled = !(isEmailValid && isNickNameValid && isPhoneNumberValid);
    }

    nickNameInput.addEventListener('input', validateForm);
    userEmail.addEventListener('input', validateForm);
    userPhone.addEventListener('input', validateForm);

    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
        if (!submitBtn.classList.contains('disabled')) {
            const formData = {
                nickName: nickNameInput.value,
                email: userEmail.value,
                phoneNumber: userPhone.value
            };   
            saveLocalStorage(formData);
            form.reset();
        }
    });

    window.addEventListener('beforeunload', function() {
        form.reset();
    });
  
    function saveLocalStorage(data) {
        let dataArray = JSON.parse(localStorage.getItem('formData')) || [];
        dataArray.push(data);
        localStorage.setItem('formData', JSON.stringify(dataArray));
        
    };

    let infoBtn = document.getElementById('infoBtn');
    infoBtn.onclick = function() {
        let dataInfoArray = JSON.parse(localStorage.getItem('formData')) || [];
        for (let data of dataInfoArray) {
            console.log(data);
        }
    }
}