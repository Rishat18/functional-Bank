document.getElementById('login-submit').addEventListener('click', function(){
   // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value ;
    // password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'abdullahrishat008@gmail.com' && userPassword == "Ris81817@$"){
        window.location.href = 'banking.html' ;
    }
    else {
        console.log('In Valid user')
    }

})

