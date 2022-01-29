import React from 'react';
import AboutCard from '../components/AboutCard';
import { Typography } from '@mui/material';

function About(props) {
    return (
        <div className='aboutContainer'>
            <div className='title'>
             <Typography align="center" sx={{ color:'white', fontSize:35 }} color="Text.primary" >
                    ABOUT US
                </Typography>
                </div>
            <AboutCard />
        </div>
    );
}

export default About;