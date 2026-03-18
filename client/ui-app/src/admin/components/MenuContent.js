import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
  Box,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CategoryIcon from "@mui/icons-material/Category";
import BusinessIcon from "@mui/icons-material/Business";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import InterpreterModeIcon from "@mui/icons-material/InterpreterMode";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TodayIcon from "@mui/icons-material/Today";
import DatasetIcon from "@mui/icons-material/Dataset";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

import { useNavigate, useLocation } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const mainListItems = [
    { text: "Home", icon: HomeRoundedIcon, path: "/dashboard" },
    { text: "Clients", icon: SupportAgentIcon, path: "/dashboard/clients" },
    { text: "Business", icon: BusinessIcon, path: "/dashboard/business" },
    { text: "Category", icon: CategoryIcon, path: "/dashboard/category" },
    { text: "SEO Management", icon: DatasetIcon, path: "/dashboard/seo" },
    { text: "SEO Content", icon: DatasetIcon, path: "/dashboard/seopagecontent" },
    { text: "Users", icon: InterpreterModeIcon, path: "/dashboard/user" },
    { text: "Roles", icon: AdminPanelSettingsIcon, path: "/dashboard/roles" },
    { text: "Enquiry", icon: TodayIcon, path: "/dashboard/enquiry" },
    { text: "Ads", icon: TodayIcon, path: "/dashboard/advertisements" },
    { text: "MNI", icon: CorporateFareIcon, path: "/dashboard/mni-data" },
  ];

  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,

        display: "flex",
        flexDirection: "column",

        background: "linear-gradient(180deg,#0B1B4D,#111f5c)",

        borderRight: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      {/* LOGO */}
      <Box sx={{ px: 3, py: 3 }}>
        <Typography
          sx={{
            fontSize: "1.6rem",
            fontWeight: 700,
            letterSpacing: "0.5px",

            background: "linear-gradient(135deg,#FF5A1F,#ff7a4d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Massclick
        </Typography>
      </Box>

      {/* MENU */}
      <List
        sx={{
          px: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 2.2,
        }}
      >
        {mainListItems.map((item, i) => {
          const active = location.pathname === item.path;
          const Icon = item.icon;

          return (
            <ListItem key={i} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: "12px",
                  px: 2,
                  py: 1.4,

                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,

                  position: "relative",

                  // 🔥 FORCE FULL COLOR
                  color: active ? "#ffffff" : "#ffffff",

                  background: active
                    ? "linear-gradient(135deg,#FF5A1F,#ff7a4d)"
                    : "transparent",

                  boxShadow: active
                    ? "0 8px 25px rgba(255,90,31,0.35)"
                    : "none",

                  transition: "all 0.25s ease",

                  "&:hover": {
                    background: active
                      ? "linear-gradient(135deg,#FF5A1F,#ff7a4d)"
                      : "rgba(255,255,255,0.08)",
                    color: "#ffffff",
                  },

                  // 🔥 REMOVE FADE EFFECT
                  opacity: 1,

                  // 🔥 FORCE CHILD TEXT + ICON COLOR
                  "& .MuiTypography-root": {
                    color: "inherit",
                    opacity: 1,
                  },

                  "& .MuiListItemIcon-root": {
                    color: "inherit",
                    opacity: 1,
                  },

                  "& svg": {
                    color: "inherit",
                    opacity: 1,
                  },

                  "&::before": active
                    ? {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      top: "20%",
                      bottom: "20%",
                      width: "4px",
                      borderRadius: "10px",
                      background: "#fff",
                    }
                    : {},
                }}
              >
                {/* ICON */}
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    color: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,
                      borderRadius: "10px",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      background: active
                        ? "rgba(255,255,255,0.25)"
                        : "rgba(255,255,255,0.12)",

                      transition: "0.2s",
                    }}
                  >
                    <Icon sx={{ fontSize: 20 }} />
                  </Box>
                </ListItemIcon>

                {/* TEXT */}
                <Typography
                  sx={{
                    fontSize: "0.95rem",
                    fontWeight: active ? 600 : 500,
                    letterSpacing: "0.3px",

                    color: "inherit",
                    opacity: 1, 

                    textRendering: "optimizeLegibility", 
                  }}
                >
                  {item.text}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* SPACER */}
      <Box sx={{ flexGrow: 1 }} />

      {/* USER */}
      <Box
        sx={{
          mx: 2,
          mb: 2,
          p: 2,
          borderRadius: "12px",

          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",

          backdropFilter: "blur(10px)",
        }}
      >
        <Typography sx={{ fontSize: "0.75rem", color: "#9AA4C7" }}>
          Logged in as
        </Typography>

        <Typography
          sx={{
            fontSize: "1rem",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Admin User
        </Typography>
      </Box>
    </Box>
  );
}