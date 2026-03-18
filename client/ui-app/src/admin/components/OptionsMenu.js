import * as React from "react";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Box from "@mui/material/Box";

import MenuButton from "./MenuButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/action/authAction.js";

const MenuItem = styled(MuiMenuItem)({
  borderRadius: 10,
  margin: "4px 0",
  padding: "10px 12px",
});

export default function OptionsMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleProfileClick = () => {
    handleClose();
    navigate("/dashboard/profile");
  };

  const handleLogout = async () => {
    const id = user?._id?.$oid;
    await dispatch(logout(id));
    handleClose();
    navigate("/admin");
  };

  return (
    <>
      {/* AVATAR BUTTON */}
      <MenuButton
        onClick={handleClick}
        sx={{
          p: 0,
          borderRadius: "12px",
        }}
      >
        <Box
          sx={{
            width: 42,
            height: 42,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background: "linear-gradient(135deg,#FF5A1F,#ff7a4d)",
            color: "#fff",

            boxShadow: "0 6px 18px rgba(255,90,31,0.4)",

            transition: "0.25s",

            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <AccountCircleRoundedIcon sx={{ fontSize: 26 }} />
        </Box>
      </MenuButton>

      {/* MENU */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 220,
            borderRadius: "14px",

            background: "rgba(15,23,42,0.95)",
            backdropFilter: "blur(12px)",

            border: "1px solid rgba(255,255,255,0.08)",

            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",

            p: 1,
          },
        }}
      >
        <MenuItem onClick={handleProfileClick}>
          <ListItemIcon sx={{ color: "#9AA4C7" }}>
            <PersonRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Profile"
            primaryTypographyProps={{
              fontSize: "0.95rem",
              color: "#fff",
            }}
          />
        </MenuItem>

        <MenuItem onClick={handleProfileClick}>
          <ListItemIcon sx={{ color: "#9AA4C7" }}>
            <AccountCircleRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="My Account"
            primaryTypographyProps={{
              fontSize: "0.95rem",
              color: "#fff",
            }}
          />
        </MenuItem>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 1 }} />

        {/* SETTINGS */}
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ color: "#9AA4C7" }}>
            <SettingsRoundedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Settings"
            primaryTypographyProps={{
              fontSize: "0.95rem",
              color: "#fff",
            }}
          />
        </MenuItem>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", my: 1 }} />

        {/* LOGOUT */}
        <MenuItem
          onClick={handleLogout}
          sx={{
            color: "#ff4d4f",
            "&:hover": {
              background: "rgba(255,77,79,0.12)",
            },
          }}
        >
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{
              fontSize: "0.95rem",
              fontWeight: 600,
            }}
          />
          <ListItemIcon sx={{ color: "#ff4d4f", minWidth: 0 }}>
            <LogoutRoundedIcon fontSize="small" />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </>
  );
}