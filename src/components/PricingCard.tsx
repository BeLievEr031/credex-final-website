type PricingCardProps = {
    logo: string;
    product: string;
    validity: string;
    credits: string;
    rateLimits: string;
};

export default function PricingCard({
    logo,
    product,
    validity,
    credits,
    rateLimits,
}: PricingCardProps) {


    return (
        <div className="flex items-center justify-center bg-gray-50 shrink-0 cursor-pointer">
            <div className="w-[250px] md:w-full shrink-0 rounded-2xl border border-gray-300 bg-white p-8 shadow-sm">

                {/* Logo - centered on mobile, left on desktop */}
                <div className="mb-8 flex justify-center md:justify-start">
                    <img src={logo} alt={product} className="h-8 object-contain" />
                </div>

                <div className="space-y-5">
                    {/* Each row: col on mobile, row on desktop */}
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Product</span>
                        <span className="text-gray-900 font-medium md:text-right">{product}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Validity</span>
                        <span className="text-gray-900 font-medium md:text-right">{validity}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Credits</span>
                        <span className="text-gray-900 font-medium md:text-right">{credits.toUpperCase()}</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center md:justify-between gap-1 md:gap-4">
                        <span className="text-gray-500 shrink-0">Rate Limits / Support</span>
                        <span className="text-gray-900 font-medium md:text-right">{rateLimits}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}