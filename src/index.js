import {Main} from "@/components/Main/Main";
import {MainContent} from "@/components/MainContent/MainContent";
import {EmptyContent} from "@/components/EmptyContent/EmptyContent";
import {Navbar} from "@/components/Navbar/Navbar";
import {Sidebar} from "@/components/Sidebar/Sidebar";
import {Router} from "@core/router/Router";
import {routes} from "@core/router/routes";
import {ActiveRoute} from "@core/router/ActiveRoute";
import "./scss/index.scss";

let components = [];
let routerClass = "";

if (ActiveRoute.path === "login" || ActiveRoute.path === "register") {
    components = [EmptyContent];
    routerClass = ".card.auth-card";
} else {
    components = [Navbar, Sidebar, MainContent];
    routerClass = ".app-content";
}

const main = new Main("#app", {components}, "empty");
main.render();
new Router(routerClass, routes);
