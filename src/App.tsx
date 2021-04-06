import React, { FunctionComponent } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import loadable from '@loadable/component';
import SideMenu from "@shared/SideMenu";
import SideInfo from "@shared/SideInfo";

export default function App() {

    const themeFromParams = (q =>
        q.get('theme') || '3'
    )(new URLSearchParams(window.location.search));

    return (
        <div className={`AppContainer theme${themeFromParams}`}>
            <Router>
                <SideMenu />
                <div className="App border-sides">
                    <Switch>
                        <Route path="/vote/:voteName" component={loadable(() => import('./components/Routes/Vote_v1'))} />
                        <Route path="/groupBy/:groupByType/:groupByName" component={loadable(() => import('./components/Routes/Vote_v1'))} />
                        <Route path="/register" component={loadable(() => import('./components/Routes/CreateProfile'))} />
                        <Route path="/create-vote" component={loadable(() => import('./components/Routes/CreateVote'))} />
                        <Route path="/create-sub-vote/:voteName" component={loadable(() => import('./components/Routes/CreateVote'))} />
                        <Route path="/profile" component={loadable(() => import('./components/Routes/Profile'))} />
                        <Route path="/feed" component={loadable(() => import('./components/Routes/Feed'))} />
                        <Route path="/home" component={loadable(() => import('./components/Routes/Feed'))} />
                        <Redirect from="/" to="/vote/equal rights" />
                    </Switch>
                </div>
                <SideInfo />
            </Router>
        </div>
    );
}
