import React from 'react'
import {Table, Grid} from "react-bootstrap"
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
        <Table striped condensed hover width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td valign="top" width="20">
                        <Table striped condensed hover cols="1" rows="1" border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <Link to="/docs/buildbot" class="menuItem">Build a chatbot</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <Link to="/docs/machinelearning" class="menuItem">Machine Learning</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <Link to="/docs/deeplearning" class="menuItem">Deep Learning</Link>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <Link to="/docs/tensorflow"  class="menuItem">TensorFlow</Link>
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