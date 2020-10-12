

// SIGN UP NEW USER


const singupForm = document.querySelector("#signup-form");

singupForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = singupForm['signup-email'].value;
    const password = singupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email,password)
    .then(() =>{
        console.log('Zalogowane!');
        singupForm.reset();
    });

});


// LOGIN USER 



const loginForm = document.querySelector("#login-form");

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email,password)
    .then(() =>{
        db.collection('users').getUsers()
        singupForm.reset();
    });

});

