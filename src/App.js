import { RouterProvider } from 'react-router-dom';
import rootRouter from './routers';
import { getGlobalTheme } from './styles/global';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';

function App() {

    const mode = 'light';

    const theme = useMemo(
        () =>
            createTheme({
                ...getGlobalTheme(mode),
                typography: {
                    fontFamily: 'Pretendard, Arial, sans-serif',
                },
            }),
        [mode],
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles
                styles={{
                    html: {
                        height: '100%',
                        backgroundColor: theme.palette.background.default,
                        fontFamily: 'Pretendard, Arial, sans-serif',
                    },
                    body: {
                        height: '100%',
                        margin: 0,
                        backgroundColor: theme.palette.background.default,
                        fontFamily: 'Pretendard, Arial, sans-serif',
                    },
                    '#root': {
                        height: '100%',
                        backgroundColor: theme.palette.background.default,
                        fontFamily: 'Pretendard, Arial, sans-serif',
                    },
                }}
            />
            <RouterProvider router={rootRouter}/>
        </ThemeProvider>
    );
}

export default App;
