/**
 * Created by Veiasai on 2017/12/13.
 */
import React from 'react'
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {connect} from 'react-redux'
import {sendMessage} from '../actions'

class Sendmessage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
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
                <FormGroup controlId="SENDMESSAGE">
                    <ControlLabel>Send Message</ControlLabel>
                    <FormControl
                        type="text"
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

export default connect(null, mapDispatchToProps)(Sendmessage);

