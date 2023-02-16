import { Home } from "../componets/pages/Home";
import { Page404 } from "../componets/pages/page404";
import { Setting } from "../componets/pages/Setting";
import { UserManagement } from "../componets/pages/UserManagement";

export const homeRoutes = [
    {
        path: '/',
        exact: true,
        children: <Home />
    },
    {
        path: '/user_management',
        exact: false,
        children: <UserManagement />
    },
    {
        path: '/setting',
        exact: false,
        children: <Setting />
    },
    {
        path: '/*',
        exact: false,
        children: <Page404 />
    },
]