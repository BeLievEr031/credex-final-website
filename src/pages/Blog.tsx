import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../sections/common/Footer";
import { newsletterApi, blogApi } from "../api/api";
import { Loader2 } from "lucide-react";

interface BlogItem {
    _id?: string;
    slug: string;
    title: string;
    bannerImgUrl: string;
    createdAt?: string;
    date?: string;
    isHardcoded?: boolean;
}

// const HARDCODED_BLOGS: BlogItem[] = [
//     {
//         slug: "your-unused-openai-credits-are-expiring-heres-how-to-sell-them-before-they-hit-zero",
//         title: "Your Unused OpenAI Credits Are Expiring. Here’s How to Sell Them Before They Hit Zero.",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*Qz8Bq2M15SqAQ_7xFFQA6w.png",
//         date: "02nd July, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "stop-paying-full-price-for-gpt-5-5-how-to-get-500k-in-openai-tier-5-credits-at-50-off",
//         title: "Stop Paying Full Price for GPT-5.5: How to Get $500K in OpenAI Tier 5 Credits at 50% Off",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*FmNN699qytyI0oUYUYMqSg.png",
//         date: "28th June, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "how-to-get-cloudflare-enterprise-credits-at-50-off-250k-in-cdn-security-edge-compute",
//         title: "How to Get Cloudflare Enterprise Credits at 50% Off: $250K in CDN, Security & Edge Compute for $125K",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*exOF2q05fbmIU3hwiqidrg.png",
//         date: "04th June, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "dodge-the-claude-opus-4-7-budget-trap-how-ai-startups-are-burning-300k-year-on-api-costs",
//         title: "Dodge The Claude Opus 4.7 Budget Trap: How AI Startups Are Burning $300K/Year on API Costs",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*RUJx-ywGV56Oev3VwcVrdQ.png",
//         date: "19th May, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "how-to-build-ai-powered-products-without-burning-developer-budget",
//         title: "How to Build AI-Powered Products Without Burning Developer Budget",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*ZrAsb8CoeQAyTVkYueMmyg.png",
//         date: "22nd April, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "how-to-build-voice-ai-without-burning-through-your-budget-500k-in-deepgram-credits-at-50-off",
//         title: "How to Build Voice AI Without Burning Through Your Budget: $500K in Deepgram Credits at 50% Off",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*I3RDF2JS_Tg0LObY45vgPw.png",
//         date: "03rd April, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "how-to-power-openclaw-at-45-lower-cost-with-credex-llm-router",
//         title: "How to Power OpenClaw at 45% Lower Cost with Credex LLM Router",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*7NL-cTMHRmHeQTRYi0IrXg.png",
//         date: "05th March, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "how-to-train-foundation-models-without-getting-stuck-in-gpu-waitlists",
//         title: "How to Train Foundation Models Without Getting Stuck in GPU Waitlists",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*ml6ryqeCs-2q34vFq_ZCOg.png",
//         date: "22nd March, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "why-claude-by-anthropic-is-redefining-enterprise-ai-in-2026",
//         title: "Why Claude by Anthropic is Redefining Enterprise AI in 2026",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:788/1*bOMbAH4trKymB7tV3yYKtA.png",
//         date: "19th Feb, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "scale-your-ai-product-in-1-week-not-in-4-months",
//         title: "Scale your AI product in 1 week not in 4 months",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*uEyEXWvltD0_aNDnGByo7w.png",
//         date: "4th Feb, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "cut-aws-costs-by-50-in-2-weeks-the-cloud-credit-strategy-that-saved-our-series",
//         title: "Cut AWS Costs by 50% in 2 Weeks: The Cloud Credit Strategy that Saved Our Series",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tUvVv7vdyVrHi5hV4XbSXQ.png",
//         date: "25th Jan, 2026",
//         isHardcoded: true,
//     },
//     {
//         slug: "aws-costs-kill-valuations-how-a-$287k-aws-bill-almost-killed-a-$50m-exit",
//         title: "AWS Costs Kill Valuations: How a $287K AWS Bill Almost Killed a $50M Exit",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*xD86V5pAsmsx68pdrCqoqg.png",
//         date: "3rd Jan, 2025",
//         isHardcoded: true,
//     },
//     {
//         slug: "the-unit-economics-of-virality:-how-we-scaled-gemini-1.5-pro-to-50k-users-without-going-bankrupt",
//         title: "The Unit Economics of Virality: How We Scaled Gemini 1.5 Pro to 50k...",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*MlMUXF54yNChRizfRuWCow.png",
//         date: "18th Dec, 2025",
//         isHardcoded: true,
//     },
//     {
//         slug: "how-we-bootstrapped-a-fintech-startup-to-$2m-arr-using-smart-ai-infrastructure:-a-founder’s-case-study",
//         title: "How We Bootstrapped a Fintech Startup to $2M ARR...",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YMpisxvxklmlNKviyAA33g.png",
//         date: "9th Dec, 2025",
//         isHardcoded: true,
//     },
//     {
//         slug: "a-million-dollar-email",
//         title: "A Million Dollar Email",
//         bannerImgUrl: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-rCRNFVhXMR8P9TmX4Gw0Q.png",
//         date: "27th Nov, 2025",
//         isHardcoded: true,
//     }
// ];

const formatDate = (dateString: string) => {
    try {
        const date = new Date(dateString);
        const day = date.getDate();

        let suffix = "th";
        if (day === 1 || day === 21 || day === 31) suffix = "st";
        else if (day === 2 || day === 22) suffix = "nd";
        else if (day === 3 || day === 23) suffix = "rd";

        const month = date.toLocaleDateString("en-US", { month: "long" });
        const year = date.getFullYear();

        return `${day}${suffix} ${month}, ${year}`;
    } catch {
        return dateString;
    }
};

