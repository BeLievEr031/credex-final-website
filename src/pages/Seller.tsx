import Faq from "../sections/common/Faq"
import Footer from "../sections/common/Footer"
import AcceptedVendors from "../sections/seller/AcceptedVendors"
import Hero from "../sections/seller/Hero"
import InfoCards from "../sections/seller/InfoCards"
import ProcessStep from "../sections/seller/ProcessStep"
import Navbar from "../components/Navbar"
import Testimonial from "../sections/common/Testimonial"
// import ProofSection from "../sections/common/Proof"
import ContactForm from "../sections/common/ContactUs"
import { useBoolean } from "../context/FormContext"
import AishaImg from "../assets/sellers/Aisha Patel (UK).webp";
import AnanyaImg from "../assets/sellers/Ananya Sharma (India).webp";
import AnthonyImg from "../assets/sellers/Anthony Reed (USA).webp";
import ClaraImg from "../assets/sellers/Clara Dubois (France).webp";
import ElenaImg from "../assets/sellers/Elena Popescu (Romania).webp";
import EthanImg from "../assets/sellers/Ethan Cole (USA).webp";
import HussainImg from "../assets/sellers/Hussain Al Nuaimi (UAE).webp";
import JakubImg from "../assets/sellers/Jakub Nowak (Poland).webp";
import KaranImg from "../assets/sellers/Karan Mehta (India).webp";
import MohammedImg from "../assets/sellers/Mohammed Al Habsi (UAE).webp";
import NikolaiImg from "../assets/sellers/Nikolai Petrov (Czechia).webp";
import SofiaImg from "../assets/sellers/Sofia Dimitrova (Bulgaria).webp";

