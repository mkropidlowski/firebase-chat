
const imgFromFirebase = document.querySelector('.imgFromFirebase');

function getImages() {
    db.collection('imgURL')
    .orderBy('created_at')
    .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => { 
             if(change.type === 'added'){
                const viewImg = change.doc.data();
                
                const imageTemplate = `
                <img src="${viewImg.fullImgPath}" width="200px" height="300px">
                `;
                imgFromFirebase.innerHTML += imageTemplate;
                // console.log(viewImg.fullImgPath);
               
             }
            
        });
    });
    
}


getImages();


class ChatUI {
    constructor(text) {
        this.text = text;
    }

    render(data){
       
        const html = `
      
            <div class="userMessageBox">
            <div class="userProfile randomColorProfile" style="background-color:${data.color}">
            ${((data.username).charAt(0)).toUpperCase()}</div>
            <div class="msgCloud"  style="background-color:${data.color}">${data.message}</div>
            
            </div>
          
            `;

        this.text.innerHTML += html;

    }
}


