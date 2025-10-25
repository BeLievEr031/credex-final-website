import AgencySavings from "../sections/Home/AgencySavings"
import Faq from "../sections/common/Faq"
import Footer from "../sections/common/Footer"
import Hero from "../sections/Home/Hero"
// import Pricing from "../sections/Home/Pricing"
import ProcessStep from "../sections/Home/ProcessStep"
import Security from "../sections/Home/Security"
import StatsFeatureSection from "../sections/Home/StatsFeatureSection"
import Testimonial from "../sections/common/Testimonial"
import Navbar from "../components/Navbar"
import ContactForm from "../sections/common/ContactUs"
import { useBoolean } from "../context/FormContext"


import AveryImg from "../assets/buyers/Avery Nguyen (USA).webp";
import FatimaImg from "../assets/buyers/Fatima Al Qasimi (UAE).webp";
import JensImg from "../assets/buyers/Jens Müller (Germany).webp";
import LucaImg from "../assets/buyers/Luca Romano (Italy).webp";
import MartaImg from "../assets/buyers/Marta García (Spain).webp";
import MayaImg from "../assets/buyers/Maya Thompson (USA).webp";
import OmarImg from "../assets/buyers/Omar Al Mansoori (UAE).webp";
import PriyaImg from "../assets/buyers/Priya Nair (India).webp";
import RachelImg from "../assets/buyers/Rachel Lim (Singapore).webp";
import RohitImg from "../assets/buyers/Rohit Iyer (India).webp";
import SofiaImg from "../assets/buyers/Sofia Nilsson (Sweden).webp";
import WeiLinImg from "../assets/buyers/Wei-Lin Tan (Singapore).webp";
function Home() {
    const { myBoolean, setMyBoolean } = useBoolean()
    const faqs = [
        {
            question: "What is Credex?",
            answer:
                "Credex is a verified marketplace where companies buy or sell unused AI models, LLMs, Cloud, API & SaaS credits (e.g., OpenAI, Claude, AWS, GCP, Azure). You get the same credits you’d buy from providers: no infrastructure changes, no performance loss.",
        },
        {
            question: "What kinds of credits can I buy, and how much do I save?",
            answer:
                "Popular options include OpenAI, Anthropic, AWS, and GCP. Buyers typically save about 45–50% compared to standard list prices.",
        },
        {
            question: "Will performance or rate limits change if I buy through Credex?",
            answer:
                "No. It would be the same as you opening your own account on these platforms. We source top-tier accounts with enterprise rate limits, so your calls perform as expected.",
        },
        {
            question: "How do you transfer credits or access?",
            answer:
                "Two ways: (a) ownership transfer to your designated email, or (b) root admin/credentials transfer. You then change the password and enable 2FA for full control and privacy.",
        },
        {
            question: "Will my identity be shared?",
            answer:
                "No, your identity will not be shared, a Mutual NDA is executed. The seller signs an NDA with Credex and Buyer also signs an NDA with Credex. This preserves confidentiality for both sides.",
        },
        {
            question: "How long does this take?",
            answer:
                "Plan for about a week for paperwork. After payment is ready, the ownership/credentials transfer typically completes within ~24 hours. If your legal team is quick to revert then we can wrap up the entire process within 24 hours.",
        },
        {
            question: "Can I verify the account before paying?",
            answer:
                "Yes. We provide screenshots showing credit balance, validity, and rate limits. For extra assurance, we can arrange read-only access so your team can generate API keys and run test calls.",
        },
        {
            question: "What if the access later breaks or credits become unusable?",
            answer:
                "We offer 24×7 support and an ownership guarantee: if credits become inaccessible within validity, we’ll replace the credits or refund the unused amount (buyer has to share the proof).",
        },
        {
            question: "Where do these credits come from?",
            answer:
                "From companies that over-purchased or startups that received grant credits via accelerators/incubators and no longer need them (e.g., shut down or pivoted). Credex buys those accounts and passes the savings to buyers.",
        },
        {
            question: "How do you keep deals safe and clean?",
            answer:
                "Four ways: vendor verification, ownership auditing (credit history), transaction transparency (escrow + history + support chat), and in-house authentication tools.",
        },
        {
            question: "What’s the payment + escrow flow?",
            answer:
                "Buyer request → payment → secure transfer of access → buyer confirms usage → seller payout (with escrow protection throughout).",
        },
        {
            question: "Do I need to change my code or infrastructure?",
            answer:
                "No. Use your existing SDKs/endpoints. It’s full API compatibility with zero code changes.",
        },
        {
            question: "Any real-world examples of impact?",
            answer:
                "A fast-scaling agency cut LLM spend by up to 50%, improved project margins by ~50%, and made no code changes, just predictable usage pricing.",
        },
        {
            question: "What paperwork do you need from us? Any taxes?",
            answer:
                "For invoicing: legal entity name, address, invoice emails, and (if applicable) GST No. (India, +18% as input credit) or TRN/VAT (UAE, +5% as input).",
        },
        {
            question: "Why talk about sustainability here?",
            answer:
                "Letting credits expire is digital waste. Credex helps reclaim spend and reduce waste “impact-led SaaS sustainability.”",
        },
    ]

    const reviews = [
        {
            name: "Maya Thompson",
            designation: "CTO, Verisynth AI (USA, AI)",
            review:
                "We were burning cash experimenting with multiple LLMs. Credex let us lock in credits ~40% cheaper without touching our code. Read-only checks before paying gave my team confidence, and transfer was done the next day. It took pressure off our runway and let us ship faster.",
            img: MayaImg,
        },
        {
            name: "Rohit Iyer",
            designation: "Co-founder, NayiDisha Learning Cloud (India, EdTech)",
            review:
                "Our OpenAI usage kept spiking during exam season. With Credex, we bought Tier-5 accounts at a discount and kept our latency targets. The savings went straight to expanding scholarships. Support was responsive even on Sunday nights.",
            img: RohitImg,
        },
        {
            name: "Wei-Lin Tan",
            designation: "Head of Data, LionCity Analytics (Singapore, Analytics)",
            review:
                "Procurement cycles can kill momentum. Credex’s escrow + proof screenshots made approvals easy, then we switched the account owner and turned on 2FA. Zero production changes, immediate savings.",
            img: WeiLinImg,
        },
        {
            name: "Sofia Nilsson",
            designation: "VP Product, NordicCare AI (Sweden, Health Tech)",
            review:
                "We model patient-support workflows on Claude and GPT-4. The discounted credits helped us scale while staying within our non-profit budget. Audit trails and vendor verification were the deciding factors for our board.",
            img: SofiaImg,
        },
        {
            name: "Omar Al Mansoori",
            designation: "Engineering Lead, DesertByte Robotics (UAE, Robotics/AI)",
            review:
                "We needed burst capacity for a client demo week. Credex got us verified accounts with top-tier limits and clean ownership. No drop in performance. The 24/7 chat actually answered rare these days.",
            img: OmarImg,
        },
        {
            name: "Avery Nguyen",
            designation: "Founder, Lextera Labs (USA, Legal Tech)",
            review:
                "Our case-summaries app has unpredictable traffic. Credex let us lock predictable pricing and cut our cloud + LLM blend by ~38%. The refund/replacement guarantee reduced my risk enough to say ‘yes’.",
            img: AveryImg,
        },
        {
            name: "Luca Romano",
            designation: "COO, MedInnova Systems (Italy, Health IT)",
            review:
                "We’re conservative about vendors. Getting screenshots + limited access to test API calls before purchase made our security team comfortable. Transfer was quick, and monthly costs dropped exactly as quoted.",
            img: LucaImg,
        },
        {
            name: "Priya Nair",
            designation: "Data Science Manager, Marigold Commerce (India, E-commerce)",
            review:
                "We moved our training jobs to discounted GCP/AWS credits. No rate-limit surprises, no mystery blockers, just real accounts with runway left. Would do it again.",
            img: PriyaImg,
        },
        {
            name: "Fatima Al Qasimi",
            designation: "CEO, OasisEd (UAE, EdTech)",
            review:
                "The team helped us buy time before a regional pilot. The NDA approach and identity shielding mattered to our partners. We scaled student chatbots across three campuses within budget.",
            img: FatimaImg,
        },
        {
            name: "Jens Müller",
            designation: "CTO, BergTech Systems (Germany, IT Services)",
            review:
                "Solid process: NDA, escrow, proof, transfer, done. We saved on OpenAI and reallocated the budget to human QA. Hard to argue with that.",
            img: JensImg,
        },
        {
            name: "Marta García",
            designation: "Product Lead, Legalía Cloud (Spain, Legal Tech)",
            review:
                "We tested via read-only access and saw the limits we needed. After transfer, we flipped passwords and 2FA and were alive in an hour. It felt like buying time as much as credits.",
            img: MartaImg,
        },
        {
            name: "Rachel Lim",
            designation: "Co-founder, Harbor Light AI (Singapore, FinTech)",
            review:
                "The savings let us launch two features that were stuck in cost limbo. We kept hitting our SLAs with zero code changes exactly as promised.",
            img: RachelImg,
        },
    ];

    return (
        <section className="relative min-h-screen w-full font-pp-mori-regular overflow-x-hidden">
            <Navbar
                links={[
                    {
                        lable: "How it Works",
                        link: '#how-it-works'
                    },
                    {
                        lable: "Gurantee",
                        link: '#gurantee'
                    },
                    {
                        lable: "FAQ",
                        link: '#faq'
                    },
                    {
                        lable: "Contact",
                        link: '#contact-us'
                    },
                ]}
            />
            <Hero />
            <StatsFeatureSection />
            <ProcessStep />
            <Security />
            <div className="px-2 md:px-0">
                <AgencySavings />
            </div>
            <Testimonial reviews={reviews} />
            {/* contact us */}
            {/* <ContactForm /> */}
            {/* <Pricing /> */}
            <Faq faqs={faqs} />
            <Footer />

            <ContactForm isOpen={myBoolean}
                onClose={() => setMyBoolean(false)}
                id="me1a0l"
            />
        </section>
    )
}

export default Home