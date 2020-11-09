
const imgFromFirebase = document.querySelector('.imgFromFirebase');


class ChatUI {
    constructor(text) {
        this.text = text;
    }

    
   render(data) {

       if(data.message) {
            const html = `
                            
            <div class="userMessageBox">
                <div class="userProfile randomColorProfile" style="background-color:${data.color}">
                ${((data.username).charAt(0)).toUpperCase()}</div>
                <div class="msgCloud"  style="background-color:${data.color}">${data.message}</div>
                </div>
            </div>
            `;

        this.text.innerHTML += html;

       } else {
            const html = `
                                
            <div class="userMessageBox">
                <div class="userProfile randomColorProfile" style="background-color:${data.color}">
                    ${((data.username).charAt(0)).toUpperCase()}</div>
                    <div class="msgCloud"  style="background-color:${data.color}">
                    <img src="${data.fullImgPath}" width="200px" height="300px"></img>
                    </div>
                </div>
            </div>
            `;

        this.text.innerHTML += html;

       }
            
    }

}
