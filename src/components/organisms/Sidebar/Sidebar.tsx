import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton, useTheme } from '@mui/material';

const Sidebar: React.FC = () => {
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          position: 'relative',
        },
        display: { xs: 'none', md: 'block' },
      }}
    >
      <List sx={{ fontWeight: 700, width: 240, color: theme.palette.secondary.main }}>
        <ListItemButton>
          <ListItemText sx={{}} primary="Home" />
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemText primary="Creating Packages" />
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemText primary="API" />
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemText primary="Configuration" />
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemText primary="Pluggable Resolvers" />
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemText primary="Tools" />
        </ListItemButton>
        <ListItemButton disabled>
          <ListItemText primary="About" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
