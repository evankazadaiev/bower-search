import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';
import theme from '@/theme.ts';
import { ThemeProvider } from '@mui/material';

const AllProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const renderRTL = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProviders, ...options });
