import React , {useEffect} from 'react';
import { styled, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import data from "../helpers/data.json";
import Container from "./Container"

const MainBoard =  styled("div")({
    width:"85%",
    backgroundColor:"rgb(245,247,248)"
})

const Box1 = styled(Box)({
    marginTop:"3rem",
})

const MyList = styled("ul")({
    display:"flex",
    paddingLeft:"0"
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

const PostContainer1 = styled(Box)({
    width:"100%",
    display:"flex",
    flexWrap:"wrap"
})

const PostContainer2 = styled(Box)({
    width:"100%",
    display:"flex",
    flexWrap:"wrap"
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

const firstData = data.posts_by_date['2021-06-17']
const secondData = data.posts_by_date['2021-07-01']


const Mainboard = () => {

    useEffect(() => {
      
        console.log(firstData, secondData)

    }, [])
    
 
  return (
    <MainBoard>
        <ThemeProvider theme={theme}>

        <Box1>
            <MyList>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color='secondary'/></Span> Published</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color="success"/></Span> Scheduled</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color="danger"/></Span> Need Approval</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color="error"/></Span> Error</Li>
                <Li><Span><FiberManualRecordIcon fontSize='inherit' color='primary'/></Span> Notes</Li>
            </MyList>
        </Box1>
        <Typography sx={{fontSize:"18px"}} color="secondary">17 June 2021</Typography>
         <PostContainer1>
            {
                firstData.map((item, index)=>(
                    <Container key={index} item={item}/>
                ))
            }
         </PostContainer1>
         <Typography sx={{fontSize:"18px"}} color="secondary">01 July 2021</Typography>
         <PostContainer2 sx={{marginBottom:"4rem"}}>
         {
                secondData.map((item, index)=>(
                    <Container key={index} item={item}/>
                ))
            }
         </PostContainer2>
          
        </ThemeProvider>  
        </MainBoard>
  )
}

export default Mainboard