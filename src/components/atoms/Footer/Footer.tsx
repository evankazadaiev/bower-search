import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (
    <Box sx={{ p: 2, textAlign: 'center', borderTop: '1px solid #ddd' }}>
        <Typography variant="body2">
            © 2024 Bower Search
        </Typography>
    </Box>
);

export default Footer;
