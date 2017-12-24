/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react'
import Chatwin from './Chatwin'
import Send from './Sendmessage'
import {Grid} from 'react-bootstrap'
import  Head from  './Header'
const Chatbot = () => {
    return (
        <Grid>
            <Head/>
            <Chatwin/>
            <hr/>
            <Send/>
        </Grid>
    )
};

export default Chatbot;
