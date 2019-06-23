import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) =>{
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick : () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

class Link extends Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    };

    render() {

        if (this.props.active) {
            return <span> {this.props.children}</span>
        }
        return (
            <a
                href = ""
                onClick={ e => {
                    e.preventDefault()
                    this.props.onClick()
                }}
            >
                {this.props.children}
            </a>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)