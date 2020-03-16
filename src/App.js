import React, { Component } from 'react';
import Main from './containers/main/Main';
import Right from './containers/right/RightSidebar';
import './App.css';
import * as firebase from 'firebase';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Admin from './containers/admin';

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {
            speed: 0,
        }
    }
    componentDidMount() {
        const db = firebase.database();
       const name = db.ref('name');
       const shortcut = db.ref('shortcut');
       const desc = db.ref('desc');
       name.on('value', (el) => console.log(el.val()));
       shortcut.on('value', (el) => el.val());
        desc.on('value', (el) => el.val());
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <>
                            <Main/>
                            <Right/>
                            </>
                        )}/>
                        <Route path="/admin" render={() => <Admin />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
