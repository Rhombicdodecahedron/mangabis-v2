// Main
export const projectName = 'Scan-VF';
export const repoName = 'react-redux-app-template';
export const authorAccount = 'awibox';
export const apiUrl = "http://localhost:5001"
// API
export const gitHubApiUrl = 'https://api.github.com';

/**
 * @description - This is the list of routes that will be used in the application.
 * @type {{panel: string}}
 */
export const routes = {
    panel: '/panel'
};

/**
 * @description - This is the navigation items used in the application.
 * @type {[{route: string, name: string, icon: string},{route: string, name: string, icon: string}]}
 */
export const navigationItems = [
    {
        name: 'Login page',
        icon: 'login',
        route: '/',
    },
    {
        name: 'Panel',
        icon: 'panel',
        route: routes.panel,
    }
];
