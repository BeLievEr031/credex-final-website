import clsx from "clsx"
import { motion, type Variants } from "motion/react"
import { useState } from "react"
import { Check, Loader2 } from "lucide-react"
import { inquiryApi } from "../../api/api"
import Select, { type MultiValue } from "react-select";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08, // controls sequence delay between FAQs
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
}

interface Quest {
    question: string;
    answer: string;
}

interface IProp {
    faqs: Quest[];
    type?: "SELLER" | "BUYER";
}
export default function Faq({ faqs, type }: IProp) {


    return (
        <section className="py-10 max-w-7xl mx-auto mt-[40px] md:mt-[120px]" id="faq">
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[22.5px] md:text-[40px] font-pp-mori-semibold font-semibold"
                >
                    Your Questions. Answered.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#00000080] text-[12px] md:text-[16px]"
                >
                    Answers to all your questions, quickly and clearly
                </motion.p>
            </div>

            {/* FAQ list */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="pt-10 space-y-3"
            >
                {faqs.map(({ answer, question }, index) => (
                    <motion.div variants={itemVariants} key={index}>
                        <FaqQuestionAndAnswer answer={answer} question={question} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-20 md:mt-32 max-w-3xl mx-auto px-4"
                id="contact"
            >
                <div className="text-center mb-10">
                    <h2 className="text-[28px] md:text-[40px] font-pp-mori-semibold font-semibold mb-3">
                        Still have a question?
                    </h2>
                    <p className="text-[#00000080] text-[14px] md:text-[16px]">
                        Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                </div>

                <ContactForm type={type} />
            </motion.div>
        </section>
    )
}

function ContactForm({ type }: { type?: "SELLER" | "BUYER" }) {

    const platforms = [
        { platform: "OpenAI", color: "#000000" },
        { platform: "Anthropic/Claude", color: "#D97706" },
        { platform: "AWS (Claude Models via Bedrock)", color: "#FF9900" },
        { platform: "GCP/Vertex AI (Gemini Models)", color: "#34A853" },
        { platform: "Azure OpenAI (GPT Models)", color: "#0078D4" },
        { platform: "MongoDB", color: "#47A248" },
        { platform: "Supabase", color: "#3ECF8E" },
        { platform: "PostHog", color: "#F97316" },
        { platform: "Eleven Labs", color: "#8B5CF6" },
        { platform: "Digital Ocean", color: "#0080FF" },
        { platform: "Deepgram", color: "#4F46E5" },
        { platform: "Cursor", color: "#5F50E1" },
        { platform: "Lambda (GPUs)", color: "#EC4899" },
    ];

    // Convert to react-select format
    const options = platforms.map((item) => ({
        label: item.platform,
        value: item.platform,
        color: item.color
    }));

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        selectedLicenses: [] as string[],
        otherPlatforms: "",
        message: "",
        type: type || "BUYER"
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = "Full name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.phone) newErrors.phone = "Phone number is required";
        if (!formData.companyName) newErrors.companyName = "Company name is required";
        if (formData.selectedLicenses.length === 0) newErrors.selectedLicenses = "Please select at least one platform";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        try {
            await inquiryApi.submitInquiry({ ...formData, type: type || "BUYER" });
            setIsSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                companyName: "",
                selectedLicenses: [],
                otherPlatforms: "",
                message: "",
                type: type || "BUYER"
            });
        } catch (error) {
            console.error("Submission failed:", error);
            // Optionally handle error UI
        } finally {
            setIsSubmitting(false);
        }

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 7000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs[name];
                return newErrs;
            });
        }
    };

    const handleSelectChange = (newValue: MultiValue<{ label: string; value: string }>) => {
        const selected = newValue ? newValue.map(opt => opt.value) : [];
        setFormData(prev => ({ ...prev, selectedLicenses: selected }));

        if (errors.selectedLicenses) {
            setErrors(prev => {
                const newErrs = { ...prev };
                delete newErrs.selectedLicenses;
                return newErrs;
            });
        }
    };

    const inputClasses = (name: string) => clsx(
        "w-full bg-[#f9f9f9] border-2 rounded-xl px-4 py-3 outline-none transition-all duration-200 text-[14px] md:text-[16px]",
        errors[name] ? "border-red-400 focus:border-red-500" : "border-transparent focus:border-black/10 focus:bg-white"
    );

    const labelClasses = "block text-[15px] md:text-[16px] font-bold mb-1.5 text-black/85 ml-1";

    return (
        <div className="min-h-[850px] md:min-h-[780px] flex flex-col">
            {isSuccess ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border-2 border-green-100 p-10 rounded-3xl text-center my-auto"
                >
                    <div className="size-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                        <Check size={32} strokeWidth={3} />
                    </div>
                    <h3 className="text-2xl font-pp-mori-semibold font-semibold mb-2">Message Received!</h3>
                    <p className="text-black/60">
                        Thanks for sharing your information! Our team will be in touch with you shortly.</p>
                    {/* <button
                        onClick={() => setIsSuccess(false)}
                        className="mt-6 text-sm font-semibold underline underline-offset-4 cursor-pointer"
                    >
                        Send another message
                    </button> */}
                </motion.div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className={labelClasses}>Full Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="e.g. Sarah Ferguson"
                            className={inputClasses("name")}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div>
                            <label className={labelClasses}>Email Address <span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="team@credex.rocks"
                                className={inputClasses("email")}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                        </div>

                        {/* Phone */}
                        <div>
                            <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 000-0000"
                                className={inputClasses("phone")}
                            />
                            {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                        </div>
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className={labelClasses}>Company Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Credex"
                            className={inputClasses("companyName")}
                        />
                        {errors.companyName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.companyName}</p>}
                    </div>

                    {/* Select Platforms (react-select) */}
                    <div className="relative">
                        <label className={labelClasses}>Select Platforms <span className="text-red-500">*</span></label>
                        <Select
                            isMulti
                            options={options}
                            value={options.filter(opt => formData.selectedLicenses.includes(opt.value))}
                            onChange={handleSelectChange}
                            placeholder="Select platforms..."
                            className={clsx(
                                "text-[14px] md:text-[16px]",
                                errors.selectedLicenses ? "border-red-400" : "border-transparent"
                            )}
                            classNamePrefix="select"
                            styles={{
                                control: (base, state) => ({
                                    ...base,
                                    backgroundColor: "#f9f9f9",
                                    borderColor: errors.selectedLicenses ? "#f87171" : state.isFocused ? "rgba(0,0,0,0.1)" : "transparent",
                                    borderWidth: "2px",
                                    borderRadius: "0.75rem",
                                    padding: "4px",
                                    boxShadow: "none",
                                    "&:hover": {
                                        borderColor: state.isFocused ? "rgba(0,0,0,0.1)" : "transparent",
                                    }
                                }),
                                multiValue: (base, state) => ({
                                    ...base,
                                    backgroundColor: state.data.color ? `${state.data.color}eb` : "#000000eb", // added small transparency
                                    color: "#fff",
                                    borderRadius: "8px",
                                    padding: "2px 6px",
                                    margin: "2px",
                                }),
                                multiValueLabel: (base) => ({
                                    ...base,
                                    color: "#fff",
                                    fontSize: "13px",
                                    fontWeight: "600",
                                    paddingLeft: "4px",
                                }),
                                multiValueRemove: (base) => ({
                                    ...base,
                                    color: "#fff",
                                    cursor: "pointer",
                                    "&:hover": {
                                        backgroundColor: "rgba(255,255,255,0.2)",
                                        color: "#fff",
                                    }
                                }),
                                option: (base, state) => ({
                                    ...base,
                                    backgroundColor: state.isFocused ? "rgba(0,0,0,0.05)" : "white",
                                    color: "black",
                                    cursor: "pointer",
                                    fontSize: "14px",
                                    padding: "10px 15px",
                                    "&:active": {
                                        backgroundColor: "rgba(0,0,0,0.1)",
                                    }
                                })
                            }}
                        />
                        {errors.selectedLicenses && <p className="text-red-500 text-xs mt-1 ml-1">{errors.selectedLicenses}</p>}
                    </div>

                    {/* Other Platforms */}
                    <div>
                        <label className={labelClasses}>Others (Please specify)</label>
                        <input
                            type="text"
                            name="otherPlatforms"
                            value={formData.otherPlatforms}
                            onChange={handleChange}
                            placeholder="e.g. Gemma AI, etc."
                            className={inputClasses("otherPlatforms")}
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className={labelClasses}>Message (Optional)</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            rows={4}
                            className={clsx(inputClasses("message"), "resize-none")}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={clsx(
                            "w-full py-4 rounded-xl font-pp-mori-semibold font-semibold text-[16px] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer",
                            isSubmitting
                                ? "bg-gray-200 text-black/40 cursor-not-allowed"
                                : "bg-black text-white hover:bg-black/90 active:scale-[0.98]"
                        )}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" size={20} />
                                Sending...
                            </>
                        ) : (
                            "SUBMIT"
                        )}
                    </button>
                </form>
            )}
        </div>
    );
}


