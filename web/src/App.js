/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react';
import {Navbar, Button, Grid, Col, InputGroup, FormControl, Clearfix} from 'react-bootstrap'
import {view as Sign} from './Sign'
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
                <Grid>
                <Col md={8} xs={12}>
                    <Navbar.Brand><Link to="/">Deep-learning</Link></Navbar.Brand>
                    <Navbar.Brand><Link to="/home">Docs</Link></Navbar.Brand>
                    <Navbar.Brand><Link to="/chatbot">Chatbot</Link></Navbar.Brand>
                </Col>

                <Col md={4}xs={12}>
                    <Navbar.Brand>
                    <InputGroup>
                        <InputGroup.Button>
                            <Button>Search</Button>
                        </InputGroup.Button>
                        <FormControl type="text" />
                    </InputGroup>
                    </Navbar.Brand>
                </Col>
                </Grid>
            </Navbar>
            <hr/>
            <Route path="/home" component={Home}/>
            <Route path="/chatbot" component={Chatbot}/>
            <Route exact path="/" component={Sign}/>
        </div>
    </Router>
);
export default App