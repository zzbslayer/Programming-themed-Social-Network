import React from 'react'
import {Table} from "react-bootstrap"
import styles from "./Docs.css"
const Docs = () => {
    return (
        <div class="docs">
        <Table striped condensed hover width="100%" height="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
                <tr>
                    <td valign="top" width="20">
                        <Table striped condensed hover cols="1" rows="1" border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <a class="menuItem">Build a chatbot</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <a class="menuItem">Machine Learning</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <a class="menuItem">Deep Learning</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="menu">
                                            <a class="menuItem">TensorFlow</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </td>
                    <td colspan="2">
                        <Table striped condensed hover border="0" cellspacing="0" cellpadding="0" width="100%" height="100%">
                            <tbody>
                                <tr>
                                    <td padding="10px" valign="top" align="left">
                                        <h1>EZ AI</h1>
                                        <p>I don't know what to put here.</p>
                                        <p><a href="tutorial/machine-learning1.pptx" download="machine-learning1.pptx">machine learning1</a></p>
                                        <p><a href="tutorial/machine-learning2.pdf" download="machine-learning2.pdf">machine learning2</a></p>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </td>
                </tr>
            </tbody>
        </Table>
        <footer>Copyright &copy; zzbslayer.club
        </footer>
        </div>
    )
};

export default Docs;