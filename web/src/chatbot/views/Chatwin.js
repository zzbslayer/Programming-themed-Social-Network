/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'

class Chatwin extends React.Component {
    render() {
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Your message</th>
                        <th>Bot's message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.messages.map((M)=>{
                        return (<tr key = {M.id}>
                            <td>{M.id}</td>
                            <td>{M.comment}</td>
                            <td>{M.response}</td>
                        </tr>)
                    })}
                    </tbody>
                </Table>
            </div>
            )
    }
}

const mapState = (state) => {
    return {
        messages: state.messages || [],
    }
};

export default connect(mapState,null)(Chatwin);