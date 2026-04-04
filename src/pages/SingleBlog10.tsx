// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Footer from "../sections/common/Footer"
import BlogData from "./blog10.json"

function SingleBlog10() {
    return (
        <main className="font-pp-mori-regular">
            <Navbar />
            <section className="w-full bg-[#062524] pt-28 md:pt-44 pb-20 md:grid grid-cols-2 justify-items-center px-5 md:px-28 flex flex-col-reverse">
                <div className="md:w-[500px] mt-5 md:mt-0">
                    <h1 className="font-semibold font-pp-mori-semibold text-[32px] md:text-[40px] leading-tight text-white">
                        How to Build Voice AI Without Burning Through Your Budget: $500K in Deepgram Credits at 50% Off
                    </h1>
                    <div className="text-white pt-8">
                        <p className="font-pp-mori-regular tracking-widest">April 03, 2026</p>
                        <p>By Credex</p>
                    </div>
                </div>
                <div>
                    <div className="cursor-pointer mt-5 md:mt-0">
                        <div className="bg-[#121212] md:w-[638px] md:h-[410px] rounded-[20px] overflow-hidden">
                            <img src="https://miro.medium.com/v2/resize:fit:788/1*I3RDF2JS_Tg0LObY45vgPw.png" alt="" className="w-full h-full object-cover object-top" />
                        </div>
                    </div>
                </div>
            </section>
            <main className="flex flex-col md:flex-row gap-2 justify-center">
                <section className="md:w-[790px] px-5 md:pr-10 md:text-justify">
                    <div className="flex justify-center pt-5 md:pt-12">
                        <div className="space-y-5 mt-4 md:mt-0">
                            {
                                BlogData.data.map((item, index) => {
                                    if ('h1' in item) {
                                        return (
                                            <h1 key={index} className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">
                                                {String(item.h1).trim()}
                                            </h1>
                                        )
                                    }

                                    if ('h2' in item) {
                                        return (
                                            <h1 key={index} className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">
                                                {item.h2}
                                            </h1>
                                        )
                                    }

                                    if ('p' in item) {
                                        return (
                                            <p key={index} className="text-[#19363FB2] md:text-xl">
                                                {item.p?.trim()}
                                            </p>
                                        )
                                    }

                                    if ('img' in item) {
                                        return <BlogImg key={index} src={item.img!} />
                                    }

                                    if ('ul' in item && Array.isArray(item.ul)) {
                                        return (
                                            <p key={index} className="text-[#19363FB2] md:text-xl mt-4 px-4">
                                                <ul className="space-y-3">
                                                    {item.ul.map((bullet, liIndex) => (
                                                        <li key={liIndex} className="list-disc ml-5">
                                                            {bullet}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </p>
                                        )
                                    }

                                    return null
                                })
                            }
                        </div>
                    </div>
                </section>

                <section className=" md:w-[411px] pt-10 relative block">
                    <div className="flex justify-center items-center sticky top-[100px]">
                        <div className="bg-[#062f2a] text-white  rounded-sm shadow-lg relative py-7 md:py-15 px-10 md:px-10 w-[95%] md:w-full">

                            <h2 className="text-3xl font-semibold leading-tight mb-6">
                                Ready to recover sunk costs?
                            </h2>

                            <ul className="space-y-4 text-lg text-gray-200 mb-10 list-disc pl-5">
                                <li>
                                    Explore How Synth Assistant Is Reshaping Productivity And
                                    Collaboration Across Industries.
                                </li>
                                <li>
                                    Is Reshaping Productivity And
                                </li>
                            </ul>

                            <div className="flex justify-center">
                                <Link to={"/#plan-pricing"} className="bg-[#0FF395] hover:bg-emerald-300 text-black font-medium px-6 py-3 rounded-lg transition">
                                    Explore Credex packages
                                </Link>
                            </div>

                        </div>

                        <div className="absolute -bottom-5 md:-bottom-16 left-1/2 -translate-x-1/2 -z-10">
                            <svg width="300" height="164" viewBox="0 0 669 164" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden md:block">
                                <path d="M0 0H669V164L334.5 155L0 164V0Z" fill="#F15A42" />
                            </svg>

                            <svg width="314" height="124" viewBox="0 0 314 124" fill="none" xmlns="http://www.w3.org/2000/svg" className="block md:hidden">
                                <path d="M0.875 0.875H313.875V123.875L157.375 117.125L0.875 123.875V0.875Z" fill="#F15A42" />
                            </svg>


                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </main>
    )
}

export default SingleBlog10;

function BlogImg({ src }: { src: string }) {
    return (
        <div>
            <div className="bg-black  mt-5 overflow-hidden relative">
                <img src={src} alt="" className="w-full object-cover h-full" />

                <div className="absolute w-full h-2 top-0 left-0 bg-white"></div>
                <div className="absolute w-full h-2 bottom-0 left-0 bg-white"></div>
                <div className="absolute w-2 h-full top-0 left-0 bg-white"></div>
                <div className="absolute w-2 h-full top-0 right-0 bg-white"></div>


            </div>
        </div>
    )
}

// function P() {
//     return <p className="text-[#19363FB2] md:text-xl mt-4">
//         <Outlet />
//     </p>
// }

// function H1() {
//     return <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">
//         <Outlet />
//     </h1>
// }