
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault(); 
});
        
        var firstName = document.getElementById("firstName");
        var lastName = document.getElementById("lastName");
        var birthDate = document.getElementById("birthDate");
        var email = document.getElementById("email");
        var confirmEmail = document.getElementById("confirmEmail");
        var password = document.getElementById("password");
        var confirmPassword = document.getElementById("confirmPassword");
        var phone = document.getElementById("phone");

        var nameRegex = /^[A-Za-z]{3,30}$/;
        var birthDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d{2}$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var passwordRegex = /^(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,32}$/;
        var phoneRegex = /^\d{10}$/;


        function validatInputs(){
            if (nameRegex.test(firstName.value) && nameRegex.test(lastName.value) && birthDateRegex.test(birthDate.value)&& emailRegex.test(email.value) && phoneRegex.test(phone.value)){
            return true;
            }
            else
            return false;
        }



        function checkName(element) {

        let error = document.getElementById("fName-error");
        let error2 = document.getElementById("lName-error");

        var NameValue = element.value;
        
        error.innerHTML = " ";
        error2.innerHTML = " ";

        if(!nameRegex.test(NameValue)){
            switch(element.id)
            {
                case "firstName" : {
                    error.innerHTML = "Name should be at least 3 characters and should not has a special characters or numbers"
                    break;
                }

                case "lastName" : {
                    error2.innerHTML = "Name should be at least 6 characters and should not has a special characters or numbers"
                    break;
                }
            }
        }
       
        }

        function emailConfirmation(){
            let email = document.getElementById('email').value;
            let confError = document.getElementById('email-conf-error');
            let email2 = confirmEmail.value;
            confError.innerHTML = "";
            if (email !== email2) {
                confError.innerHTML = "Emails are not matched";
            }
        }

        function passConfirmation(){
            let pass = document.getElementById('password').value;
            let passError = document.getElementById('pass-conf-error');
            let pass2 = confirmPassword.value;
            passError.innerHTML = "";
            if (pass !== pass2) {
                passError.innerHTML = "Passwords are not matched";
            }
        }


        function check(element){

            let DBError = document.getElementById("BD-error");
            let emailError = document.getElementById("email-error");
            let passError = document.getElementById("pass-error");
            let numError = document.getElementById("num-error");

            var elementValue = element.value;

            DBError.innerHTML = " ";
            emailError.innerHTML = " ";
            passError.innerHTML = " ";
            numError.innerHTML = " ";

            switch(element.id)
            {
                case "birthDate" : {
                    if(!birthDateRegex.test(elementValue)){
                    DBError.innerHTML = "Please enter a valid date";
                    }
                    break;
                }

                case "email" : {
                    if(!emailRegex.test(elementValue)){
                    emailError.innerHTML = "Please enter a valid email";
                    }
                    break;
                }

                case "password" : {
                    if(!passwordRegex.test(elementValue)){
                    passError.innerHTML = "Please enter a valid Password, starts with a capital letter, contains at least two numbers and has one special character.";
                    }
                    break;
                }

                case "phone" : {
                    if(!phoneRegex.test(elementValue)){
                    numError.innerHTML = "Phone number should consist of 10 digits";
                    }
                    break;
                }   
            }
        }

      let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            if (!Array.isArray(existingUsers)) { // Check if it's an array
                existingUsers = []; // Initialize as an empty array if not
            }
       function storeData()
       {
         if(validatInputs()){
            // Get existing users from local storage or initialize an empty array
           
            const user = {
                FirstName :firstName.value,
                LastName :lastName.value,
                Password :password.value,
                Email :email.value,
                PhoneNumber :phone.value,       
            }

            existingUsers.push(user);
            localStorage.setItem('users', JSON.stringify(existingUsers));

            window.location.href = "login.html";
            }
             else {
                console.log("error");
             }
        }

        let lEmail = document.getElementById("loginEmail");
        let lPass = document.getElementById("loginPassword");
        function login(){
          
            for (let key in existingUsers){
                if(lEmail.value === existingUsers[key].Email && lPass.value === existingUsers[key].Password){
                  console.log(existingUsers[key].Email);
                  console.log(existingUsers[key].Password);
                  window.location.href="welcome.html"
                }
              
                else{
                    let errorMsg = document.getElementById("login-error");
                    errorMsg.innerHTML = "Incorrect Password/Email"
                }
                
            }


        }
