
const inputMessage = document.querySelector('#inputMessage');
const colorContainer = document.querySelector('.colorContainer');
const image = document.querySelector('#image');


// function uploadImage() {

//     const ref = firebase.storage().ref();

//     const file = document.querySelector('#photo').files[0];

//     const name = file.name;
//     const metadata = {
//         contentType:file.type
//     }


//     const task = ref.child(name).put(file, metadata);

//     task
//     .then(snapshot => {
//         // snapshot.ref.getDownloadURL();
//         image.src = snapshot.name;
//         console.log(snapshot.metadata);
//         console.log(snapshot.metadata.name);
//     })
//     // .then(url =>{
//     //     console.log(url);
//     // })

// }









const colorArray = ['#50a903', '#0069D9', '#E0A801', '#128496','#C82332','#5A6268'];

colorArray.forEach(color => {

    const htmlColor = `
    <div class="colorCircle" style="background-color:${color}"><div>
    `;

colorContainer.innerHTML += htmlColor;

});

colorContainer.addEventListener('click', e => {
    
    if(e.target.classList.contains('colorCircle')){
        
        choosenColor = e.target.style.backgroundColor;
        localStorage.setItem('userPickedColor', choosenColor);
    } else {
     
    }



    
});




class Chat {
    constructor(username){
        this.username = username;
        this.chats = db.collection('post');
    }

    async addChat(message){

        const getColor = localStorage.getItem('userPickedColor');
        const date = new Date();

        const chatMessage = {
            message,
            color: getColor,
            username: this.username,    
            created_at: firebase.firestore.Timestamp.fromDate(date)
        };

        const response =  await this.chats.add(chatMessage);
        
        return response;

    }

    getMessage(callback){
        this.chats
        .orderBy('created_at')
        .onSnapshot(snapshot =>{
            snapshot.docChanges().forEach(change =>{
                if(change.type === 'added'){
                    callback(change.doc.data());
                }
            })
        })
    }

    getUsername(username){
        this.username = username;
    
        localStorage.setItem('username', username);    
    }
   
}



inputMessage.addEventListener('submit', e => {
    e.preventDefault();

    chat.addChat(inputMessage['addUserMessage'].value)
        .then(() => console.log('chat added!'))
        .catch(err => console.log(err));

    const audio = new Audio('img/messSound.mp3');
    audio.play();


    inputMessage.reset();
});




