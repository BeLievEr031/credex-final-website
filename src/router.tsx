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
import SingleBlog2 from "./pages/SingleBlog2";
import SingleBlog3 from "./pages/SingleBlog3";
import SingleBlog4 from "./pages/SingleBlog4";

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
                path: "blog/a-million-dollar-email",
                element: <SingleBlog />
            },
            {
                path: "blog/how-we-bootstrapped-a-fintech-startup-to-$2m-arr-using-smart-ai-infrastructure:-a-founder’s-case-study",
                element: <SingleBlog2 />
            },
            {
                path: "blog/the-unit-economics-of-virality:-how-we-scaled-gemini-1.5-pro-to-50k-users-without-going-bankrupt",
                element: <SingleBlog3 />
            },
            {
                path: "blog/aws-costs-kill-valuations-how-a-$287k-aws-bill-almost-killed-a-$50m-exit",
                element: <SingleBlog4 />
            },
        ]
    }
])

export default router;