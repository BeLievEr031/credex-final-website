import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { BooleanProvider } from "../context/FormContext";

export default function Root() {
    const location = useLocation();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Whenever route changes → start transition
        setIsTransitioning(true);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }, 600)

        // Check scroll position until it reaches top
        const checkScroll = () => {
            if (window.scrollY <= 1) {
                // small delay for smoothness
                setTimeout(() => setIsTransitioning(false), 300);
            } else {
                requestAnimationFrame(checkScroll);
            }
        };

        requestAnimationFrame(checkScroll);
    }, [location.pathname]);

    return (
        <div className="relative min-h-screen">
            {/* 🔹 Loading / transition overlay */}
            {/* <AnimatePresence>
                {isTransitioning && (
                    <motion.div
                        key="page-loader"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.span
                            className="text-white text-lg font-medium tracking-widest"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ delay: 0.2 }}
                        >
                            Loading...
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence> */}

            {/* 🔹 Animated page transitions */}
            <AnimatePresence mode="sync">
                {!isTransitioning && (
                    <BooleanProvider>
                        <Outlet />
                    </BooleanProvider>
                )}
            </AnimatePresence>
        </div>
    );
}
