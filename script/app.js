
const inputMessage = document.querySelector('#inputMessage');
const colorContainer = document.querySelector('.colorContainer');




const colorArray = ['#50a903', '#0069D9', '#E0A801', '#128496','#C82332','#5A6268'];

colorArray.forEach(color => {

    const htmlColor = `
    <div class="colorCircle" style="background-color:${color}"><div>
    `;

colorContainer.innerHTML += htmlColor;

});

colorContainer.addEventListener('click', e => {
    
    if(e.target.classList.contains('colorCircle')){
        // e.target.classList.add('pickedColor');
        choosenColor = e.target.style.backgroundColor;
        localStorage.setItem('userPickedColor', choosenColor);
    } else {
        // e.target.classList.remove('pickedColor');
    }

    // if(e.target.classList.contains('pickedColor')) {
    //     e.target.classList.add('addBorder');
    // }
    

    
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

    inputMessage.reset();
});




