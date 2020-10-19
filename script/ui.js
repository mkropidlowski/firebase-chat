
class ChatUI {
    constructor(text) {
        this.text = text;
    }

    render(data){
        const html = `
            <p>${data.username}: ${data.message}</p>
        `;

        this.text.innerHTML += html;

    }
}