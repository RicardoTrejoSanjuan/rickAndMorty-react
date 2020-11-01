import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Layout from './components/LayoutComponent';
import AboutScreen from './pages/AboutScreen';
import HomeScreen from './pages/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Layout />
                <Switch>
                    <Route exact path="/about" component={AboutScreen} ></Route>
                    <Route exact path="/" component={HomeScreen} ></Route>
                </Switch>
            </div>
        </Router>
    )
}
