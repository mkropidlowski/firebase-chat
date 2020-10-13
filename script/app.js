
const dataContainer = document.querySelector('.dataContainer');
const userMessage = document.querySelector('.userMessage');

const getUserInfo = (user) => {
    if(user){
             const html = `
            <h2 class="userEmail">${user.email}</h2>
            `;
            dataContainer.innerHTML = html;
                
    } else {
        console.log('err');
    };

    actuallUserId(user);
   
};

const actuallUserId = (user) =>{


    const inputMessage = document.querySelector('#inputMessage');

        inputMessage.addEventListener('submit', e => {
            e.preventDefault();

            db.collection('post').add({
                text: inputMessage['addUserMessage'].value,
                userId: user.uid
            }).then(() =>{
                inputMessage.reset();
            }).catch(err => {
                console.log(err.message);
            });
        
        });

  };



const userData = (data => {

    if(data.length){
        data.forEach(doc =>{
            const post = doc.data();
           
            const messageHtml = `
            <p>${post.text}</p>
            `

            userMessage.innerHTML += messageHtml;


        });
    }
})


