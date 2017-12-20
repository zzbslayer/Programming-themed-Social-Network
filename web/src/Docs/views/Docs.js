import React from 'react'
import {Table, Grid, Panel,ListGroup , ListGroupItem} from "react-bootstrap"
import Machinedocs from './Machinedocs'
import Buildbot from './Buildbot'
import Deeplearning from "./Deeplearning";
import Tensorflow from "./Tensorflow";
import {
    Route,
    Link
} from 'react-router-dom'
import Introduction from "./Introduction";
import './Docs.css'

const Docs = () => {
    return (
        <div class="docs">
        <Grid>
        </Grid>
        <Grid>
        <Table striped condensed hover width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td valign="top" width="150px">
                        <Table striped condensed hover cols="1" rows="1" border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="menu">
                                        <Panel style={{padding:"0px", margin:"0px"}} collapsible header="Chatbot">
                                            <Link to="/docs//docs/buildbot" class="menuItem">Chatbot</Link>
                                        </Panel>
                                        </div>
                                        <div class="menu">
                                        <Panel style={{padding:"0px", margin:"0px"}} collapsible header="机器学习">
                                        <ListGroup fill>
                                            <ListGroupItem><Link to="/docs/machinelearning" class="menuItem">基本概念</Link></ListGroupItem>
                                            <ListGroupItem><Link to="/docs/machinelearning" class="menuItem">学习方法</Link></ListGroupItem>
                                            <ListGroupItem><Link to="/docs/machinelearning" class="menuItem">资源汇总</Link></ListGroupItem>
                                        </ListGroup>
                                        </Panel>
                                        </div>
                                        <div class="menu">
                                        <Panel style={{padding:"0px", margin:"0px"}} collapsible header="深度学习">
                                        <ListGroup fill>
                                            <ListGroupItem><Link to="/docs/deeplearning" class="menuItem">基本概念</Link></ListGroupItem>
                                            <ListGroupItem><Link to="/docs/deeplearning" class="menuItem">学习方法</Link></ListGroupItem>
                                            <ListGroupItem><Link to="/docs/deeplearning" class="menuItem">资源汇总</Link></ListGroupItem>
                                        </ListGroup>
                                        </Panel>
                                        </div>
                                        <div class="menu">
                                        <Panel style={{padding:"0px", margin:"0px"}} collapsible header="TensorFlow">
                                        <ListGroup fill>
                                            <ListGroupItem><Link to="/docs/tensorflow" class="menuItem">基本概念</Link></ListGroupItem>
                                            <ListGroupItem><Link to="/docs/tensorflow" class="menuItem">学习方法</Link></ListGroupItem>
                                            <ListGroupItem><Link to="/docs/tensorflow" class="menuItem">资源汇总</Link></ListGroupItem>
                                        </ListGroup>
                                        </Panel>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </td>
                    <td colspan="2">
                        <Route exact path="/docs" component={Introduction} />
                        <Route path="/docs/buildbot" component={Buildbot} />
                        <Route path="/docs/machinelearning" component={Machinedocs} />
                        <Route path="/docs/deeplearning" component={Deeplearning} />
                        <Route path="/docs/tensorflow" component={Tensorflow} />
                    </td>
                </tr>
            </tbody>
        </Table>
        <footer>Copyright &copy; zzbslayer.club
        </footer>
        </Grid>
        </div>
    )
};

export default Docs;