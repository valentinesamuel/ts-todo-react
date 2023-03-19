import { FC, ReactElement } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { customTheme } from './themes/customeTheme';

const App:FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <h1>Hwllo World</h1>
    </ThemeProvider>
  );
};
export default App;
