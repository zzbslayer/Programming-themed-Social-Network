/**
 * Created by Veiasai on 2017/12/13.
 */
import react from 'react'
import { FormGroup, ControlLabel, HelpBlock} from 'react-bootstrap'
import {sendMessage} from '../actions'

class Sendmessage extends react.Component {
    onSubmit(ev) {
        ev.preventDefault();
        const inputValue = this.state.value;
        this.props.onAdd(inputValue);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId="SENDMESSaGE">
                    <ControlLabel>Send Message</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                </FormGroup>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(sendMessage(text));
        }
    }
};