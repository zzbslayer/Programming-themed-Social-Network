/**
 * Created by Veiasai on 2017/12/13.
 */
import {SENDMESSAGE} from './actionTypes'

export default (state = [], action) => {
    switch (action.type) {
        case SENDMESSAGE: {
            return [
                ...state,
                {
                    key: action.id,
                    id: action.id,
                    comment: action.comment,
                    response: action.response
                }
            ]
        }

        default: {return state}
    }
}