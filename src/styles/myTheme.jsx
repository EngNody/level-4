


const getDesignTokens = (mode) => ({
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
      main: '#9999',
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





export default getDesignTokens;
