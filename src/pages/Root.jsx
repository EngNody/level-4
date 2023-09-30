import React from "react";
import { Outlet } from "react-router-dom";
// import Typography from "@mui/material/Typography";
// import { Menu } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawerr from "../MUI-components/Drawer";
import Appbar from "../MUI-components/Appbar";
import { useState } from "react";
import {ThemeProvider, createTheme } from "@mui/material/styles";
// import { Margin } from "@mui/icons-material";

const drawerWidth = 240;

const Root = () => {

  const [mode, setMyMode] = useState(localStorage.getItem("currentTheme")===null?"light":localStorage.getItem("currentTheme")==="light"? "light" :"dark");

  const darkTheme = createTheme({
    palette:{

      // @ts-ignore
      mode,
      ...(mode === 'light')
      ?{
        // palette values for light mode
            ali: {
        main: '#647488',
        contrastText: '#fff',
      },
      ali1: {
        main: '#999',
        // main: grey[500],
        contrastText: '#fff',
      },
      favcolor:{
        // main:"#ff4081"
        main:"teal"
      },
      favcolorhover:{
        // main:"#ff80ab"
        // main:"#d81b60"
        main:"#ff1744"
      }

      }
      :{
        // palette values for dark mode
            ali: {
        main: 'teal',
        contrastText: '#fff',
      }, 
      ali1: {
        main: '#666',
        // main: grey[700],
        contrastText: '#fff',
      },
         favcolor:{
        main:"#ff4081"
      },
      favcolorhover:{
        // main:"#ff80ab"
        // main:"#d81b60"
        main:"#ff1744"
      }

      }









      // @ts-ignore
      // mode:myMode,
        // @ts-ignore
      //   ali: {
      //   main: '#647488',
      //   contrastText: '#fff',
      // },
          // primary:{main:teal[500],light:teal[300]}
  
    },
  });


const [noneorblock, setnoneorblock] = useState("none");
const [drawerType, setdrawerType] = useState("permanent");

const showDrower = () => {
  setnoneorblock("block")
  setdrawerType("temporary")
}

const hideDrower = () => {
  setnoneorblock("none")
  setdrawerType("permanent")
}


  return (
    <ThemeProvider theme={darkTheme}>
          <CssBaseline/>

    <div>

      <Appbar drawerWidth={drawerWidth} theme={darkTheme} showDrower={showDrower} />

      <Drawerr drawerWidth={drawerWidth} setMyMode={setMyMode} noneorblock={noneorblock} drawerType={drawerType} hideDrower={hideDrower} />

      <Box component="main"
        sx={{
          ml: {md:`${drawerWidth}px`},
          mt: "100px",
          display: "flex",
          justifyContent: "center",
        //   [darkTheme.breakpoints.down("md")]:{
        //   // width:"100%"
        //   ml: 0,

        // }
        }}
      >
        <Outlet />
      </Box>

      {/* Drawer */}

      {/* <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Appbar drawerWidth={drawerWidth} />

        <Drawerr drawerWidth={drawerWidth} />
        {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer> */}
        {/* <Box
          component="main"
          sx={{ flexGrow: 1, 
          bgcolor: "background.default",
           p: 3 }}
        >
          <Toolbar /> */}
          {/* <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean
            sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
          </Typography>

          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography> */}
        {/* </Box> */}
      {/* </Box> */} 

      {/* <Typography variant='h3' component="main">New App</Typography> */}

      {/* <Button variant="text">Text</Button> */}
      {/* <Button variant="contained" sx={{m:"50px"}}>Contained</Button> */}
      {/* <Button variant="outlined">Outlined</Button> */}

      {/* <IconButton > */}
      {/* <Menu /> */}
      {/* <MenuIcon />

</IconButton>

<IconButton size='large' >

  <HomeIcon sx={{ margin: "40px" }}/>
<HomeIcon color="primary"  fontSize='small'/>
<HomeIcon color="secondary"/>
<HomeIcon color="success"  fontSize="small" />
<HomeIcon color="action" fontSize="large" />
<HomeIcon color="disabled" sx={{ fontSize: 40 }}/>
<HomeIcon sx={{ color: "pink" }} />
</IconButton> */}
    </div>
    </ThemeProvider>

  );
};

export default Root;
