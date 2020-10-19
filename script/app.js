
// const usernameEmail = document.querySelector('.usernameEmail');

const inputMessage = document.querySelector('#inputMessage');




class Chat {
    constructor(username){
        this.username = username;
        this.chats = db.collection('post');
    }

    async addChat(message){

        const date = new Date();

        const chatMessage = {
            message,
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

    inputMessage.reset();
});



