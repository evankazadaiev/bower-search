import React from 'react';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';

interface IModuleListProps {
  modules: IModule[];
  isLoading: boolean;
}

const ModuleList: React.FC<IModuleListProps> = ({ modules, isLoading }) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  const renderTableSkeletons = () => (
    <TableBody>
      {[...Array(5)].map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <Skeleton variant="text" width="80%" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width="60%" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width="40%" />
          </TableCell>
          <TableCell>
            <Skeleton variant="text" width="40%" />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  const renderMobileSkeletons = () => (
    <>
      {[...Array(5)].map((_, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${index}-content`}
            id={`skeleton-${index}`}
          >
            <Skeleton variant="text" width="80%" />
          </AccordionSummary>
          <AccordionDetails>
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="60%" />
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );

  return (
    <>
      <TableContainer sx={{ flex: 1, display: { xs: 'none', md: 'table-cell' } }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: 'bold' }}>Description</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: 'bold' }}>Stars</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          {isLoading ? (
            renderTableSkeletons()
          ) : (
            <TableBody>
              {modules.length === 0 ? (
                <TableRow>
                  <TableCell sx={{ borderBottom: 'none' }} colSpan={isTablet ? 4 : 3}>
                    <Alert variant="outlined" severity="error">
                      Sorry, there was an error while fetching repositories.
                    </Alert>
                    {/*<Typography>Sorry, there was an error while fetching repositories.</Typography>*/}
                  </TableCell>
                </TableRow>
              ) : (
                modules.map((module) => (
                  <TableRow key={module.name}>
                    <TableCell>
                      <Typography variant="subtitle1">{module.name}</Typography>
                    </TableCell>
                    <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                      <Typography variant="body1">{module.description}</Typography>
                    </TableCell>
                    <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
                      <Typography variant="body1" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                        <StarIcon sx={{ mr: 1, color: (theme) => theme.palette.primary.main }} fontSize="inherit" />
                        {module.stars}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <Box sx={{ flex: 1, display: { xs: 'block', md: 'none' } }}>
        {isLoading ? (
          renderMobileSkeletons()
        ) : modules.length === 0 ? (
          <Alert variant="outlined" severity="error">
            Sorry, there was an error while fetching repositories.
          </Alert>
        ) : (
          modules.map((module) => (
            <Accordion key={module.name}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel-${module.name}-content`}>
                <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1">
                  {module.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  <strong>Description:</strong> {module.description}
                </Typography>
                <Typography variant="body1">
                  <strong>Stars:</strong> {module.stars}
                </Typography>
                <Typography variant="body1">
                  <strong>Forks:</strong> {module.forks}
                </Typography>
                <Typography variant="body1">
                  <strong>Homepage:</strong>{' '}
                  <a
                    style={{ wordWrap: 'break-word' }}
                    href={module.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {module.homepage}
                  </a>
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        )}
      </Box>
    </>
  );
};

export default ModuleList;
