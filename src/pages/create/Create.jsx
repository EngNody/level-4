import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import React, { useState } from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: theme.palette.primary.main,
  // @ts-ignore
  backgroundColor: theme.palette.favcolor.main,
  "&:hover": {
    // backgroundColor: theme.palette.primary.light,
    // @ts-ignore
    backgroundColor: theme.palette.favcolorhover.main,
    scale: "0.97",
  },
}));

const Create = () => {

  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate =useNavigate()


  return (
    <Box component="form" sx={{ width: "380px" }} >
      <TextField 
      autoComplete="off"
      onChange={(eo)=>{
        settitle(eo.target.value)
      }}
        fullWidth
        label="Transaction Title"
        sx={{ mt: "25px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">👉</InputAdornment>,
        }}
        variant="filled"
      />

      <TextField
        onChange={(eo)=>{
        setprice(Number(eo.target.value))
      }}
        fullWidth={true}
        label="Amount"
        sx={{ mt: "25px", display: "block" }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="filled"
      />

      <ColorButton variant="contained" sx={{ mt: "22px" }} 
       onClick={(params) => {
          fetch("http://localhost:3100/mydata", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ price, title }),
          }).then(()=>{
            navigate("/")
          })
        }}
      >
        Submit <ChevronRight></ChevronRight>
      </ColorButton>
    </Box>
  );
};

export default Create;
