class Dom {
    constructor(selector) {
        this.$el = typeof selector === "string"
            ? document.querySelector(selector)
            : selector;
    }

    html(html) {
        if (typeof html === "string") {
            this.$el.innerHTML = html;
            return this;
        }

        return this.$el.outerHTML.trim();
    }

    clear() {
        this.html("");
        return this;
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback);
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback);
    }

    addClass(className) {
        if (className.includes(" ")) {
            this.$el.className = className;
        } else {
            this.$el.classList.add(className);
        }
    }

    append(node) {
        if (node instanceof Dom) {
            node = node.$el;
        }
        if (Element.prototype.append) {
            this.$el.append(node);
        } else {
            this.$el.appendChild(node);
        }

        return this;
    }
}

export function $(selector) {
    return new Dom(selector);
};

$.create = (tagName = "div", classes = "") => {
    const el = document.createElement(tagName);
    if (classes) {
        if (classes.includes(" ")) {
            el.className = classes;
        } else {
            el.classList.add(classes);
        }
    }
    return $(el);
};
