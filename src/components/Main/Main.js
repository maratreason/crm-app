export class Main {
    constructor(selector, options) {
        this.$el = document.querySelector(selector);
        this.components = options.components || [];
    }
}