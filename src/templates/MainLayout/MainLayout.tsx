import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '@/components/atoms/Header';
import Footer from '@/components/atoms/Footer';
import Sidebar from '@/components/organisms/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Sidebar />
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', my: 2 }}>
        {children}
      </Container>
    </Box>
    <Footer />
  </Box>
);

export default MainLayout;
