import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import {Provider} from 'react-redux';

// Config
import {routes} from './config';
import store from "./store";
//import {loadUser} from "./flux/actions/authActions.ts";

const RouterComponent = () => {

    useEffect(async () => {
        //  await store.dispatch(loadUser());
        //store.dispatch(getMangas());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index} path={route.path}
                            exact={route.exact}
                            element={
                                <route.component title={route.name}/>
                            }
                        />
                    ))}
                </Routes>
            </Router>
        </Provider>
    )
};

export default RouterComponent;
