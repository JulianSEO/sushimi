import React from "react";
import {
  Drawer,
  List,
  Toolbar,
  Box,
  ListItem,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  return (
    <React.Fragment>
      <Drawer variant="permanent">
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
