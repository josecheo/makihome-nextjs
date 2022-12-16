import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#8ec038",
    },
    secondary: {
      main: "#da2424",
    },
  },
});

export default lightTheme;