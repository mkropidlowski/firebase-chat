

// user status

auth.onAuthStateChanged(user =>{
    if(user){
        db.collection('post').onSnapshot(snapshot =>{
            getUserInfo(user);
            userData(snapshot.docs);
        })
        
        
    } else {
        console.log("tu będzie przekierowanie do strony logowania");
    }
})




// SIGN UP NEW USER


const singupForm = document.querySelector("#signup-form");

singupForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = singupForm['signup-email'].value;
    const password = singupForm['signup-password'].value;

    auth.createUserWithEmailAndPassword(email,password)
    .then(() =>{
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
        // db.collection('users').getUsers()
        singupForm.reset();
    });

});



// ADD MESSAGE 


const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();

    auth.signOut().then(() =>{
        console.log('Wylogowano.');
    }).catch(() =>{
        console.log("Err wylogowania.");
    })

});
