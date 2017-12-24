/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react'
import {connect} from 'react-redux'
import {Row,ListGroup,ListGroupItem} from 'react-bootstrap'

class Chatwin extends React.Component {
    render() {
        return (

            <div className="ChatArea">

                {this.props.messages.map((M)=>{
                    return (
                        <ListGroup className="ChatBar" >
                            <ListGroupItem className="ChatBar" style={{border :'none'}}>
                                <img src={require('../icon/人对话.png')}></img>
                                <span className="UserMessage" >{M.comment}</span>
                            </ListGroupItem>

                                <ListGroupItem className="ChatBar" style={{border :'none'}}>
                                    <img src={require('../icon/机器人对话.png')}></img>
                                    <span className="BotMessage" >{M.response}</span>
                                </ListGroupItem>
                        </ListGroup>
                    )
                })}

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