import React from "react";
//MATERIAL-UI COMPONENTS
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
//ICONS
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton, Paper, Typography, Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
//NO POST IMAGE
import noPostImage from "../helpers/no-post-image.png";
//MATERIAL THEME
import { createTheme, ThemeProvider } from "@mui/material/styles";
//DATE-FNS
import {format} from "date-fns";

const Paper1 = styled(Paper)({
  width: "369px",
  height: "446px",
  display: "flex",
  marginRight: "40px",
  marginTop: "20px",
  marginBottom: "20px",
});


const Card1 = styled(Card)({
  width: "329px",
  height: "446px",
  border: "none",
});



const MyCard = ({ item, entry }) => {
  const dateFormat = (date) => {
    const d = new Date(date);

    return d;
  };

  const theme = createTheme({
    palette: {
      success: {
        main: "#3ac183",
      },
      error: {
        main: "#f55661",
      },
      danger: {
        main: "#f7bf38",
      },
      secondary: {
        main: "#acacac",
      },
      primary: {
        main: "#67b1f2",
      },
    },
  });

  return (
    <Paper1>
      <ThemeProvider theme={theme}>
        {item.status === 1 && (
          <Box
            sx={{
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3ac183",
            }}
          >
            {item.account.channel === "instagrambusiness" && (
              <InstagramIcon sx={{ color: "white" }} />
            )}
            {item.account.channel === "twitter" && (
              <TwitterIcon sx={{ color: "white" }} />
            )}
            {item.account.channel === "facebook" && (
              <FacebookOutlinedIcon sx={{ color: "white" }} />
            )}
          </Box>
        )}
        {item.status === 3 && (
          <Box
            sx={{
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#959595",
            }}
          >
            {item.account.channel === "instagrambusiness" && (
              <InstagramIcon sx={{ color: "white" }} />
            )}
            {item.account.channel === "twitter" && (
              <TwitterIcon sx={{ color: "white" }} />
            )}
            {item.account.channel === "facebook" && (
              <FacebookOutlinedIcon sx={{ color: "white" }} />
            )}
          </Box>
        )}
        {item.status === 0 && (
          <Box
            sx={{
              width: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#F7BF38",
            }}
          >
            {item.account.channel === "instagrambusiness" && (
              <InstagramIcon sx={{ color: "white" }} />
            )}
            {item.account.channel === "twitter" && (
              <TwitterIcon sx={{ color: "white" }} />
            )}
            {item.account.channel === "facebook" && (
              <FacebookOutlinedIcon sx={{ color: "white" }} />
            )}
          </Box>
        )}

        <Box>
          <Card1>
            <Box sx={{display:"flex", justifyContent:"space-between",padding:"16px", alignItems:"center"}}>
                <Box>
                  <Typography sx={{fontSize:"14px", color:"#ACACAC"}}>{item.published_at}</Typography>
                  {/* <Typography sx={{fontSize:"14px", color:"#ACACAC"}}>{`${format(item.published_at,"yyyy-MM-dd'T'HH:mm:ss")}`}</Typography> */}
                </Box>
                <Box >
                <IconButton size="small">
                <DoDisturbIcon fontSize="inherit"  color="secondary"/>
              </IconButton>
              <IconButton size="small">
                <DeleteIcon  fontSize="inherit" color="secondary"/>
              </IconButton >
              <IconButton size="small">
                <MoreHorizIcon fontSize="inherit" color="secondary"/>
              </IconButton>
                </Box>

            </Box>
            <CardContent>
              <Typography sx={{color:"#959595", fontSize:"14px"}}>{entry.message}</Typography>
            </CardContent>
            {/* {
              !entry.image[0] ? (
                <Box sx={{width:"329px",height:"239px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <img src={noPostImage} alt="NO-POST-IMAGE" style={{width:"284px", height:"239px"}}/>
                  </Box>
              ): (
                <Box sx={{width:"329px",height:"239px", paddingLeft:"16px"}}><img src={entry.image[0]} alt="NO-POST-IMAGE" style={{width:"284px", height:"239px"}}/></Box>
              )
            } */}
            <Box sx={{width:"329px",height:"239px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={ entry.image || noPostImage  } alt="NO-POST-IMAGE" style={{width:"284px", height:"239px"}}/>
            </Box>


            <CardActions disableSpacing>
              <IconButton >
                <ThumbUpOutlinedIcon  color="secondary"/>
              </IconButton>
              <Typography color="secondary">0</Typography>
              <IconButton >
                <ModeCommentOutlinedIcon color="secondary"/>
              </IconButton>
              <Typography color="secondary">0</Typography>
              <IconButton >
                <ShareOutlinedIcon color="secondary"/>
              </IconButton>
              <Typography color="secondary">0</Typography>
              <IconButton >
                <VisibilityOutlinedIcon color="secondary"/>
              </IconButton>
              <Typography color="secondary">0</Typography>
            </CardActions>
          </Card1>
        </Box>
      </ThemeProvider>
    </Paper1>
  );
};

export default MyCard;
