/**
 * Created by Veiasai on 2017/12/13.
 */
import react from 'react'
import {Nav, NavItem} from 'react-bootstrap'

const Topbar = (
    <Nav bsStyle="pills" activeKey={1}>
        <NavItem eventKey={1} href="/home">Home</NavItem>
        <NavItem eventKey={2} href="/chatbot">chatbot </NavItem>
    </Nav>
);

export  default Topbar