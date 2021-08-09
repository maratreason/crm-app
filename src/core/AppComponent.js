import {DomListener} from "@core/DOMListener";

export class AppComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || "";
    }

    /**
     * Возвращает шаблон компонента
     * @return {string} html-шаблон
     */
    toHTML() {
        return "";
    }

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeDOMListeners();
    }
}
