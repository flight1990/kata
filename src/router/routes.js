export const routes = [
    {
        path: '/',
        name: 'products',
        component: () => import("@/pages/Products.vue"),
        meta: {
            title: 'Products',
            showInNavigation: true
        }
    },
    {
        path: '/:slug',
        name: 'product_show',
        component: () => import("@/pages/ProductShow.vue"),
        props: true,
        meta: {
            showInNavigation: false
        }
    }
];