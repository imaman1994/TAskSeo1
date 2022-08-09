
import {  Grid, Typography } from '@mui/material';
import React from 'react';
import ProgressBar from './ProgressBar';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ProgressDetailsBox = () => {

    
    return (
        <Grid class='flex flex-row justify-between items-start w-full'>
            <Grid class='inline mt-1'>
               <InsertPhotoOutlinedIcon sx={{ fontSize: "24px",color:'#233554',backgroundColor:'#C5D2E7',padding:'4px',borderRadius:'14px' }}/>
            </Grid>
            <Grid class='w-full'>
                <Grid class='ml-3 pt-2'>
                    <Typography class='text-sm font-sm font-Inter'>image</Typography>
                    <Typography class='font-normal text-xs text-gray-500 font-Inter'>500 KB</Typography>
                    <ProgressBar/>
                </Grid>
                </Grid>
              <Grid>
                  <CheckCircleIcon  sx={{ fontSize: "14px",color:'#233554' }}/>
              </Grid>
        </Grid>
    );
};

export default ProgressDetailsBox;