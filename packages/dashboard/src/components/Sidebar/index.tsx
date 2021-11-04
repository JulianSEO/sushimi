import React from "react";
import {
  Drawer,
  List,
  Toolbar,
  Box,
  ListItem,
  ListItemText,
} from "@mui/material";

const SidebarWidth = 240;

const Sidebar = () => {
  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        sx={{
          width: SidebarWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: SidebarWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box>
          <List>
            <ListItem button>
              <ListItemText>Text</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default Sidebar;
