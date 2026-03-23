import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
    const [count, setCount] = useState(3)
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    navigate("/");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <Navbar />
            <div className="text-center max-w-md">

                <h1 className="text-4xl font-semibold font-pp-mori-semibold text-green-900 mb-3">
                    Thank You!
                </h1>

                <p className="text-gray-600 mb-2">
                    Your form has been submitted successfully.
                </p>

                <p className="text-gray-600 mb-6">
                    We’ll get back to you shortly.
                </p>

                <p>
                    Redirecting to home page in {count}
                </p>

            </div>
        </div>
    );
}