import {HomePage} from "@/pages/HomePage";
import {HistoryPage} from "@/pages/HistoryPage";
import {CategoriesPage} from "@/pages/CategoriesPage";
import {DetailRecordPage} from "@/pages/DetailRecordPage";
import {PlanningPage} from "@/pages/PlanningPage";
import {RecordPage} from "@/pages/RecordPage";
import {LoginPage} from "@/pages/LoginPage";
import {RegisterPage} from "@/pages/RegisterPage";

export const routes = [
    {
        name: "home",
        component: HomePage,
        layout: "default",
    },
    {
        name: "history",
        component: HistoryPage,
        layout: "default",
    },
    {
        name: "categories",
        component: CategoriesPage,
        layout: "default",
    },
    {
        name: "detail-record",
        component: DetailRecordPage,
        layout: "default",
    },
    {
        name: "planning",
        component: PlanningPage,
        layout: "default",
    },
    {
        name: "record",
        component: RecordPage,
        layout: "default",
    },
    {
        name: "login",
        component: LoginPage,
        layout: "empty",
    },
    {
        name: "register",
        component: RegisterPage,
        layout: "empty",
    },
];
