/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react';
import {Navbar} from 'react-bootstrap'
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
                <Navbar.Brand><a href="/">Programming</a></Navbar.Brand>
                <Navbar.Brand><Link to="/home">Home</Link></Navbar.Brand>
                <Navbar.Brand><Link to="/chatbot">Chatbot</Link></Navbar.Brand>
            </Navbar>
            <hr/>

            <Route exact path="/home" component={Home}/>
            <Route path="/chatbot" component={Chatbot}/>
        </div>
    </Router>
);
export default App