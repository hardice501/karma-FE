import { createBrowserRouter } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const rootRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <Box>
                    <Typography>Hello World</Typography>
                </Box>
            )
        },
    ],
);

export default rootRouter;
