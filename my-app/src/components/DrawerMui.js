import { Toolbar, styled } from "@mui/material";
import React, {useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import { FiberManualRecordRounded } from "@mui/icons-material";
import Collapse from '@mui/material/Collapse';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Toolbar1 = styled(Toolbar)({
  height: "100vh",
  alignItems: "start",
  paddingTop: "4rem",
  background: "rgba(57, 61, 66, 0.8)",
  color: "white",
});

const DrawerMui = () => {

    const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Toolbar1>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "#f55661" }}>
              <NotificationsNoneIcon />
            </ListItemIcon>
            <ListItemText>NOTIFICATIONS</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MonitorHeartIcon sx={{ color: "#f55661" }} />
            </ListItemIcon>
            <ListItemText>SUMMARY</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <NoteAltOutlinedIcon sx={{ color: "#f55661" }} />
            </ListItemIcon>
            <ListItemText>PUBLISH</ListItemText>
            {open ? <RemoveIcon /> : <AddIcon />}
          </ListItemButton>
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton >
                <ListItemIcon fontSize="small" sx={{color:"white"}}>
                  <FiberManualRecordRounded fontSize="inherit"/>
                </ListItemIcon>
                <ListItemText primary="Compose" />
              </ListItemButton>
              <ListItemButton >
                <ListItemIcon fontSize="small" sx={{color:"#f55661"}}>
                  <FiberManualRecordRounded fontSize="inherit"/>
                </ListItemIcon>
                <ListItemText primary="Feed" sx={{color:"#f55661"}} />
              </ListItemButton>
            </List>
          </Collapse>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QuestionAnswerOutlinedIcon sx={{ color: "#f55661" }} />
            </ListItemIcon>
            <ListItemText>ENGAGE</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HeadphonesOutlinedIcon sx={{ color: "#f55661" }} />
            </ListItemIcon>
            <ListItemText>LISTEN</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AutoGraphOutlinedIcon sx={{ color: "#f55661" }} />
            </ListItemIcon>
            <ListItemText>REPORT</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Toolbar1>
  );
};

export default DrawerMui;
