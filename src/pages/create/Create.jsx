

import { Box, Button, InputAdornment, TextField, styled } from '@mui/material';
import './Create.css';
import React from 'react';
import { purple } from '@mui/material/colors';
import { ChevronRight } from '@mui/icons-material';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: theme.palette.primary.main,
  // @ts-ignore
  backgroundColor: theme.palette.favcolor.main,
  '&:hover': {
    // backgroundColor: theme.palette.primary.light,
    // @ts-ignore
    backgroundColor: theme.palette.favcolorhover.main,
    scale:"0.97"

  },
}));

const Create = () => {


  return (
    <Box component="form" sx={{width:"380px"}}>
    
    <TextField
    fullWidth
          label="With normal TextField"
          sx={{ mt: "25px", display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
          variant="filled"
        />
  

  <TextField
  fullWidth={true}
          label="With normal TextField"
          sx={{ mt: "25px", display:"block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />


<ColorButton variant="contained" sx={{mt:"22px"}}>Submit <ChevronRight></ChevronRight></ColorButton>



    </Box>
  );
}

export default Create;
