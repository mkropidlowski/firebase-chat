
const inputMessage = document.querySelector('#inputMessage');
const colorContainer = document.querySelector('.colorContainer');
const image = document.querySelector('#image');


function uploadImage() {

        const ref = firebase.storage().ref();
    
        const file = document.querySelector('#photo').files[0];
        const addTime = new Date();
        const name = file.name + '' + addTime;
        const metadata = {
            contentType:file.type
        }

        const task = ref.child(name).put(file, metadata);
          
    
        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            
            const imgUrl = {
                fullImgPath:url,
                created_at: firebase.firestore.Timestamp.fromDate(addTime)
            }

            db.collection('imgURL').add(imgUrl);

          }).catch(console.error);
            
 };
       




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
        .then(() => console.log())
        .catch(err => console.log(err));

    inputMessage.reset();
});


function uniqueId() {
    const firstItem = {
        value: "0"
    };
   
    let counter = "123456789".split('')
        .reduce((acc, curValue, curIndex, arr) => {
            const curObj = {};
            curObj.value = curValue;
            curObj.prev = acc;

            return curObj;
        }, firstItem);
    firstItem.prev = counter;

    return function () {
        let now = Date.now();
        if (typeof performance === "object" && typeof performance.now === "function") {
            now = performance.now().toString().replace('.', '');
        }
        counter = counter.prev;
        return `${now}${Math.random().toString(16).substr(2)}${counter.value}`;
    }
}

const randomIdGenerator = uniqueId();
const userID = randomIdGenerator();






