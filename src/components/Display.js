import React from "react";
import PropTypes from "prop-types";
import style from "./styles/Display.module.css";

const Display = (props) => {
    return (
        <div className={style.displayBlock}>
            <div className="">{props.expression}</div>
            <div className="">{props.value}</div>
            <div className="">{props.value}</div>
            <div className="">{props.value}</div>
        </div>
    )
};

Display.propTypes = {
    expression: PropTypes.string,
    value: PropTypes.string
};

export default Display;

