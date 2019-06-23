import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';


const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (val) => {
            dispatch(addTodo(val))
        }
    }
};

class AddTodo extends Component{

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    render(){
        let input;
        return(
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();   //prevent the default action when a form is submitted so that custom methods can be run
                        if (!input.value.trim()) {
                            return
                        }
                        this.props.onSubmit(input.value);
                        input.value = ''
                    }}
                >
                    <input
                        ref={node => {
                            input = node;
                        }}
                    />
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)