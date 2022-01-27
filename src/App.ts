import './app.scss';

export class App {

    constructor () {
        document.body.innerHTML = `
            <div class="keyup">
                <b>KEYUP (e.key - e.code)</b>
            </div>
            <div class="keydown">
                <b>KEYDOWN (e.key - e.code)</b>
            </div>
        `;

        window.onkeyup = (e) => {
            console.log(e.type, e);
            this.addLog(e);
        };
        window.onkeydown = (e) => {
            console.log(e.type, e);
            this.addLog(e);
        };
    }

    private addLog (e: KeyboardEvent) {
        const target = document.querySelector(`div.${e.type}`);

        target.insertAdjacentHTML('beforeend', `
            <div class="key">${e.key} - ${e.code}</div>
        `);

        target.scrollTop = target.scrollHeight;
    }
}