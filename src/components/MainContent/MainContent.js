import {AppComponent} from "../../core/AppComponent";

export class MainContent extends AppComponent {
    static className = "app-content";
    static tagName = "main";

    constructor($root) {
        super($root, {
            name: "AppContent",
        });
    }

    toHTML() {
        return "";
    }
}
