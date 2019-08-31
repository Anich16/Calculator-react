import React from "react";
import PropTypes from "prop-types";
import style from "./styles/Keypad.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import { faCarentLeft } from '@fortawesome/free-regular-svg-icons';

const Keypad = (props) => {

    const handelOnDigit = (e) => {
        props.onDigit(e.target.value)
    };

    return (
        <div className={style.keypad}>
            <div className={style.row}>
                <button className={style.buttonCE} value="CE" onClick={props.onCleareAll}>CE</button>
                <button className={style.buttonC} value="C" onClick={props.onCleare}>C</button>
                <button className={style.buttonBackspace} value="backspace" onClick={props.onDelete}>&#8592;</button>
                <button className={style.buttonSymbol} value="/" onClick={props.onDivide}>&divide;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonNumber} value="7" onClick={handelOnDigit}>7</button>
                <button className={style.buttonNumber} value="8" onClick={handelOnDigit}>8</button>
                <button className={style.buttonNumber} value="9" onClick={handelOnDigit}>9</button>
                <button className={style.buttonSymbol} value="*" onClick={props.onMultiply}>&times;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonNumber} value="4" onClick={handelOnDigit}>4</button>
                <button className={style.buttonNumber} value="5" onClick={handelOnDigit}>5</button>
                <button className={style.buttonNumber} value="6" onClick={handelOnDigit}>6</button>
                <button className={style.buttonSymbol} value="-" onClick={props.onSubtract}>&minus;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonNumber} value="1" onClick={handelOnDigit}>1</button>
                <button className={style.buttonNumber} value="2" onClick={handelOnDigit}>2</button>
                <button className={style.buttonNumber} value="3" onClick={handelOnDigit}>3</button>
                <button className={style.buttonSymbol} value="+" onClick={props.onAdd}>&#43;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonSymbol} value="+-" onClick={props.onToggleSign}>&plusmn;</button>
                <button className={style.buttonNumber} value="0" onClick={handelOnDigit}>0</button>
                <button className={style.buttonSymbol} value="." onClick={props.onDecimalPoint}>.</button>
                <button className={style.buttonSymbol} value="=" onClick={props.onEquals}>=</button>
            </div>
        </div>
    )
};

export default Keypad;