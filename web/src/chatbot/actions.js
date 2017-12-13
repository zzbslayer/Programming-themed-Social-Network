/**
 * Created by Veiasai on 2017/12/13.
 */
import {SENDMESSAGE} from './actionTypes'
let nextMessageId = 0;

export const sendMessage = (text) => (
    {
        type: SENDMESSAGE,
        id: nextMessageId++,
        text: text
    }
);