import React, { useState } from "react";
import { styled, Typography, Badge } from "@mui/material";
import logos from "../helpers/logos.json";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./Drawer.css";
//ICONS
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import { FiberManualRecordRounded } from "@mui/icons-material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const SidebarComp = styled("div")({
  width: "15%",
  backgroundColor: "rgb(245,247,248)",
});

const Inner = styled("div")({
  background: "#ACACAC",
  width: "25%",
  height:"100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Logos = styled("div")({
  height: "120vh",
  width: "100%",
  padding: "0",
  color: "white",
});
const Logo = styled("div")({
  background: "rgb(253,253,255)",
  background:
    "linear-gradient(270deg, rgba(253,253,255,1) 0%, rgba(162,161,161,0.8799894957983193) 0%, rgba(255,255,255,1) 100%)",
  padding: "0.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "274px",
  height: "51px",
});

const ImgCont = styled("div")({
  paddingTop: "0.75rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

const Img = styled("img")({
  width: "37px",
  height: "37px",
  borderRadius: "5px",
  cursor: "pointer",
});

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

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const drawerToggle = () => {
    setOpen(!open);
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <SidebarComp>
      <Logo>
        <Typography sx={{ fontSize: "28px" }}>
          <strong>sociality</strong>.io
        </Typography>
      </Logo>

      <Inner>
        <Logos>
          {logos.map((logo) => {
            return (
              <ImgCont key={logo.id}>
                <Badge badgeContent={logo.badge} color="success">
                  <Img src={logo.image} alt="logo" onClick={drawerToggle} />
                </Badge>
              </ImgCont>
            );
          })}
        </Logos>
      </Inner>
      <Drawer
        open={open}
        onClose={drawerToggle}
        direction="left"
        className="drawer"
        overlayOpacity="0.1"
        size={259}
      >
        <div className="main">
          <div className="left"></div>
          <div className="right">
            <div id="button1" className="button">
              <span className="icons">
                <NotificationsNoneIcon
                  fontSize="small"
                  sx={{ color: "#f55661", opacity: "1" }}
                />
              </span>
              NOTIFICATIONS
              <span className="number">29</span>
            </div>
            <div className="button">
              <span className="icons">
                <MonitorHeartIcon
                  fontSize="small"
                  sx={{ color: "#f55661", opacity: "1" }}
                />
              </span>
              SUMMARY
            </div>

            {menuOpen ? (
                <>
              <div className="button-red">
                <span className="icons">
                  <NoteAltOutlinedIcon
                    fontSize="small"
                    sx={{ color: "white", opacity: "1" }}
                  />
                </span>
                <span>PUBLISH</span> 
                <span className="plus-minus"><RemoveIcon onClick={menuToggle}/></span>
              </div>
              <div className="button">
                <span className="icons">
                  <FiberManualRecordRounded
                    fontSize="small"
                    sx={{ color: "white", opacity: "1" ,fontSize:"14px"}}
                  />
                </span>
                Compose
              </div>
              <div className="button">
                <span className="icons">
                  <FiberManualRecordRounded
                    sx={{ color: "#f55661", opacity: "1", fontSize:"14px" }}
                  />
                </span>
                <span style={{color:"#f55661"}}>Feed</span> 
              </div>
              </>
            ) : (
              <div className="button">
                <span className="icons">
                  <NoteAltOutlinedIcon
                    fontSize="small"
                    sx={{ color: "#f55661", opacity: "1" }}
                  />
                </span>
                <span>PUBLISH</span> 
                <span className="plus-minus"><AddIcon onClick={menuToggle}/></span>
              </div>
            )}

            <div className="button">
              <span className="icons">
                <QuestionAnswerOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#f55661", opacity: "1" }}
                />
              </span>
              ENGAGE
            </div>
            <div className="button">
              <span className="icons">
                <HeadphonesOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#f55661", opacity: "1" }}
                />
              </span>
              LISTEN
            </div>
            <div className="button">
              <span className="icons">
                <AutoGraphOutlinedIcon
                  fontSize="small"
                  sx={{ color: "#f55661", opacity: "1" }}
                />
              </span>
              REPORT
            </div>
          </div>
        </div>
      </Drawer>
    </SidebarComp>
  );
};

export default Sidebar;
