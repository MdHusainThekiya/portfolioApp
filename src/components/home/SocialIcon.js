import React from 'react';
import { Link } from "react-router-dom";

function SocialIcon(props) {
    const {link, icon, label} = props;
    return (
        <Link aria-label={label}
           rel="noopener noreferrer" to={link}>
            <i className={icon} aria-hidden="true"/>
        </Link>
    );
}

export default SocialIcon;