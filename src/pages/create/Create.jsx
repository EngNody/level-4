

import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import "./Create.css";
import React from "react";
import { purple } from "@mui/material/colors";
import { ChevronRight } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";



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

  // const [title, settitle] = useState("");
  // const [titleError, setTitleError] = useState(false);

  // const [price, setprice] = useState(0);
  // const [priceError, setpriceError] = useState(false);

  // that code
  // const onSubmit = (data) => console.log(data)
  // or
//   const onSubmit = (data) => {
//      console.log(data);
//  }

const navigate =useNavigate()

const {
  register,
  handleSubmit,
  formState:
  { errors },
} = useForm()

const onSubmit = async ({ price, title }) => {
  price = Number(price);

  console.log(price, title )
  
  await  fetch("http://localhost:3100/mydata", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ price, title }),
  }).then(()=>{
    navigate("/")
  })
}

  return (
 <div> 
      <Box       onSubmit={handleSubmit(onSubmit)}
            autoComplete="off"
          component="form" sx={{ width: "380px" }} 
      >
      
        <TextField 
        // autoComplete="off"
        // onChange={(eo)=>{
        //   settitle(eo.target.value)
        // }}
          fullWidth={true}
          label="Transaction Title"
          sx={{ mt: "25px", display: "block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">👉</InputAdornment>,
          }}
          variant="filled"
          {...register("title")}
          error={Boolean(errors.title)}

        />
  
        <TextField
        //   onChange={(eo)=>{
        //   setprice(Number(eo.target.value))
        // }}
          fullWidth={true}
          label="Amount"
          sx={{ mt: "25px", display: "block" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
          type="number"
          {...register("price")}
          error={Boolean(errors.price)}

        />
  
        <ColorButton   type="submit" variant="contained" sx={{ mt: "22px" }} 
      
         onClick={(params) => {}}

        //   setTitleError(true)
        //   setpriceError(true)

        //   if(title){
        //     setTitleError(false)
        //   }
  
        //   if(price){
        //     setpriceError(false)
        //   }
  
        //     if(title.trim() && price){
        //       fetch("http://localhost:3100/mydata", {
        //               method: "POST",
        //               headers: {
        //                 "Content-Type": "application/json",
        //               },
        //               body: JSON.stringify({ price, title }),
        //             }).then(()=>{
        //               navigate("/")
        //             })
        //     }


        //   }}
        >
          Submit 
          <ChevronRight></ChevronRight>
        </ColorButton>
      </Box>
  
      {/* // <br/> */}
      {/* // <br/> */}

      {/* <form action="" 
      onSubmit={handleSubmit(onSubmit)}>
        
          <input type="text"  {...register("userName",{required:true,minLength:3})}/>
          <br/>
          <br/>
          
          <Button type="submit" variant="contained">Submit</Button>
          <br/>
          <br/>
          {errors.userName?.type === "required" &&  <h3 style={{color:"red"}}>This field is required</h3>}
          {errors.userName?.type === "minLength" &&  <h3 style={{color:"red"}}>minLength is 3</h3>}

      </form> */}
</div>




  );
};

export default Create;
