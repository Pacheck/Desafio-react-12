import { Route, Switch } from 'react-router-dom';

import MoviesPage from '../pages/movies-page';
import SeriesPage from '../pages/series-page';
import LandingPage from '../pages/landing-page';

const routes = [
    // {
    //     component: LandingPage,
    //     path: '/',
    //     otherConfigs: {
    //         exact: true,
    //     }
    // },
    {
        component: MoviesPage,
        path: '/movies',
        otherConfigs: null
    }, 
    {
        component: SeriesPage,
        path: '/series',
        otherConfigs: null
    }
];

const Routes = () => (
    <Switch>
        { routes.map((route, index) => (
            <Route key={index} path={route.path} component={route.component} {...route.otherConfigs} />
        ))}
    </Switch>
);

export default Routes;