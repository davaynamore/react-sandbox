import React from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Competitions from '../../pages/competitions';
import Winners from '../../pages/winners';
import About from '../../pages/about';
import ErrorPage from '../../pages/errorPage';


const Navigation = (): JSX.Element => (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Competitions
                    </Link>
                </li>
                <li>
                    <Link to="/winners/">
                        Winners
                    </Link>
                </li>
                <li>
                    <Link to="/about/">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
        <Switch>
            <Route
                exact
                path="/"
            >
                <Competitions />
            </Route>
            <Route path="/winners/">
                <Winners />
            </Route>
            <Route path="/about/">
                <About />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    </div>
);

export default Navigation;