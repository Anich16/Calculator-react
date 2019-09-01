import React from "react";
import PropTypes from "prop-types";

const ControlPanel = (props) => {
    return (
        <div className="">
            <button className="" disabled={!props.anyHistory} onClick={props.onToggleHistory}>
                History
            </button>
        </div>
    )
};

ControlPanel.defaultProps = {
    anyHistory: false,
    onToggleHistory: () => alert('toggle history')
};

ControlPanel.propTypes ={
    anyHistory: PropTypes.bool,
    onToggleHistory: PropTypes.func
};

export default ControlPanel;