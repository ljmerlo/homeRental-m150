import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ContentNavbar from './contentNavbar';
import Home from './pages/home';
import Rentals from './pages/rentals';
// import Account from './pages/account';
import '../css/default.css';

class app extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <ContentNavbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/rentals" component={Rentals} />
                        {/* <Route path="/account" component={Account} /> */}
                    </Switch>
                </Router>
                <footer className='main-footer'>
                    <div className='grayTop'></div>
                    <div>
                        <p className='middleText'>IamLenny @ Copyright : <a href='www.iamlenny.ch'>IamLenny.ch</a></p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default app;