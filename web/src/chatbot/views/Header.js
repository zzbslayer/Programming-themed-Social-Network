import React from 'react'
import  { Row }  from 'react-bootstrap'

class Header extends  React.Component{
    render(){
        return (

         <Row className='chat-robt-head'>
             <h1 style={{background : '#90959b', textAlign: 'center',color: '#ecfdff'}}><img src={require('../icon/机器人3.png')}></img>欢迎使用聊天机器人~</h1>

        </Row>

        )
    }
}

export default Header;