function FaqQuestionAndAnswer({
    question,
    answer,
}: {
    question: string
    answer: string
}) {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={clsx(
                "py-[22px] px-[24px] rounded-xl w-[95%] md:w-[70%] mx-auto cursor-pointer transition-all duration-300",
                {
                    "bg-[#1C1C1C14]": open,
                    "bg-[#12121205]": !open,
                }
            )}
            onClick={() => setOpen(!open)}
        >
            <div className="flex justify-between">
                <p className="font-pp-mori-semibold font-semibold text-[14px] md:text-[16px] md:w-full">{question}</p>
                <div>
                    {open ? (
                        <svg
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-[32px] md:size-[32px] shrink-0"
                        >
                            <rect
                                x="32"
                                y="32"
                                width="32"
                                height="32"
                                rx="12"
                                transform="rotate(180 32 32)"
                                fill="#242424"
                            />
                            <path
                                d="M15.9992 13.0501C16.1326 13.0501 16.2576 13.0709 16.3742 13.1126C16.4909 13.1543 16.5992 13.2251 16.6992 13.3251L21.2992 17.9251C21.4826 18.1084 21.5742 18.3418 21.5742 18.6251C21.5742 18.9084 21.4826 19.1418 21.2992 19.3251C21.1159 19.5084 20.8826 19.6001 20.5992 19.6001C20.3159 19.6001 20.0826 19.5084 19.8992 19.3251L15.9992 15.4251L12.0992 19.3251C11.9159 19.5084 11.6826 19.6001 11.3992 19.6001C11.1159 19.6001 10.8826 19.5084 10.6992 19.3251C10.5159 19.1418 10.4242 18.9084 10.4242 18.6251C10.4242 18.3418 10.5159 18.1084 10.6992 17.9251L15.2992 13.3251C15.3992 13.2251 15.5076 13.1543 15.6242 13.1126C15.7409 13.0709 15.8659 13.0501 15.9992 13.0501Z"
                                fill="#A0A0A0"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                        >
                            <rect
                                width="32"
                                height="32"
                                rx="12"
                                fill="#242424"
                                fillOpacity="0.05"
                            />
                            <path
                                d="M16.0008 18.9499C15.8674 18.9499 15.7424 18.9291 15.6258 18.8874C15.5091 18.8457 15.4008 18.7749 15.3008 18.6749L10.7008 14.0749C10.5174 13.8916 10.4258 13.6582 10.4258 13.3749C10.4258 13.0916 10.5174 12.8582 10.7008 12.6749C10.8841 12.4916 11.1174 12.3999 11.4008 12.3999C11.6841 12.3999 11.9174 12.4916 12.1008 12.6749L16.0008 16.5749L19.9008 12.6749C20.0841 12.4916 20.3174 12.3999 20.6008 12.3999C20.8841 12.3999 21.1174 12.4916 21.3008 12.6749C21.4841 12.8582 21.5758 13.0916 21.5758 13.3749C21.5758 13.6582 21.4841 13.8916 21.3008 14.0749L16.7008 18.6749C16.6008 18.7749 16.4924 18.8457 16.3758 18.8874C16.2591 18.9291 16.1341 18.9499 16.0008 18.9499Z"
                                fill="#A0A0A0"
                            />
                        </svg>
                    )}
                </div>
            </div>

            {open && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="text-[#00000080] mt-2 overflow-hidden text-[14px] md:text-[16px]"
                >
                    {answer}
                </motion.div>
            )}
        </div>
    )
}
