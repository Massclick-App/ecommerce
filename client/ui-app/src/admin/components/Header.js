import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import Badge from "@mui/material/Badge";
import CustomDatePicker from "../components/customDatePicker";
import NavbarBreadcrumbs from "./NavbarBreadCrump.js";
import MenuButton from "./MenuButton";
import OptionsMenu from "./OptionsMenu.js";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 2, md: 3 },
        py: 2,
        mb: 3,

        borderRadius: "14px",

        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",

        boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT */}
        <Box>
          <NavbarBreadcrumbs />

          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "#9AA4C7",
              mt: 0.5,
            }}
          >
            Welcome back 👋
          </Typography>
        </Box>

        {/* RIGHT */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          {/* DATE */}
          <Box
            sx={{
              "& > *": {
                borderRadius: "10px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                px: 1,
              },
            }}
          >
            <CustomDatePicker />
          </Box>

          <MenuButton
            aria-label="Open notifications"
            onClick={handleOpen}
            sx={{
              width: 42,
              height: 42,
              borderRadius: "10px",

              background: "#fff",
              border: "1px solid #e5e7eb",

              color: "#0B1B4D",

              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",

              "&:hover": {
                background: "#f9fafb",
              },
            }}
          >
            <Badge badgeContent={3} color="error">
              <NotificationsRoundedIcon fontSize="small" />
            </Badge>
          </MenuButton>

          <Box
            sx={{
              "& > *": {
                borderRadius: "10px",
                background: "#FF5A1F",
                color: "#fff",
                boxShadow: "0 4px 12px rgba(255,90,31,0.3)",
              },
            }}
          >
            <OptionsMenu />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}