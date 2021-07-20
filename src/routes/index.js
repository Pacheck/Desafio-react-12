import { Route, Switch } from 'react-router-dom';

import MoviesPage from '../pages/movies-page';
import SeriesPage from '../pages/series-page';
import LandingPage from '../pages/landing-page';

const routes = [
    {
        component: LandingPage,
        otherConfigs: {
            path: '/',
            exact: true,
        }
    },
    {
        component: MoviesPage,
        otherConfigs: {
            path: '/movies',
            exact: false,
        }
    }, 
    {
        component: SeriesPage,
        otherConfigs: {
            path: '/series',
            exact: false,
        }
    }
];

const Routes = () => (
    <Switch>
        { routes.map(({ path, component, otherConfigs}, index) => (
            <Route key={index} path={path} component={component} {...otherConfigs} />
        ))}
    </Switch>
);

export default Routes;