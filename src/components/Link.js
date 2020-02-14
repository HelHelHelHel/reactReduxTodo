import React from 'react';
import PropType from 'prop-types';
import { connect } from 'react-redux';
import { filter } from  '../actions/simpleAction';

const Link = ({ active, children, onClick }) => {
    return (
        <button onClick={onClick} disabled={active}>
            {children}
        </button>
    )
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onclick: () => {
        dispatch(filter(ownProps.filter))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);