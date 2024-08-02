import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';


const rootRouter = createBrowserRouter(
    [
        {
            path: '/',
            element: (
                <Home />
            )
        },
        {
            path: '/work',
            element: (
                <Work />
            )
        },
    ],
);

export default rootRouter;
