import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';
import loadable from '@loadable/component';

const Page1 = loadable(() => import('./components/Routes/Page1'));
const Page2 = loadable(() => import('./components/Routes/Page2'));

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
									<Link to="/Page1">Page1</Link>
								</li>
								<li>
									<Link to="/Page2">Page2</Link>
								</li>
							</ul>
						</nav>

						<Switch>
							<Route path="/Page1" component={Page1} />
							<Route path="/Page2" component={Page2} />
						</Switch>
					</Router>
				</div>
			</div>
		</div>
	);
}
