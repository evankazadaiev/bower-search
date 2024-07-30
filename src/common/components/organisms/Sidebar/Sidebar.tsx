import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton, useMediaQuery, useTheme } from '@mui/material';

const Sidebar: React.FC = () => {
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  if (!isMdUp) {
    return null;
  }

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
        display: 'block',
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
