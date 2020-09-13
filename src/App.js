import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import {Home} from "./pages/Home";
import {Library} from "./pages/Library";
import {Usability} from "./pages/Usability";
import {Nav} from "./components/Nav/index";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/library'} component={Library}/>
                    <Route path={'/usability'} component={Usability}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
