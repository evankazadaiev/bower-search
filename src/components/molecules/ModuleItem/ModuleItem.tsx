import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface IModuleItemProps {
    name: string;
    owner: string;
    stars: number;
}

const ModuleItem: React.FC<IModuleItemProps> = ({ name, owner, stars }) => (
    <ListItem>
        <ListItemText primary={name} secondary={`Owner: ${owner} | Stars: ${stars}`} />
    </ListItem>
);

export default ModuleItem;
