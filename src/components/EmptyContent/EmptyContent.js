import {AppComponent} from "../../core/AppComponent";

export class EmptyContent extends AppComponent {
    static className = "";
    static tagName = "div";

    constructor($root) {
        super($root, {
            name: "EmptyContent",
        });
    }

    toHTML() {
        return `
            <div>
                <div class="grey darken-1 empty-layout">
                    <form class="card auth-card"></form>
                </div>
            </div>
        `;
    }
}
