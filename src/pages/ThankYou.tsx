import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
    // const [count, setCount] = useState(3)
    const navigate = useNavigate()
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount((prev) => {
    //             if (prev <= 1) {
    //                 clearInterval(interval);
    //                 navigate("/");
    //                 return 0;
    //             }
    //             return prev - 1;
    //         });
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, [navigate]);

    useEffect(() => {
        const script = document.createElement('script');
        script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WDXZJG9N');`;
        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <>
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDXZJG9N" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
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

                    <button className="bg-green-900 text-white font-pp-mori-semibold font-semibold px-6 py-4 rounded-xl cursor-pointer"
                    onClick={()=>{
                        navigate("/")
                    }}
                    >
                        Go to Home Page
                    </button>

                </div>
            </div>
        </>
    );
}