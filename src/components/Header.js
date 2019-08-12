import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) => {
    return (
        <div className="navBar">
            <FontAwesomeIcon icon={['fab', 'calculator']}/>
            <p className="title">{props.title}</p>
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