
// const usernameEmail = document.querySelector('.usernameEmail');

const inputMessage = document.querySelector('#inputMessage');




class Chat {
    constructor(username, chatColor){
        this.chatColor = chatColor;
        this.username = username;
        this.chats = db.collection('post');
    }

    async addChat(message, chatColor){

     
        const date = new Date();

        const chatMessage = {
            message,
            chatColor,
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


    getUsername(username,chatColor){
        this.username = username;
        this.chatColor = chatColor;

        localStorage.setItem('username', username);
        localStorage.setItem('color', chatColor);
       
    }
    

}


    


inputMessage.addEventListener('submit', e => {
    e.preventDefault();

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  
    chat.addChat(inputMessage['addUserMessage'].value, randomColor)
        .then(() => console.log('chat added!'))
        .catch(err => console.log(err));

    inputMessage.reset();
});



// const circle = document.querySelector('.circle');

// randomUserColor() {

//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     const random = circle.style.backgroundColor = "#" + randomColor;

     
// }




