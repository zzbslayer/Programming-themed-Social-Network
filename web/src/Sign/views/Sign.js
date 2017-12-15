import React from 'react'
import {Grid, Row, Col, Button} from 'react-bootstrap'

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
                <Col md={6}><Button bsStyle="primary" bsSize="large">Sign in</Button></Col>
                <Col md={6}><Button bsStyle="success" bsSize="large">Sign up</Button></Col>
            </Row>
        </Grid>
    )
};

export default Sign;