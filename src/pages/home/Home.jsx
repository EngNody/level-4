import { Box, IconButton, Paper, Typography, 
  // useTheme
 } from "@mui/material";
import "./Home.css";
import React, { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
// app bar
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Home = () => {
  const [mydata, setmydata] = useState([]);
  let totalPrice=0;
  // async function logMovies() {
  //   const response = await fetch("http://example.com/movies.json");
  //   const movies = await response.json();
  //   console.log(movies);
  // }

  useEffect(() => {
    fetch("http://localhost:3100/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, []);

  // const themeeetypography=useTheme()

const handledelete = (item) => {
    fetch(`http://localhost:3100/mydata/${item.id}`,{ method: "DELETE"})

    const newArr=mydata.filter((myObject)=>{
      return myObject.id !== item.id
    })

    setmydata(newArr)
  }



  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography variant="h6" sx={{ ml: "16px", fontSize: "1.3em" }}>
              {" "}
              {item.title}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mr: "33px",
                fontWeight: "500",
                fontSize: "0.8",
                opacity: "0.8",
              }}
            >
              {" "}
              $ {item.price}
            </Typography>

            <IconButton
              onClick={()=>{
                handledelete(item)
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <Close sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography variant="h6" color="initial"
      sx={{textAlign:"center",mt:"50px",mb:"30px" ,color:"Theme.pallete.ali1.main"}}
      >
      👉 You Spend ${totalPrice}

      </Typography>









      {/* <Typography variant="h5" color={themeeetypography.palette
// @ts-ignore
      .favcolor.main} sx={{textAlign: "center",margin:"50px"}}>Change Typography <br/>Color With Mode
      </Typography> */}
      {/* <Paper
        sx={{
          position:"relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt:"22px",
          pt:"27px",
          pb:"7px",

        }}
      >
        <Typography variant="h6" sx={{ml:"16px",fontSize:"1.3em"}}> GYM</Typography>
        <Typography variant="h6" sx={{
          mr:"33px",
          fontWeight:"500",
          fontSize:"0.8",
          opacity:"0.8"
        }}> $100</Typography>

        <IconButton sx={{position:"absolute",top:"0",right:"0"}}>
          <Close sx={{fontSize:"20px"}}/>
        </IconButton>
      </Paper> */}
      {/* <Paper
        sx={{
          position:"relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt:"22px",
          pt:"27px",
          pb:"7px",

        }}
      >
        <Typography variant="h6" sx={{ml:"16px",fontSize:"1.3em"}}> GYM</Typography>
        <Typography variant="h6" sx={{
          mr:"33px",
          fontWeight:"500",
          fontSize:"0.8",
          opacity:"0.8"
        }}> $100</Typography>

        <IconButton sx={{position:"absolute",top:"0",right:"0"}}>
          <Close sx={{fontSize:"20px"}}/>
        </IconButton>
      </Paper> */}
      {/* <Paper
        sx={{
          position:"relative",
          width: "366px",
          display: "flex",
          justifyContent: "space-between",
          mt:"22px",
          pt:"27px",
          pb:"7px",

        }}
      >
        <Typography variant="h6" sx={{ml:"16px",fontSize:"1.3em"}}> GYM</Typography>
        <Typography variant="h6" sx={{
          mr:"33px",
          fontWeight:"500",
          fontSize:"0.8",
          opacity:"0.8"
        }}> $100</Typography>

        <IconButton sx={{position:"absolute",top:"0",right:"0"}}>
          <Close sx={{fontSize:"20px"}}/>
        </IconButton>
      </Paper> */}
      {/* // app bar */}
      {/* <div>
      <Box sx={{ flexGrow: 1 }}>
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
        </Toolbar>
      </AppBar>
    </Box>

      </div>
   */}{" "}
    </Box>
  );
};

export default Home;
