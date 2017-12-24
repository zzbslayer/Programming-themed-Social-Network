/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Table, Row,ListGroup,ListGroupItem} from 'react-bootstrap'

class Chatwin extends React.Component {
    render() {
        return (
 
            <Row>
                <ListGroup >
                {this.props.messages.map((M)=>{
                    return (

                        <ListGroupItem style={{border :'none',    width: '150px',
                            height: '35px',
                            position: 'relative',
                            margin: ' auto 0',
                            background: '#f8ac09',
                            borderRadius: '5px'}}>{M.comment}</ListGroupItem>

                    )
                })}
                    {this.props.messages.map((M)=>{
                        return (

                            <ListGroupItem style={{border :'none',    width: '150px',
                                height: '35px',
                                position: 'relative',
                                margin: ' auto 0',
                                background: '#48eef8',
                                borderRadius: '5px'}}>{M.response}</ListGroupItem>
                    )
                    })}
                </ListGroup>
            </Row>


            )
    }
}

const mapState = (state) => {
    return {
        messages: state.messages || [],
    }
};

export default connect(mapState,null)(Chatwin);