import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Drawer from "@mui/material/Drawer";
import { useTheme, IconButton } from "@mui/material";
// import { Link } from '@mui/material';
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
// import {Link} from 'react-router-dom'
import { useLocation, useNavigate } from "react-router-dom";

// my way to save mode in local storage 1
// const toogleTheme = (colormode) => {
//   localStorage.setItem("currentTheme", colormode )
// }

const Drawerr = ({ drawerWidth, setMyMode,noneorblock,drawerType,hideDrower }) => {
  const currentLocation = useLocation().pathname;
  const navigate = useNavigate();
  const theme = useTheme();

  const myList =[
    {  text :"Home" , icon :<Home /> , path:"/"},
    {  text :"Create" , icon :<Create /> , path:"/create"},
    {  text :"Profile" , icon :<Person2 />, path:"/profile"},
    {  text :"Settings" , icon :<Settings />, path:"/settings"},
  ]

  return (
    <div>
      <Drawer
        sx={{
          display:{xs:noneorblock,md:"block"},
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={()=>{
          hideDrower()
        }}
      >
        <List>
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: "15px",
              mt: "5px",
            }}
          >
            <IconButton
              // onClick={colorMode.toggleColorMode}
              onClick={() => {
                setMyMode(theme.palette.mode === "light" ? "dark" : "light");
                // ali way in one line
                localStorage.setItem(
                  "currentTheme",
                  theme.palette.mode === "light" ? "dark" : "light"
                );

                // my way to save mode in local storage 2
                // toogleTheme(theme.palette.mode ==="light"? "dark" :"light")
              }}

              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "yellow" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>

          {/* <Toolbar /> */}
          <Divider />
          {/* <ListItem disablePadding> */}
          {/* first way to go home page ::::    component="a" href='/' */}
          {/* with refresh with internet */}
          {/* <ListItemButton component="a" href='/'>
                <ListItemIcon>
                 <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem> */}

      {myList.map((item)=>{
        return (
          <ListItem disablePadding 
          // @ts-ignore
          sx={{bgcolor: currentLocation=== item.path ? theme.palette.ali1.main : null}}>
            <ListItemButton
              onClick={() => {
                navigate(item.path);
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        )
      })}





          {/* import { Link } from '@mui/material'; */}
          {/* seimport { IconButton } from '@mui/material/IconButton';
cond way to go create page ::::  <link href='/Create'></link>*/}
          {/* with refresh with internet */}
          {/* <Link href='/Create'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <Create />
                </ListItemIcon>
                <ListItemText primary="Create" />
              </ListItemButton>
            </ListItem>
            </Link> */}

          {/* <ListItem disablePadding 
                    // @ts-ignore
                    sx={{bgcolor: currentLocation=== "/create" ? theme.palette.ali1.main : null}}>
            <ListItemButton
              onClick={() => {
                navigate("/create");
              }}
            >
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem> */}

          {/* third way to go Profile page react router way ::::
            <link href='/Create'></link>*/}
          {/* without refresh without internet */}
          {/* <Link style={{color:"red"}} to='/Profile'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <Person2 />
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
          </Link> */}

          {/* <ListItem disablePadding 
                    // @ts-ignore
                    sx={{bgcolor: currentLocation === "/profile" ? theme.palette.ali1.main : null}}>
            <ListItemButton
              onClick={() => {
                navigate("/profile");
              }}
            >
              <ListItemIcon>
                <Person2 />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem> */}

          {/*=================== The Best Way =====================  */}
          {/* forth way to go Settings page react router way ::::
            onClick={() =>{navigate("/Settings")}}*/}
          {/* without refresh without internet */}
          {/* <ListItem disablePadding 
                    // @ts-ignore
                    sx={{bgcolor: currentLocation=== "/settings" ? theme.palette.ali1.main : null}}>
            <ListItemButton
              onClick={() => {
                navigate("/settings");
              }}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem> */}








          <ListItem disablePadding
                    // @ts-ignore
                    sx={{bgcolor: currentLocation=== "/logout" ? theme.palette.ali1.main : null}}>
            <ListItemButton
              onClick={() => {
                navigate("/logout");
              }}
            >
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </ListItem>


        </List>
        <Divider />
        {/* <List>
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
        </List> */}
      </Drawer>
    </div>
  );
};

export default Drawerr;
