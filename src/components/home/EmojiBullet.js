import React from 'react';
import {Box} from "@mui/material";
import { Link } from 'react-router-dom';

function EmojiBullet(props) {
    const {link, emoji, text} = props;

    return (
        <Link to={link} rel="noopener noreferrer" style={{fontSize: '1rem', lineHeight: '1.5'}}>
            <Box component={'span'} aria-label="cheese"
                 role="img"
                 mr={{xs: '0.5rem', md: '1rem'}} fontSize={'1.5rem'}>{emoji}
            </Box>
            {text}
        </Link>
    );
}

export default EmojiBullet;