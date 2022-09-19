import React, { Component } from "react";
import PropTypes from 'prop-types'
import css from './Feedback.module.css'

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.array,
        onLeaveFeedback: PropTypes.func,
    }

    render() {
        return this.props.options.map(key => {
            return <button type="button" className={css.btn} key={key} onClick={this.props.onLeaveFeedback}>{key}</button>
        })
    }
}

export default FeedbackOptions;
