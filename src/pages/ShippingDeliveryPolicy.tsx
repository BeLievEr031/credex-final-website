import Navbar from "../components/Navbar";
import { useBoolean } from "../context/FormContext";
import ContactFormModal from "../sections/common/ContactUs";
import Footer from "../sections/common/Footer";

export default function ShippingDeliveryPolicy() {
    const { myBoolean, setMyBoolean } = useBoolean();

    return (
        <main className="min-h-screen pt-[150px] md:pt-[120px] font-pp-mori-regular">
            <Navbar />

            <div className="max-w-4xl mx-auto px-3 md:px-0">
                <header className="mb-8 flex items-start justify-between gap-4 flex-wrap">
                    <div className="text-center mx-auto">
                        <h1 className="text-3xl md:text-4xl font-semibold font-pp-mori-semibold leading-tight">
                            Shipping & Delivery Policy
                        </h1>
                        <p className="mt-1 text-sm text-slate-600">
                            Last updated on <span className="font-medium">November 4, 2025</span>
                        </p>
                    </div>
                </header>

                <div className="bg-white rounded-2xl pt-2 md:p-8" id="shipping-delivery-content">
                    <p className="font-bold text-lg mb-2">Shipping & Delivery Policy</p>

                    <h2 className="text-xl font-semibold mb-2">1. Delivery Timelines</h2>
                    <p className="mb-4">
                        For digital products, transfers are completed via secure digital means.
                    </p>
                    <p className="mb-4">
                        Ownership or credentials of purchased credits will be transferred to the buyer’s registered
                        email or platform account within 0–7 days of confirmed payment, as per our Terms & Conditions
                        (Section 7).
                    </p>
                    <p className="mb-4">
                        Delivery timelines may vary depending on verification processes, platform policies (e.g., OpenAI,
                        AWS, GCP), and order volume.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">2. Delivery Confirmation</h2>
                    <p className="mb-4">
                        Upon successful transfer, customers will receive a confirmation email and supporting
                        documentation or invoice from Credex.
                    </p>
                    <p className="mb-4">
                        For physical correspondence (if applicable), orders will be shipped through registered courier
                        or postal services, with tracking details shared upon dispatch.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">3. Delays & Liability</h2>
                    <p className="mb-4">
                        Credex ensures timely handover of all digital assets to customers but is not responsible for
                        delays caused by third-party service providers or platform restrictions (used for payments,
                        bills, etc.).
                    </p>
                    <p className="mb-4">
                        Our liability is limited to the value of the purchased order.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">4. Contact Information</h2>
                    <p className="mb-2">
                        For order status, delivery, or refund inquiries, please contact our customer support team:
                    </p>
                    <ul className="list-none pl-0 mb-4">
                        <li>📧 <a href="mailto:help@credex.rocks" className="text-blue-600 underline">help@credex.rocks</a></li>
                        <li>📞 <a href="tel:+918956042145" className="text-blue-600 underline">+91 8956042145</a></li>
                    </ul>
                </div>
            </div>

            <Footer />
            <ContactFormModal
                isOpen={myBoolean}
                onClose={() => setMyBoolean(false)}
                id="me1a0l"
            />
        </main>
    );
}
