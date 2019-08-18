import React from "react";
import History from "./History";
import style from "./styles/Calculator.module.css";
import Keypad from "./Keypad";

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expression: "" ,
            value: '',
            history: [
                {
                    expression: "2+2",
                    result: "4"
                }
            ],
            showHistory: false
        };
    }

    render () {
        return (
            <div className={style.calculatorBlock}>
                <div className={style.display}>
                    Display
                </div>
                <History history={this.state.history}/>
                <Keypad/>
            </div>
        )
    }
}

export default Calculator;