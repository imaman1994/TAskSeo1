// @flow 
import {  Grid, Typography } from '@mui/material';
import React from 'react';
import ProgressBar from './ProgressBar';
import PhotoIcon from '@mui/icons-material/Photo';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProgressDetailsBox = () => {
    return (
        <Grid class='flex flex-row justify-between w-full'>
            <Grid class='inline'>
               <PhotoIcon sx={{ fontSize: "12px",color:'#233554' }}/>
            </Grid>
            <Grid class='w-full'>
                <Grid class='ml-3'>
                    <Typography class='text-sm font-sm font-Inter'>Page Cover.jpg</Typography>
                    <Typography class='font-normal text-xs text-gray-500 font-Inter'>254mb</Typography>
                    <ProgressBar/>
                </Grid>
                </Grid>
              <Grid>
                  <CheckCircleIcon sx={{ fontSize: "12px",color:'#233554' }}/>
              </Grid>
        </Grid>
    );
};

export default ProgressDetailsBox;