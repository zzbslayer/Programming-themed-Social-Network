/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react';
import {Nav, NavItem, Navbar} from 'react-bootstrap'
import {view as Chatbot} from './chatbot'
import {view as Home} from './Home'


import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const App = () => (

    <Router>
        <div>
            <Navbar inverse >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Programing</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/home">Home</NavItem>
                        <NavItem eventKey={2} href="/chatbot">Chatbot</NavItem>
                    </Nav>
            </Navbar>
            <hr/>

            <Route exact path="/home" component={Home}/>
            <Route path="/chatbot" component={Chatbot}/>
        </div>
    </Router>
);
export default App