function Seller() {

    const { myBoolean, setMyBoolean } = useBoolean()


    const faqs = [
        {
            question: "Who can sell credits on Credex?",
            answer: "Verified companies/startups with legitimately owned unused credits. We onboard only verified vendors and audit ownership history."
        },
        {
            question: "We shut down/pivoted. Can we recover value?",
            answer: "Yes, that's common. Credex buys accounts with credits to help you recover sunk costs, then passes savings to buyers."
        },
        {
            question: "What do you ask for during onboarding?",
            answer: "We sign a Mutual NDA. You provide account proofs/screenshots (credit balance, validity, rate limits). For vetted buyers, we can grant read-only access for test calls before closing."
        },
        {
            question: "How is identity handled?",
            answer: "Your identity is not disclosed to the buyer, and the buyer’s identity is not disclosed to you."
        },
        {
            question: "How do transfers and payouts work?",
            answer: "Buyer request → payment (escrow) → secure transfer of access/ownership → buyer confirms usage → seller receives payout."
        },
        {
            question: "What transfer method is used?",
            answer: "Either ownership transfer to the buyer’s email or root admin credentials. After transfer, the buyer changes passwords and enables 2FA clean handoff from your side."
        },
        {
            question: "How do you prevent stale/invalid credits being sold?",
            answer: "We perform ownership auditing and track credit/token history to avoid expired or misused credits."
        },
        {
            question: "What packages move fastest?",
            answer: "Strong demand for OpenAI, Anthropic (Claude), AWS, Azure and GCP in a range of package sizes."
        },
        {
            question: "Do providers such as OpenAI, Claude, AWS, GCP or Azure allow this?",
            answer: "Not just OpenAI, Claude, AWS, GCP or Azure but almost every single AI model, LLM, cloud or SaaS service provider has an industry-wide standard Terms & Conditions which says that these companies do not allow their credits to be exchanged or sold. It is the same as Nike saying that you have bought the shoes only for your personal use and you cannot re-sell them. It is unfair and wasteful."
        },
        {
            question: "How quickly do deals close?",
            answer: "Paperwork usually takes several days. Once that’s done and payment is queued, ownership/credentials typically transfer within ~24 hours."
        },
        {
            question: "What support exists if something goes wrong post-transfer?",
            answer: "Credex provides 24×7 support and a replacement/refund policy for buyers if accounts become inaccessible within validity (with proof). This, plus escrow, protects both sides."
        },
        {
            question: "What info do you need from us for invoicing?",
            answer: "Legal entity name, address, invoice emails, and (if applicable) GST (India, +18%) or TRN/VAT (UAE, +5%)."
        }
    ];
    const reviews = [
        {
            name: "Anthony Reed",
            designation: "CFO, SkyLattice Cloud (USA, Cloud Tools)",
            review:
                "After a product pivot, we had a pile of unused credits. Credex’s verification felt rigorous but fair. Once the buyer confirmed usage, escrow released and cash hit our account. It recovered the budget we’d written off.",
            img: AnthonyImg,
        },
        {
            name: "Ananya Sharma",
            designation: "Founder, PrismStack Labs (India, AI Studio)",
            review:
                "We shut down a prototype program and listed our remaining credits. Identity shielding mattered; we didn't want our name in the wild. The team handled the paperwork and kept it discreet.",
            img: AnanyaImg,
        },
        {
            name: "Mohammed Al Habsi",
            designation: "Operations, Oasis Quantum Systems (UAE, R&D)",
            review:
                "The process was clean: NDA, screenshots, then transfer. No haggling theatrics. We moved on from a pivot without feeling wasteful.",
            img: MohammedImg,
        },
        {
            name: "Elena Popescu",
            designation: "COO, BrightPath EMEA (Romania, EdTech)",
            review:
                "We had grants we couldn’t fully use. Credex turned that into cash for a new content partnership. The transparency around credit history gave us confidence the deal would stick.",
            img: ElenaImg,
        },
        {
            name: "Ethan Cole",
            designation: "Finance Lead, DeltaSense Robotics (USA, Robotics)",
            review:
                "Happy with the escrow model. We didn’t want to risk chargebacks or gray-area buyers. Verification plus auditing protected both sides.",
            img: EthanImg,
        },
        {
            name: "Sofia Dimitrova",
            designation: "Head of Ops, BluePine Legal AI (Bulgaria, Legal Tech)",
            review:
                "Our internal shutdown timeline was tight; Credex still closed within the week after docs were done. The buyer got the limits they wanted, we got paid, and everyone moved on.",
            img: SofiaImg,
        },
        {
            name: "Karan Mehta",
            designation: "Program Manager, Amberline Health (India, Health Tech)",
            review:
                "I liked that they weren’t reselling sketchy vouchers. It's a real account ownership transfer with proper 2FA handoff, which kept our compliance team calm.",
            img: KaranImg,
        },
        {
            name: "Clara Dubois",
            designation: "CEO, Veridian Studio (France, AI/Creative)",
            review:
                "We had mis-sized our credits during a hiring freeze. Converting them via Credex gave us a runway for marketing without the sunk-cost sting.",
            img: ClaraImg,
        },
        {
            name: "Hussain Al Nuaimi",
            designation: "CTO, SandBridge IT (UAE, IT Services)",
            review:
                "The auditing step looked for expiry risks before listing. We appreciated that diligence and avoided buyer disputes later.",
            img: HussainImg,
        },
        {
            name: "Jakub Nowak",
            designation: "Co-founder, BalticByte Analytics (Poland, Data)",
            review:
                "Straightforward fee structure and clear communication. We provided proofs once, and the team handled buyer questions using read-only access.",
            img: JakubImg,
        },
        {
            name: "Aisha Patel",
            designation: "General Counsel, OnyxLegal AI (UK, Legal Tech)",
            review:
                "The NDA and identity shielding were non-negotiable for us. Credex respected both and documented the transfer trail properly.",
            img: AishaImg,
        },
        {
            name: "Nikolai Petrov",
            designation: "CFO, NorthForge Cloudworks (Czechia, Cloud)",
            review:
                "Nice to turn stranded credits into a budget for an EU compliance project. The payout was released right after the buyer confirmed access.",
            img: NikolaiImg,
        },
    ];

    return (
        <main className="">
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
            <AcceptedVendors />
            <ProcessStep />
            <InfoCards />
            {/* <div className="md:mt-72">
                <ProofSection />
            </div> */}
            <div className="pt-[40px] md:pt-[100px]">
                <Testimonial reviews={reviews} />
            </div>
            <Faq faqs={faqs} />
            <Footer
                title="Ready to recover sunk - costs?"
                actionBtn1Text="Sell credits"
                actionBtnLink="https://wa.me/918956042145?text=Hi,%20I%27m%20a%20Seller"
            />
            <ContactForm isOpen={myBoolean} onClose={() => setMyBoolean(false)} />
        </main>
    )
}

export default Seller