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
  TableSortLabel,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SortIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import { IModule } from '@/common/types';
import { SortOrder } from '@/common/hooks';

interface IModuleListProps {
  modules: IModule[];
  isLoading: boolean;
  onSortingOrderChange: () => void;
  order: SortOrder;
}

const ModuleList: React.FC<IModuleListProps> = ({ modules, isLoading, onSortingOrderChange, order }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

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
      {isMdUp ? (
        <TableContainer sx={{ flex: 1, display: 'table-cell' }} component={Paper}>
          <Table aria-label="Module List">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold' }}>Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold' }}>Description</Typography>
                </TableCell>
                <TableCell sortDirection={order}>
                  <TableSortLabel
                    aria-label="sort by stars"
                    IconComponent={SortIcon}
                    active={true}
                    direction={order}
                    onClick={onSortingOrderChange}
                  >
                    <Typography sx={{ fontWeight: 'bold' }}>Stars</Typography>
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontWeight: 'bold' }}>Homepage</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            {isLoading ? (
              renderTableSkeletons()
            ) : (
              <TableBody>
                {modules.length === 0 ? (
                  <TableRow>
                    <TableCell sx={{ borderBottom: 'none' }} colSpan={isSmUp ? 4 : 3}>
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
                      <TableCell>
                        <Typography variant="body1">{module.description}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                          <StarIcon sx={{ mr: 1, color: (theme) => theme.palette.primary.main }} fontSize="inherit" />
                          {module.stars}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{ display: 'flex', alignItems: 'flex-start', wordWrap: 'break-word' }}
                          href={module.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          component="a"
                          variant="body1"
                        >
                          <LinkIcon sx={{ mr: 1 }} />
                          {module.homepage}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      ) : null}
      {isMdUp ? null : (
        <Box sx={{ flex: 1, display: 'block' }}>
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
      )}
    </>
  );
};

export default ModuleList;
