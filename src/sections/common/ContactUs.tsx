import axios from "axios";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLocation } from "react-router-dom";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const location = useLocation();
    console.log(location.pathname);

    const [formData, setFormData] = useState({
        type: location.pathname.includes("seller") ? "seller" : "buyer",
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
        license: "",
    });

    // Close modal on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
                setErrors({})
                setFormData({
                    type: location.pathname.includes("seller") ? "seller" : "buyer",
                    firstName: "",
                    lastName: "",
                    companyName: "",
                    email: "",
                    phone: "",
                    message: "",
                    license: "",
                })
            };
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden"; // Prevent body scroll
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.companyName.trim()) newErrors.companyName = "Company name is required.";
        if (!formData.license.trim()) newErrors.license = "Please select a license.";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^[0-9]{7,15}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 7–15 digits.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess("");

        if (!validateForm()) return;

        setLoading(true);
        try {
            const response = await axios.post(
                "https://backend.sandyrajak031.workers.dev/user",
                {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    companyname: formData.companyName,
                    license: formData.license,
                    type: formData.type
                }
            );

            console.log("Response:", response.data);
            setSuccess("Form submitted successfully!");
            setFormData({
                type: location.pathname.includes("seller") ? "seller" : "buyer",
                firstName: "",
                lastName: "",
                companyName: "",
                email: "",
                phone: "",
                message: "",
                license: "",
            });
            setErrors({});

            // Close modal after 2 seconds on success
            setTimeout(() => {
                onClose();
                setSuccess("");
            }, 2000);
        } catch (err: any) {
            console.error("Error submitting form:", err);
            setSuccess("❌ Failed to submit form. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // Animation variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    };

    const modalVariants: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        variants={backdropVariants}
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
                        variants={modalVariants}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 size-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 4L4 12M4 4L12 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </button>

                        {/* Form Content */}
                        <div className="p-6 md:p-8">
                            <h2 className="text-[32px] md:text-[40px] text-center font-pp-mori-semibold font-semibold mb-6">
                                Contact Us
                            </h2>

                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                {/* First & Last Name */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-[16px] font-medium text-gray-600">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Jacob"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="mt-1 h-[54px] bg-[#1C1C1C0A] rounded-lg px-2.5 focus:outline-none focus:ring-2"
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-[16px] font-medium text-gray-600">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Moore"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="mt-1 h-[54px] bg-[#1C1C1C0A] rounded-lg p-2.5 focus:outline-none focus:ring-2"
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Company Name */}
                                <div className="flex flex-col">
                                    <label className="text-[16px] font-medium text-gray-600">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        placeholder="Company name"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        className="mt-1 h-[54px] bg-[#1C1C1C0A] rounded-lg p-2.5 focus:outline-none focus:ring-2"
                                    />
                                    {errors.companyName && (
                                        <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                                    )}
                                </div>

                                {/* License */}
                                <div className="flex flex-col">
                                    <label htmlFor="licenseSelect" className="text-[16px] font-medium text-gray-600">
                                        License
                                    </label>
                                    <select
                                        id="licenseSelect"
                                        name="license"
                                        value={formData.license}
                                        onChange={handleChange}
                                        className="mt-1 h-[54px] bg-[#1C1C1C0A] rounded-lg p-2.5 focus:outline-none focus:ring-2"
                                    >
                                        <option value="" disabled>
                                            Select a License
                                        </option>
                                        <option value="aws">AWS</option>
                                        <option value="azure">Azure</option>
                                        <option value="openai">OpenAI</option>
                                        <option value="gcp">GCP</option>
                                        <option value="anthropic">Anthropic</option>
                                        <option value="gemini">Gemini</option>
                                    </select>
                                    {errors.license && (
                                        <p className="text-red-500 text-sm mt-1">{errors.license}</p>
                                    )}
                                </div>

                                {/* Email & Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="text-[16px] font-medium text-gray-600">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="name@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 h-[54px] bg-[#1C1C1C0A] rounded-lg p-2.5 focus:outline-none focus:ring-2"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="text-[16px] font-medium text-gray-600">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="080000000"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="mt-1 h-[54px] bg-[#1C1C1C0A] rounded-lg p-2.5 focus:outline-none focus:ring-2"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col">
                                    <label className="text-[16px] font-medium text-gray-600">Message</label>
                                    <textarea
                                        name="message"
                                        placeholder="Leave us a message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 h-[75px] bg-[#1C1C1C0A] rounded-lg p-2.5 focus:outline-none focus:ring-2 resize-none"
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                    )}
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full h-[64px] bg-[#19363F] text-white py-3 rounded-full text-lg font-[500] transition cursor-pointer ${loading ? "opacity-60" : "hover:bg-[#142b31]"
                                        }`}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>

                                {success && (
                                    <motion.p
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`text-center ${success.startsWith("❌") ? "text-red-600" : "text-green-600"
                                            }`}
                                    >
                                        {success}
                                    </motion.p>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Example usage component
export function ContactTriggerButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-[#19363F] text-white rounded-full font-medium hover:bg-[#142b31] transition"
            >
                Contact Us
            </button>

            <ContactFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}