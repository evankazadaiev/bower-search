import React from 'react';
import SearchPage from './pages/SearchPage';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/theme.ts';
import './index.scss';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SearchPage />
  </ThemeProvider>
);

export default App;
