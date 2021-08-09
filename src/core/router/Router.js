import {$} from "@core/Dom";
import {ActiveRoute} from "@core/router/ActiveRoute";

export class Router {
    static layout = "default";

    constructor(selector, routes = []) {
        if (!selector) {
            throw new Error(`Selector is not provided in Router`);
        }

        this.$placeholder = $(selector);
        this.routes = routes;
        this.page = null;
        this.changePageHandler = this.changePageHandler.bind(this);

        this.init();
    }

    init() {
        window.addEventListener("hashchange", this.changePageHandler);
        this.changePageHandler();
    }

    changePageHandler(event) {
        if (this.page) {
            this.page.destroy();
        }
        this.$placeholder.clear();

        let Page;
        const index = this.routes.findIndex(r => r.name === ActiveRoute.path);

        if (this.routes[index] !== undefined) {
            if (ActiveRoute.path.includes(this.routes[index].name)) {
                Page = this.routes[index].component;
                Router.layout = this.routes[index].component.layout;
            }
        } else {
            Page = this.routes[0].component;
            Router.layout = this.routes[0].component.layout;
        }

        this.page = new Page(ActiveRoute.param);
        this.$placeholder.append(this.page.getRoot());
    }

    destroy() {
        window.removeEventListener("hashchange", this.changePageHandler);
    }
}
