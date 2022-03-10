import App from "../client/App";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
    {
        ...App,
        routes: [
            {
                path: "/",
                exact: true,
                ... Home
            },
            {
                ...NotFoundPage
            }
        ]
    }
];