import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import ThankYou from "./pages/ThankYou";
import SingleBlog14 from "./pages/SingleBlog14";

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
const SingleBlog8 = lazy(() => import("./pages/SingleBlog8"));
const SingleBlog9 = lazy(() => import("./pages/SingleBlog9"));
const SingleBlog10 = lazy(() => import("./pages/SingleBlog10"));
const SingleBlog11 = lazy(() => import("./pages/SingleBlog11"));
const SingleBlog12 = lazy(() => import("./pages/SingleBlog12"));
const SingleBlog13 = lazy(() => import("./pages/SingleBlog13"));
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
            {
                path: "blog/how-to-build-voice-ai-without-burning-through-your-budget-500k-in-deepgram-credits-at-50-off",
                element: <SingleBlog10 />
            },
            {
                path: "blog/how-to-build-ai-powered-products-without-burning-developer-budget",
                element: <SingleBlog11 />
            },
            {
                path: "blog/dodge-the-claude-opus-4-7-budget-trap-how-ai-startups-are-burning-300k-year-on-api-costs",
                element: <SingleBlog12 />
            },
            {
                path: "blog/how-to-get-cloudflare-enterprise-credits-at-50-off-250k-in-cdn-security-edge-compute",
                element: <SingleBlog13 />
            },
            {
                path: "blog/stop-paying-full-price-for-gpt-5-5-how-to-get-500k-in-openai-tier-5-credits-at-50-off",
                element: <SingleBlog14 />
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