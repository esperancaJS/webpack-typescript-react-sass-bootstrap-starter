import React, { FunctionComponent, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useLocation
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
                <ScrollToTop />
                <SideMenu />
                <div className="App border-sides">
                    <Switch>
                        <Route path="/vote/:voteName" component={loadable(() => import('./components/routes/Vote'))} />
                        <Route path="/group/:groupType/:groupFilter" component={loadable(() => import('./components/routes/Group'))} />
                        <Route path="/register" component={loadable(() => import('./components/Routes/CreateProfile'))} />
                        <Route path="/create-vote" component={loadable(() => import('./components/Routes/CreateVote'))} />
                        <Route path="/create-sub-vote/:voteName" component={loadable(() => import('./components/Routes/CreateVote'))} />
                        <Route path="/profile" component={loadable(() => import('./components/Routes/Profile'))} />
                        <Route path="/trending" component={loadable(() => import('./components/Routes/Trending'))} />
                        <Route path="/feed" component={loadable(() => import('./components/Routes/Feed'))} />
                        <Route path="/home" component={loadable(() => import('./components/Routes/Home'))} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </div>
                <SideInfo />
            </Router>
        </div>
    );
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
