import React from 'react';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography'



const Root = () => {
  return (
      <div>
      <Typography variant='h3' component="main">New App</Typography>



      
      <Outlet />
</div>

  );
}

export default Root;
