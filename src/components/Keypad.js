import React from "react";
import PropTypes from "prop-types";
import style from "./styles/Keypad.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import { faCarentLeft } from '@fortawesome/free-regular-svg-icons';

const Keypad = (props) => {
    return (
        <div className={style.keypad}>
            <div className={style.row}>
                <button className={style.buttonCE} value="CE">CE</button>
                <button className={style.buttonC} value="C">C</button>
                <button className={style.buttonBackspace} value="backspace">&#8592;</button>
                <button className={style.buttonSymbol} value="/">&divide;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonNumber} value="7">7</button>
                <button className={style.buttonNumber} value="8">8</button>
                <button className={style.buttonNumber} value="9">9</button>
                <button className={style.buttonSymbol} value="*">&times;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonNumber} value="4">4</button>
                <button className={style.buttonNumber} value="5">5</button>
                <button className={style.buttonNumber} value="6">6</button>
                <button className={style.buttonSymbol} value="-">&minus;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonNumber} value="1">1</button>
                <button className={style.buttonNumber} value="2">2</button>
                <button className={style.buttonNumber} value="3">3</button>
                <button className={style.buttonSymbol} value="+">&#43;</button>
            </div>
            <div className={style.row}>
                <button className={style.buttonSymbol} value="+-">&plusmn;</button>
                <button className={style.buttonNumber} value="0">0</button>
                <button className={style.buttonSymbol} value=".">.</button>
                <button className={style.buttonSymbol} value="=">=</button>
            </div>
        </div>
    )
};

export default Keypad;