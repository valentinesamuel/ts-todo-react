import { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './themes/customeTheme';
import { DashBoard } from './pages/dashboard';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ComposeContext from './context/compose.context';
import { rootContext } from './context/root.context';

const queryClient = new QueryClient();

const App: FC = (): ReactElement => {
  return (
    <QueryClientProvider client={queryClient}>
      <ComposeContext components={rootContext}>
        <ThemeProvider theme={customTheme}>
          <CssBaseline />
          <DashBoard />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </ComposeContext>
    </QueryClientProvider>
  );
};
export default App;
