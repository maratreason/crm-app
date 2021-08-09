import {Main} from "@/components/Main/Main";
import {AppContent} from "@/components/AppContent/AppContent";
import {Navbar} from "@/components/Navbar/Navbar";
import {Sidebar} from "@/components/Sidebar/Sidebar";
import "./scss/index.scss";

const main = new Main("#app", {
    components: [Navbar, Sidebar, AppContent],
});

main.render();
