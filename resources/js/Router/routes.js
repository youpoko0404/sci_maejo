const routes = [
    {
        path: "/",
        name: "app",
        component: () => import("../components/Index.vue"),
    },
];

export default routes;
