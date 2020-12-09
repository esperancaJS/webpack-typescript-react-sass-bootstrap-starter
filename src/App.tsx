import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import loadable from '@loadable/component';

import twitterIcon from '@assets/twitter.svg';

export default function App() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p>Webpack + TypeScript + React + SASS + Bootstrap = ❤️</p>

                    <hr />

                    <Router>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/Page1">Page1 - Env</Link>
                                </li>
                                <li>
                                    <Link to="/Page2">Page2 - Counter</Link>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/Page1" component={loadable(() => import('./components/Routes/Page1'))} />
                            <Route path="/Page2" component={loadable(() => import('./components/Routes/Page2'))} />
                        </Switch>
                    </Router>

                    <hr />

                    <a className="twitter-btn btn btn-sm" href="https://twitter.com/intent/tweet?text=@esperancaJs+halp">
                        <img className="img-fluid" src={twitterIcon} />
                        Any questions?
                    </a>
                </div>
            </div>
        </div>
    );
}
