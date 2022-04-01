// Main
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

// Constants
export const API_URL = "http://localhost:5002"

/**
 * @description - This is the list of routes that will be used in the application.
 * @type {Object}
 * @property {string} name - The name of the route.
 * @property {string} path - The path of the route.
 * @property {React.Component} component - The component that will be rendered.
 * @property {boolean} exact - If the route is exact or not.
 */
export const routes = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        name: 'Home',
        path: '/index',
        exact: true,
        component: Home
    },
    {
        name: 'Panel',
        path: '/panel',
        exact: true,
        component: NotFound
    },
    {
        name: 'Page 404',
        path: '*',
        exact: false,
        component: NotFound
    }
];