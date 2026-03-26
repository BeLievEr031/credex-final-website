import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ThankYou from "./pages/ThankYou";
import SingleBlog8 from "./pages/SingleBlog8";
import SingleBlog9 from "./pages/SingleBlog9";

const Root = lazy(() => import("./layouts/Root"));
const Home = lazy(() => import("./pages/Home"));
const Seller = lazy(() => import("./pages/Seller"));
const Privacy = lazy(() => import("./pages/Privacy"));
const TermsAndConditionsPage = lazy(() => import("./pages/TermCondition"));
const CancellationRefundPolicy = lazy(() => import("./pages/CancellationRefundPolicy"));
const ShippingDeliveryPolicy = lazy(() => import("./pages/ShippingDeliveryPolicy"));
const Blog = lazy(() => import("./pages/Blog"));

const SingleBlog = lazy(() => import("./pages/SingleBlog"));
const SingleBlog2 = lazy(() => import("./pages/SingleBlog2"));
const SingleBlog3 = lazy(() => import("./pages/SingleBlog3"));
const SingleBlog4 = lazy(() => import("./pages/SingleBlog4"));
const SingleBlog5 = lazy(() => import("./pages/SingleBlog5"));
const SingleBlog6 = lazy(() => import("./pages/SingleBlog6"));
const SingleBlog7 = lazy(() => import("./pages/SingleBlog7"));

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
            {
                path: "blog/cut-aws-costs-by-50-in-2-weeks-the-cloud-credit-strategy-that-saved-our-series",
                element: <SingleBlog5 />
            },
            {
                path: "blog/scale-your-ai-product-in-1-week-not-in-4-months",
                element: <SingleBlog6 />
            },
            {
                path: "blog/why-claude-by-anthropic-is-redefining-enterprise-ai-in-2026",
                element: <SingleBlog7 />
            },
            {
                path: "blog/how-to-train-foundation-models-without-getting-stuck-in-gpu-waitlists",
                element: <SingleBlog8 />
            },
            {
                path: "blog/how-to-power-openclaw-at-45-lower-cost-with-credex-llm-router",
                element: <SingleBlog9 />
            },
        ]
    }
])

export default router;