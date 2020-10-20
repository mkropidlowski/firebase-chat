
class ChatUI {
    constructor(text) {
        this.text = text;
    }

    render(data){

        // const randomColorProfile = document.querySelectorAll('.randomColorProfile');
        // const randomColor = Math.floor(Math.random()*16777215).toString(16);
        // //     const random = circle.style.backgroundColor = "#" + randomColor;
        // console.log(localStorage.getItem('color'));

        // style="background-color:#${localStorage.getItem('color')};"


        const html = `
            <div class="userMessageBox">
            <div class="userProfile randomColorProfile" style="background-color:#${data.chatColor}">${((data.username).charAt(0)).toUpperCase()}</div><div class="msgCloud">${data.message}</div>
            </div>
            `;

        this.text.innerHTML += html;

    }
}


