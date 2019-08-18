import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from "./styles/Header.module.css";

const Header = (props) => {
    return (
        <div className={style.navBar}>
            <FontAwesomeIcon icon={['fab', 'calculator']}/>
            <p className={style.title}>{props.title}</p>
        </div>
    )
};

Header.defaultProps = {
    title: 'App'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;