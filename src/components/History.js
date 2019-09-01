import React from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import style from "./styles/History.module.css";

const History = (props) => {
    return (
        <div className={style.history}>
            {
                props.history.map((i, index) => {
                    return (
                        <div className={style.historyItem} key={index}>
                            <button className={style.button} onClick={() => props.onSelected(i)}>
                                <div className="textBlock">
                                    <div>{i.expression}&nbsp;=</div>
                                    <div className={style.result}>{i.result}</div>
                                </div>
                            </button>
                            <div className="history-trash" onClick={props.onClearHistory}>
                                <div className={style.deleteIcon}>
                                    <FontAwesomeIcon icon={faTrash} color="red" size="2x"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

History.propTypes = {
    history: PropTypes.array
};

export default History;

