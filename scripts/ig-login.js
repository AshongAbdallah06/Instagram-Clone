function title() {
    document.title = 'Login'
    setInterval(() => {
        if (document.title === 'Login') {
            document.title = 'Instagram'
        } else {
            document.title = 'Login'
        }
    }, 3000)

}
title(); 


let email = document.getElementById("email");
let password = document.getElementById("password");

let emailErrorMessage = document.querySelector('.email-error');
let passwordErrorMessage = document.querySelector('.password-error');


function login() {
    
    if (email.value === '' && email.value === '') {
        emailErrorMessage.innerHTML = 'Please fill out this field';
        passwordErrorMessage.innerHTML = 'Please fill out this field';

        passwordErrorMessage.classList.add('Password-Error');
        emailErrorMessage.classList.add('Email-Error');
    
    } else if 
    (email.value === 'ashongabdalla15@gmail.com' /*|| email.value === '0555359339' || email.value === 'zelda006' */&& password.value === '123Password45.?') {
        let button = document.querySelector('.button');
    
    
        emailErrorMessage.innerHTML = '';
        passwordErrorMessage.innerHTML = '';
    
        button.innerHTML = `Loading... Please wait`;
    
        setTimeout(() => {
            button.innerHTML = `
            <a href="./Home.html">
                <button class="login-button"> Log in </button>
            </a>`
        }, 2000);
    
    
    } else if (email.value !== 'ashongabdalla15@gmail.com' && password.value === '123Password45.?') {
        emailErrorMessage.innerHTML = 'Invalid email address';
        passwordErrorMessage.innerHTML = '';

        emailErrorMessage.classList.add('Email-Error');
    
    } else if (password.value !== '123Password45.?' && email.value === 'ashongabdalla15@gmail.com') {
        emailErrorMessage.innerHTML = '';
        passwordErrorMessage.innerHTML = 'Invalid password';

        passwordErrorMessage.classList.add('Password-Error');
    
    } else {
        passwordErrorMessage.innerHTML = 'Invalid Password';
        emailErrorMessage.innerHTML = 'Invalid email address';
    
        passwordErrorMessage.classList.add('Password-Error');
        emailErrorMessage.classList.add('Email-Error');
    }
}

let loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', () => {
    login();
})

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        login();
    }
})
