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

                        <ListGroupItem style={{border :'none'}}>
                            <img src={require('../icon/人对话.png')}></img>
                            <span style={{border :'none',    width: '150px',
                                height: '35px',
                                position: 'relative',
                                padding:'15px 15px 15px 15px',
                                margin: ' 20px auto 20px 20px',
                                background: '#f8ac09',
                                borderRadius: '5px'}}>{M.comment}</span>
                        </ListGroupItem>

                    )
                })}
                    {this.props.messages.map((M)=>{
                        return (

                            <ListGroupItem style={{border :'none'}}>
                                <img src={require('../icon/机器人对话.png')}></img>
                                <span style={{border :'none',    width: '150px',
                                    height: '35px',
                                    position: 'relative',
                                    padding:'15px 15px 15px 15px',
                                    margin: ' 20px auto 20px 20px',
                                    background: '#3adbf8',
                                    borderRadius: '5px'}}>{M.response}</span>
                            </ListGroupItem>
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