import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'
import Signin from './Signin'
import Signup from './Signup'
import {
    Route,
    Link
} from 'react-router-dom'

const Sign = () => {
    return (
        <Grid>
            <Row >
                <h1 className="Welcome">Learn deep-learning and AI without any code!</h1>
            </Row>
            <Row>
                <h2 className="Welcome_main">欢迎来到这个空壳网站，我们有很多虚假的资料可供参考，还有一个
                聊天机器人可以体验AI，祝您使用愉快。</h2>
            </Row>
            <Row style={{"text-align":"center"}}>
                <Col md={6} xs={6}><Button bsStyle="primary" bsSize="large"><Link to="/signin">Sign in</Link></Button></Col>
                <Col md={6} xs={6}><Button bsStyle="success" bsSize="large"><Link to="/signup">Sign up</Link></Button></Col>
            </Row>
            <Row>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
            </Row>
        </Grid>
    )
};

export default Sign;