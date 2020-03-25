import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './views/home.jsx';
import People from './views/people.jsx';
import Vehicles from './views/vehicles.jsx';
import Planets from './views/planets.jsx';
import NotFound from './views/notfound.jsx';
import PeopleDetails from './components/people-details.jsx'
import injectContext from './store/appContext';

const App = props => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">Star Wars</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home"> <span className="sr-only">Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">Planets</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/people/:name/" component={PeopleDetails} />
                <Route path="/people" component={People} />
                <Route path="/vehicles" component={Vehicles} />
                <Route path="/planets" component={Planets} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default injectContext(App);