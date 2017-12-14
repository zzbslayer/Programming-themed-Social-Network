/**
 * Created by Veiasai on 2017/12/13.
 */
import {SENDMESSAGE} from './actionTypes'
let nextMessageId = 0;

const url = "/openapi/api";
export const sendMessage = (text) => {
    return (dispatch) => {
        const request = {
            key: "4d790e03e17f4ba8b1f21554c3351b6a",
            info : text,
            userid : 666,
        };

        fetch(url,{
            method: "POST",
            body: JSON.stringify(request),
        }).then((response)=> {
            console.log(response);
            response.json().then((rejson) => {
                console.log(rejson);
                dispatch({
                    type: SENDMESSAGE,
                    id: nextMessageId++,
                    comment: text,
                    response: rejson["text"],
                })
            });
        });
    }
};