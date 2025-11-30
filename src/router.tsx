import { createBrowserRouter } from "react-router-dom";
import Root from "./layouts/Root";
import Home from "./pages/Home";
import Seller from "./pages/Seller";
import Privacy from "./pages/Privacy";
import TermsAndConditionsPage from "./pages/TermCondition";
import CancellationRefundPolicy from "./pages/CancellationRefundPolicy";
import ShippingDeliveryPolicy from "./pages/ShippingDeliveryPolicy";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

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
            {
                path: "cancellation-refunds",
                element: <CancellationRefundPolicy />
            },
            {
                path: "shipping",
                element: <ShippingDeliveryPolicy />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blog/:id/:id",
                element: <SingleBlog />
            },
        ]
    }
])

export default router;