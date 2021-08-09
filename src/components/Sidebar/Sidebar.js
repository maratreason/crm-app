import {AppComponent} from "@core/AppComponent";

export class Sidebar extends AppComponent {
    static className = "sidenav app-sidenav open";
    static tagName = "ul";

    constructor($root) {
        super($root, {
            name: "Sidebar",
            listeners: ["click"],
        });
    }

    onClick(event) {
        console.log("Sidebar onClick event", event);
    }

    toHTML() {
        return `
            <li>
                <a href="#" class="waves-effect waves-orange pointer">Счет</a>
            </li>
            <li>
                <a href="#" 
                class="waves-effect waves-orange pointer">История</a>
            </li>
            <li>
                <a href="#" 
                class="waves-effect waves-orange pointer">Планирование</a>
            </li>
            <li>
                <a href="#" 
                class="waves-effect waves-orange pointer">Новая запись</a>
            </li>
            <li>
                <a href="#" 
                class="waves-effect waves-orange pointer">Категории</a>
            </li>
        `;
    }
}