function Blog() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [loadingBlogs, setLoadingBlogs] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await blogApi.getBlogs({ active: true, limit: 100 });
                if (response.data && response.data.success && Array.isArray(response.data.blogs)) {
                    setBlogs(response.data.blogs);
                }
            } catch (error) {
                console.error("Failed to fetch dynamic blogs from API:", error);
            } finally {
                setLoadingBlogs(false);
            }
        };

        fetchBlogs();
    }, []);

    // Merge dynamic blogs and hardcoded blogs, avoiding duplicate slugs
    const allBlogs: BlogItem[] = [...blogs];
    // const dynamicSlugs = new Set(blogs.map(b => b.slug));

    // HARDCODED_BLOGS.forEach(hb => {
    //     if (!dynamicSlugs.has(hb.slug)) {
    //         allBlogs.push(hb);
    //     }
    // });

    const handleSubscribe = async () => {
        if (!email) {
            setStatus({ type: "error", message: "Please enter your email." });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setStatus({ type: "error", message: "Please enter a valid email." });
            return;
        }

        setLoading(true);
        setStatus(null);
        try {
            await newsletterApi.subscribe({ email });
            setStatus({ type: "success", message: "Successfully subscribed!" });
            setEmail("");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setStatus({ type: "error", message: error.response?.data?.message || "Failed to subscribe. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const heroBlog = allBlogs[0];
    const remainingBlogs = allBlogs;

    return (
        <main className="pt-40 md:pt-48 font-pp-mori-regular">
            <Navbar />
            <section className="px-3 md:px-24">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="uppercase font-pp-mori-regular tracking-wider text-[#747373] font-normal md:text-left text-center">Insights & Ideas</p>
                            <h1 className="font-pp-mori-semibold text-[36px] leading-tight mt-4 font-semibold">
                                <p>Latest blog posts</p>
                                <p>from our team</p>
                            </h1>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <p className="text-[#747373]">Get updates, news straight to your inbox.</p>
                            <div className="flex flex-col md:flex-row gap-2 pt-3 w-12/13">
                                <input
                                    type="email"
                                    className="bg-[#121212] px-4 py-2 rounded-full outline-none text-[#E2E2E2] flex-grow"
                                    placeholder="team@credex.rocks"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={loading}
                                />
                                <button
                                    onClick={handleSubscribe}
                                    disabled={loading}
                                    className="bg-[#E2E2E2] px-6 py-2 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-white transition-colors disabled:opacity-50"
                                >
                                    {loading ? <Loader2 className="animate-spin" size={18} /> : "Subscribe"}
                                </button>
                            </div>
                            {status && (
                                <p className={`text-xs mt-2 ${status.type === "success" ? "text-green-500" : "text-red-500"}`}>
                                    {status.message}
                                </p>
                            )}
                        </div>
                    </div>

                    {heroBlog && (
                        <div
                            className="hidden md:block py-12 md:py-3 bg-[#1212120A] md:px-4 rounded-xl space-y-2 cursor-pointer"
                            onClick={() => navigate(`/blog/${heroBlog.slug}`)}
                        >
                            <p className="text-2xl font-semibold font-pp-mori-semibold w-[75%] line-clamp-2">
                                {heroBlog.title}
                            </p>
                            <div className="text-sm text-[#19363FB2]">
                                <p>Credex - {heroBlog.isHardcoded ? heroBlog.date : formatDate(heroBlog.createdAt!)}</p>
                            </div>
                            <div className="w-full md:w-[520px] h-[230px] md:h-[281px] bg-[#1C1C1C] rounded-xl mt-6 overflow-hidden">
                                <img
                                    src={heroBlog.bannerImgUrl}
                                    alt={heroBlog.title}
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {loadingBlogs ? (
                    <div className="flex justify-center items-center py-24">
                        <Loader2 className="animate-spin text-[#0FF395]" size={36} />
                    </div>
                ) : (
                    <div className="grid md:grid-cols-3 3xl:grid-cols-4 pt-8 md:pt-24 gap-x-5 gap-y-5">
                        {/* On mobile, we also render the hero blog in the grid list since it's hidden in the hero section */}
                        <div className="block md:hidden col-span-1">
                            {heroBlog && <BlogCard blog={heroBlog} />}
                        </div>
                        {remainingBlogs.map(blog => (
                            <BlogCard blog={blog} key={blog.slug} />
                        ))}
                    </div>
                )}
            </section>
            <Footer />
        </main>
    );
}

const BlogCard = ({ blog }: { blog: BlogItem }) => {
    const navigate = useNavigate();
    return (
        <div
            className="cursor-pointer w-full max-w-[378px]"
            onClick={() => navigate(`/blog/${blog.slug}`)}
        >
            <div className="bg-[#121212] w-full h-[200px] sm:h-[220px] md:h-[230px] rounded-[20px] overflow-hidden">
                <img
                    src={blog.bannerImgUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover object-top"
                />
            </div>

            <p className="text-lg sm:text-xl md:text-2xl font-semibold pt-4 w-full font-pp-mori-semibold leading-snug line-clamp-2">
                {blog.title}
            </p>

            <div className="flex items-center gap-2 text-sm text-[#19363FB2] pt-2">
                <p>Credex • {blog.isHardcoded ? blog.date : formatDate(blog.createdAt!)}</p>
            </div>
        </div>
    );
};

export default Blog;