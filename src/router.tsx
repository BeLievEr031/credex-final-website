import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ThankYou from "./pages/ThankYou";

const Root = lazy(() => import("./layouts/Root"));
const Home = lazy(() => import("./pages/Home"));
const Seller = lazy(() => import("./pages/Seller"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TermsAndConditionsPage = lazy(() => import("./pages/TermCondition"));
const CancellationRefundPolicy = lazy(() => import("./pages/CancellationRefundPolicy"));
const ShippingDeliveryPolicy = lazy(() => import("./pages/ShippingDeliveryPolicy"));
const Blog = lazy(() => import("./pages/Blog"));

const DynamicSingleBlog = lazy(() => import("./pages/DynamicSingleBlog"));
const RefferalForm = lazy(() => import("./pages/RefferalForm"));

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
                path: "form-submission",
                element: <ThankYou />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "blog/:slug",
                element: <DynamicSingleBlog />
            },
            {
                path: "refferal/seller",
                element: <RefferalForm />
            },
            {
                path: "refferal/buyer",
                element: <RefferalForm />
            },
        ]
    }
])

export default router;