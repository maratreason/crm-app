import {AppComponent} from "@core/AppComponent";

export class Sidebar extends AppComponent {
    static className = "sidenav app-sidenav open";
    static tagName = "ul";
    static layout = "default";

    constructor($root) {
        super($root, {
            name: "Sidebar",
        });
    }

    toHTML() {
        return `
            <li>
                <a href="#home" class="waves-effect waves-orange pointer">
                    Счет
                </a>
            </li>
            <li>
                <a href="#history" 
                class="waves-effect waves-orange pointer">История</a>
            </li>
            <li>
                <a href="#planning" 
                class="waves-effect waves-orange pointer">Планирование</a>
            </li>
            <li>
                <a href="#record" 
                class="waves-effect waves-orange pointer">Новая запись</a>
            </li>
            <li>
                <a href="#categories" 
                class="waves-effect waves-orange pointer">Категории</a>
            </li>
        `;
    }
}
