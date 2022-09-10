import React, {useState} from 'react';
import {styled, Typography, Drawer, Badge} from "@mui/material";
import logos from "../helpers/logos.json"
import DrawerMui from './DrawerMui';
import { createTheme, ThemeProvider } from '@mui/material/styles'

const SidebarComp = styled ("div") ({
    flex:"2",
    width:"100%",
    backgroundColor:"rgb(245,247,248)"
})

const Inner = styled ("div") ({
    background: "rgba(57, 61, 66,0.8)",
    width:"25%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center"

})

const Logos = styled ("div") ({
    height:"100vh",
    width:"100%",
    padding:"0",
    color:"white"
    
})
const Logo = styled ("div")({
    backgroundColor : "rgb(245,247,248)",
    padding:"0.5rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
})

const ImgCont = styled("div") ({
    paddingTop:"0.75rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%"
})

const Img = styled("img")({
    width:"2.5rem",
    height:"2.5rem",
    borderRadius:"5px",
    cursor:"pointer"
})

const MyDrawer = styled(Drawer)({
    width:240,
    background:"rgba(255,255,255,0)" 
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


const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const drawerToggle = () => {
        setOpen(!open)
      };



  return (
    <SidebarComp>
        <ThemeProvider theme={theme}>
        <Logo>
            <Typography variant="h5">sociality.io</Typography>
        </Logo>
        
        <Inner>
        <Logos>
            {logos.map(logo=>{
                return(
                    <ImgCont key={logo.id} >
                        <Badge badgeContent={logo.badge} color="success" >
                        <Img src={logo.image} alt="logo" onClick={drawerToggle}/>
                        </Badge>   
                    </ImgCont>
                )
            })}
        </Logos>
        </Inner>
        <MyDrawer
        variant="temporary"
        open={open}
        onClose={drawerToggle}
        >
            <DrawerMui />
        </MyDrawer>
        </ThemeProvider>
        
          
    </SidebarComp>
  )
}

export default Sidebar