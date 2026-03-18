import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Toolbar as MuiToolbar,
  AppBar,
  Box,
  Stack,
  Typography,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";

import SideMenuMobile from "./SideMenuMobile";
import MenuButton from "./MenuButton";

const Toolbar = styled(MuiToolbar)({
  width: "100%",
  padding: "10px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export default function AppNavbar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        display: { xs: "flex", md: "none" },

        background: "rgba(11,27,77,0.95)",
        backdropFilter: "blur(10px)",

        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 25px rgba(0,0,0,0.3)",

        px: 1,
      }}
    >
      <Toolbar>
        {/* LEFT */}
        <Stack direction="row" spacing={1.2} alignItems="center">
          <CustomIcon />

          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.3px",
            }}
          >
            Dashboard
          </Typography>
        </Stack>

        {/* RIGHT */}
        <MenuButton
          aria-label="menu"
          onClick={toggleDrawer(true)}
          sx={{
            width: 40,
            height: 40,
            borderRadius: "10px",

            background: "rgba(255,255,255,0.08)",
            color: "#fff",

            "&:hover": {
              background: "rgba(255,255,255,0.15)",
            },
          }}
        >
          <MenuRoundedIcon />
        </MenuButton>

        {/* MOBILE DRAWER */}
        <SideMenuMobile
          open={open}
          toggleDrawer={toggleDrawer}
          handleClose={() => setOpen(false)}
        />
      </Toolbar>
    </AppBar>
  );
}

export function CustomIcon() {
  return (
    <Box
      sx={{
        width: 34,
        height: 34,
        borderRadius: "10px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        background: "linear-gradient(135deg,#FF5A1F,#ff7a4d)",
        color: "#fff",

        boxShadow: "0 4px 12px rgba(255,90,31,0.4)",
      }}
    >
      <DashboardRoundedIcon sx={{ fontSize: 18 }} />
    </Box>
  );
}