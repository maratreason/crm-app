import {$} from "@core/Dom";

export class Main {
    constructor(selector, options) {
        this.$el = $(selector);
        this.components = options.components || [];
    }

    getRoot() {
        const $root = $.create("div", "app-main-layout");
        this.components = this.components.map((Component) => {
            const $el = $.create(Component.tagName, Component.className);
            const component = new Component($el);
            $el.html(component.toHTML());
            $root.append($el);

            return component;
        });

        return $root;
    }

    init() {
        this.components.forEach((component) => component.init());
    }

    render() {
        this.$el.append(this.getRoot());

        // Вызываем init только после append $root
        this.components.forEach((component) => component.init());
    }
}
