import React from 'react';
import Grid from '@mui/material/Grid';
import StudentImage from '../assets/studen.png';

const Poster = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
                <div className='py-40 mx-20'>
                    <h1 className='text-4xl font-bold'>Student Living Simplified: All Your Needs in One Place </h1>
                    <h1 className='text-2xl'>Find accommodation, explore food options, and fulfill all your student needs with ease, all under one roof! </h1>
                </div>
            </Grid>
            <Grid xs={6}>
                <div>
                    <img className='mx-auto' src={StudentImage} alt="" />
                </div>
            </Grid>
            
        </Grid>
    );
}

export default Poster;
