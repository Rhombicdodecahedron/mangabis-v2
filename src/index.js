import React from 'react';
import {createRoot} from 'react-dom/client';
// Router
import RouterComponent from './RouterComponent';
// Styles
import './styles/build.scss';
//import '@fortawesome/fontawesome-free'
//import 'semantic-ui-css/semantic.min.css'
//import 'bootstrap/dist/css/bootstrap.min.css';

/**
 *  Main entry point of the application
 */
createRoot(document.getElementById('root')).render(
    <RouterComponent/>
);
