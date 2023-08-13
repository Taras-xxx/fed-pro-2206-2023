 window.onload = function(){
            let nickNameInput = document.querySelector('#userNickName');
            let userEmail = document.querySelector('#userEmail');
            let userPhone = document.querySelector('#userPhone');
            let submitBtn = document.querySelector('#submitBtn');

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

        }