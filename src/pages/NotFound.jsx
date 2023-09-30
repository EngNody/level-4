import { Box, useTheme } from '@mui/material';
import  Typography  from '@mui/material/Typography';
import React from 'react';

const NotFound = () => {
  const theme=useTheme()

  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h4">
      <br/>
      <br/>
      There is no design yet
      <br/>
      <br/>
      Please try again later...
      </Typography>
    </Box>
  );
}

export default NotFound;
