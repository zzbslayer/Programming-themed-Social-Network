/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react';
import {Navbar, Button, Grid, Col} from 'react-bootstrap'
import {view as Sign} from './Sign'
import {view as Chatbot} from './chatbot'
import {view as Docs} from './Docs'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const App = () => (

    <Router>
        <div>
            <Navbar inverse >
                <Grid>
                <Col md={8}>
                    <Navbar.Brand><a href="/">Deep-learning</a></Navbar.Brand>
                    <Navbar.Brand><Link to="/docs">Docs</Link></Navbar.Brand>
                    <Navbar.Brand><Link to="/chatbot">Chatbot</Link></Navbar.Brand>
                </Col>
                <Col md={4}>
                    <Navbar.Brand><Button>Search</Button></Navbar.Brand>
                    <Navbar.Brand />
                    <Navbar.Brand><input/></Navbar.Brand>
                </Col>
                </Grid>
            </Navbar>
            <hr/>
            <Route path="/docs" component={Docs}/>
            <Route path="/chatbot" component={Chatbot}/>
            <Route exact path="/" component={Sign}/>
        </div>
    </Router>
);
export default App