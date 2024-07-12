import {createRouter,createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import Preparation from "../views/Preparation.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/preparation",
            component: Preparation
        },
        {
            path: "/test",
            component: Test
        }
    ]
})