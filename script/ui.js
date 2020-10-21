
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


