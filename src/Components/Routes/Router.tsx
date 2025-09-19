import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Expenses from '../Pages/Expenses/Expenses';
import Reports from '../Pages/Reports/Reports';
import Settings from '../Pages/Settings/Settings';
import PageError from '../Features/PageError/PageError';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/expenses', element: <Expenses />},
            { path: '/reports', element: <Reports />},
            { path: '/settings', element: <Settings />},
            { path: '*', element: <PageError /> }
        ]
    }
])