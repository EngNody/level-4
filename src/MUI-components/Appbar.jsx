import React from 'react';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@mui/material';


const Appbar = ({drawerWidth}) => {
  return (
    <div>
    {/* Appbar */}


        <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          {/* <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography> */}


          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />



        </Toolbar>

      </AppBar>

{/* <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />

        </Toolbar>
      </AppBar>

    </Box> */}

    </div>
  );
}

export default Appbar;
