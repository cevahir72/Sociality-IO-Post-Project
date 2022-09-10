import React from 'react';
import { styled, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const MainBoard =  styled("div")({
    flex:"8",
    backgroundColor:"rgb(245,247,248)"
})

const MyList = styled("ul")({
    display:"flex",
    
})
const Span = styled("span")({
    width:"10px",
    height:"10px",
    borderRadius:"50%",
    fontSize:"small"
})

const Li = styled("li")({
    listStyle:"none",
    fontFamily:"Poppins",
    marginLeft:"1rem"
})

const theme = createTheme({
    palette:{
        success:{
            main:"#3ac183"
        },
        error:{
            main:"#f55661"
        },
        danger:{
            main:"#f7bf38"
        },
        secondary:{
            main:"#acacac"
        },
        primary:{
            main:"#67b1f2"
        }
    }
})



const Mainboard = () => {
  return (
    <MainBoard>
        <ThemeProvider theme={theme}>

        <Box>
            <MyList>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color='secondary'/></Span> Published</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color="success"/></Span> Scheduled</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color="danger"/></Span> Need Approval</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color="error"/></Span> Error</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color='primary'/></Span> Notes</Li>
            </MyList>
        </Box>
          
        </ThemeProvider>  
        </MainBoard>
  )
}

export default Mainboard