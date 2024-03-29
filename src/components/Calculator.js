import React from "react";
import History from "./History";
import style from "./styles/Calculator.module.css";
import Keypad from "./Keypad";
import CalculatorEngine from "./CalculatorEngine";
import Display from "./Display";
import ControlPanel from "./ControlPanel";

const calculator = new CalculatorEngine();

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expression: "" ,
            value: '',
            history: [
                {
                    expression: "",
                    equally: " = ",
                    result: ""
                }
            ],
            showHistory: false
        };

        this.handleOnDigit = this.handleOnDigit.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnClearAll = this.handleOnClearAll.bind(this);
        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnAdd = this.handleOnAdd.bind(this);
        this.handleOnSubtract = this.handleOnSubtract.bind(this);
        this.handleOnDivide = this.handleOnDivide.bind(this);
        this.handleOnMultiply = this.handleOnMultiply.bind(this);
        this.handleOnDecimalPoint = this.handleOnDecimalPoint.bind(this);
        this.handleOnEquals = this.handleOnEquals.bind(this);
        this.handleOnToggleSign = this.handleOnToggleSign.bind(this);
        this.handleOnHistorySelected = this.handleOnHistorySelected.bind(this);
        this.handleOnToggleHistory = this.handleOnToggleHistory.bind(this);
        this.handleOnClearHistory = this.handleOnClearHistory.bind(this);
    }

    handleOnAdd() {
        calculator.add();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnClear() {
        calculator.clear();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnClearAll() {
        calculator.clearAll();

        this.setState(() => ({
            expression: calculator.getExpression(),
            history: calculator.getHistory(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnClearHistory() {
        calculator.clearHistory();

        this.setState(() => ({
            history: calculator.getHistory(),
            showHistory: false
        }));
    }


    handleOnDecimalPoint() {
        calculator.inputDecimal();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnDelete() {
        calculator.delete();

        this.setState(() => ({
            value: calculator.getValue().toString()
        }));
    }


    handleOnDigit(number) {
        calculator.inputDigit(number);

        this.setState(() => ({
            value: calculator.getValue()
        }));
    }

    handleOnDivide() {
        calculator.divide();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnEquals() {
        calculator.equals();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getResult().toString(),
            history: calculator.getHistory()
        }));
    }

    handleOnHistorySelected(index) {
        calculator.loadHistory(index);

        this.setState(prevState => ({
            expression: prevState.history[index].expression,
            value: calculator.getValue().toString()
        }));
    }

    handleOnMultiply() {
        calculator.multiply();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }


    handleOnSubtract() {
        calculator.subtract();

        this.setState(() => ({
            expression: calculator.getExpression(),
            value: calculator.getValue().toString()
        }));
    }

    handleOnToggleHistory() {
        this.setState(prevState => ({ showHistory: !prevState.showHistory }));
    }

    handleOnToggleSign() {
        calculator.toggleSign();

        this.setState(() => ({
            value: calculator.getValue().toString()
        }));
    }

    render () {
        return (
            <div className={style.calculatorBlock}>
                <div className={style.display}>
                    <Display value={this.state.value} expression={this.state.expression}/>
                </div>

                <ControlPanel anyHistory={this.state.history.length > 0}
                              onToggleHistory={this.handleOnToggleHistory}/>
                {
                    this.state.showHistory &&
                    <History history={this.state.history} onClearHistory={this.handleOnClearHistory}
                             onSelected={this.handleOnHistorySelected}/>
                }
                { !this.state.showHistory &&
                    <Keypad onDigit={this.handleOnDigit}
                        onAdd={this.handleOnAdd}
                        onSubtract={this.handleOnSubtract}
                        onDivide={this.handleOnDivide}
                        onMultiply={this.handleOnMultiply}
                        onDecimalPoint={this.handleOnDecimalPoint}
                        onEquals={this.handleOnEquals}
                        onClear={this.handleOnClear}
                        onClearAll={this.handleOnClearAll}
                        onDelete={this.handleOnDelete}
                        onToggleSign={this.handleOnToggleSign}/>
                }
            </div>
        )
    }
}

export default Calculator;