import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../sections/common/Footer"

function Blog() {
    const navigate = useNavigate()

    return (
        <main className="pt-40 md:pt-48 font-pp-mori-regular">
            <Navbar />
            <section className="px-3 md:px-24">
                <div className="grid md:grid-cols-2">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="uppercase font-pp-mori-regular tracking-wider text-[#747373] font-normal md:text-left text-center">Insights & Ideas</p>
                            <h1 className="font-pp-mori-semibold text-[36px] leading-tight mt-4 font-semibold ">
                                <p>Latest blog posts</p>
                                <p>from our team</p>
                            </h1>
                        </div>
                        <div>
                            <p className="text-[#747373]">Get updates, news straight to your inbox.</p>
                            <div className="space-x-2 pt-3">
                                <input type="text" className="bg-[#121212] px-4 py-2 rounded-full outline-none text-[#E2E2E2]" placeholder="Jessica@email.com" />
                                <button className="bg-[#E2E2E2] px-4 py-2 rounded-full mt-2 md:mt-0">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    <div className="py-12 md:py-3 bg-[#1212120A] md:px-4 rounded-xl space-y-2 cursor-pointer" onClick={() => navigate(`${"how-we-bootstrapped-a-fintech-startup-to-$2m-arr-using-smart-ai-infrastructure:-a-founder’s-case-study"}`)}>
                        <p className="text-2xl font-semibold font-pp-mori-semibold w-[75%]">How We Bootstrapped a Fintech Startup to $2M ARR...</p>
                        <div className="text-sm text-[#19363FB2]">
                            <p>Credex - 9th Dec, 2025</p>
                        </div>
                        {/* <p className="text-[#19363FB2] text-[20px]">Create superior code, compose emails, boost any kind of work within a collaborative team.</p> */}


                        <div className="w-full md:w-[520px] h-[230px] md:h-[281px] bg-[#1C1C1C] rounded-xl mt-6 overflow-hidden">
                            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YMpisxvxklmlNKviyAA33g.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 pt-8 md:pt-24 gap-x-5 gap-y-5">
                    <BlogCard2 />
                    <BlogCard />
                </div>
            </section>
            <Footer />
        </main>
    )
}



const BlogCard = () => {
    const navigate = useNavigate()
    return <div className="cursor-pointer" onClick={() => navigate(`${"a-million-dollar-email"}`)}>
        <div className="bg-[#121212] md:w-[378px] h-[230px] rounded-[20px] overflow-hidden">
            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*-rCRNFVhXMR8P9TmX4Gw0Q.png" alt="" className="w-full h-full object-cover" />
        </div>
        <p className="text-2xl font-semibold font-pp-mori-semibold pt-4">
            A Million Dollar Email
        </p>
        <div className="text-sm text-[#19363FB2]">
            <img src="" alt="" />
            <p>Credex- 27th Nov, 2025</p>
        </div>
        {/* <p>
            Explore how strategic use of white space improves focus, hierarchy, and overall user experience.
        </p> */}
    </div>
}
const BlogCard2 = () => {
    const navigate = useNavigate()
    return <div className="cursor-pointer" onClick={() => navigate(`${"how-we-bootstrapped-a-fintech-startup-to-$2m-arr-using-smart-ai-infrastructure:-a-founder’s-case-study"}`)}>
        <div className="bg-[#121212] md:w-[378px] h-[230px] rounded-[20px] overflow-hidden">
            <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YMpisxvxklmlNKviyAA33g.png" alt="" className="w-full h-full object-cover" />
        </div>
        <p className="text-2xl font-semibold font-pp-mori-semibold pt-4">
            How We Bootstrapped a Fintech Startup to $2M ARR...
        </p>
        <div className="text-sm text-[#19363FB2]">
            <img src="" alt="" />
            <p>Credex- 9th Dec, 2025</p>
        </div>
        {/* <p>
            Explore how strategic use of white space improves focus, hierarchy, and overall user experience.
        </p> */}
    </div>
}

export default Blog