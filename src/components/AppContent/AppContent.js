import {AppComponent} from "../../core/AppComponent";

export class AppContent extends AppComponent {
    static className = "app-content";
    static tagName = "main";

    constructor($root) {
        super($root, {
            name: "AppContent",
        });
    }

    toHTML() {
        return "<h1>App Content Component</h1>";
    }
}
