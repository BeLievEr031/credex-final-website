import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import Seller from "./pages/Seller";
import Privacy from "./pages/Privacy";
import TermsAndConditionsPage from "./pages/TermCondition";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "seller",
                element: <Seller />
            },
            {
                path: "privacy",
                element: <Privacy />
            },
            {
                path: "term-condition",
                element: <TermsAndConditionsPage />
            },
        ]
    }
])

export default router;