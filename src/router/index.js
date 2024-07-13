import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Preparation from "../views/Preparation.vue";
import QA from "../views/QA.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/preparation",
            component: Preparation,
            children: [
                {
                    path: "/animals",
                    component: QA
                },
                {
                    path: "/business",
                    component: QA,
                },
                {
                    path: "/history",
                    component: QA
                },
                {
                    path: "/kids",
                    component: QA
                },
                {
                    path: "/math",
                    component: QA
                },
                {
                    path: "/nature",
                    component: QA
                },
                {
                    path: "/politics",
                    component: QA
                },
                {
                    path: "/science",
                    component: QA
                },
                {
                    path: "/sports",
                    component: QA
                }
            ],
        },


        {
            path: "/test",
            component: Test
        }
    ]
})