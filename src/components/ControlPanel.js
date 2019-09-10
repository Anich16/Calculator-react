import React from "react";
import PropTypes from "prop-types";
import style from "./styles/ControlPanel.module.css"

const ControlPanel = (props) => {
    return (
        <div className="">
            <button className={style.buttonHistory} disabled={!props.anyHistory} onClick={props.onToggleHistory}>
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