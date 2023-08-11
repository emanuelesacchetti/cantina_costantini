import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue';
import ProductList from './pages/ProductList.vue';
import SingleProduct from './pages/SingleProduct.vue';
import TastingList from './pages/TastingList.vue';
import ExperienceList from './pages/ExperienceList.vue';
import ContactUs from './pages/ContactUs.vue';
import EventList from './pages/EventList.vue';

const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/products',
                name: 'products',
                component: ProductList
            },
            {
                path: '/products/:slug',
                name: 'single-product',
                component: SingleProduct
            },
            {
                path: '/tastings',
                name: 'tastings',
                component: TastingList
            },
            {
                path: '/experiences',
                name: 'experiences',
                component: ExperienceList
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: ContactUs
            },
            {
                path: '/events',
                name: 'events',
                component: EventList
            }
        ]
    }
);

router.afterEach(() => {
    window.scrollTo(0, 0);
  });

export { router };