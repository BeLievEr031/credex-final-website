import Navbar from "../components/Navbar"
import Footer from "../sections/common/Footer"


function SingleBlog() {
    return (
        <main className="pt-40 md:pt-48 font-pp-mori-regular">
            <Navbar />
            <section className="px-3 md:px-24">
                <div>
                    <h1 className="md:w-1/2 font-semibold font-pp-mori-semibold text-[32px] md:text-[48px] leading-tight">The Future of Work: How AI is Transforming the Workplace</h1>
                    <p className="text-[#19363FB2] md:text-xl mt-2">Explore how Synth Assistant is reshaping productivity and collaboration across industries.</p>
                </div>

                <div className="w-full h-[290px] md:h-[585px] bg-black rounded-xl mt-10">
                    <img src="" alt="" />
                </div>

                <div className="grid md:grid-cols-[1fr_3fr] pt-10 md:pt-24">
                    <div>
                        <p className="font-pp-mori-regular tracking-widest">APR 23, 2024</p>
                        <p>By Sulaimaan Durrani</p>
                    </div>
                    <div className="space-y-10 md:space-y-20 mt-4 md:mt-0">
                        <div>
                            <h1 className="md:text-3xl text-2xl font-semibold font-pp-mori-semibold">Embracing AI in the Modern Workplace</h1>
                            <p className="text-[#19363FB2] md:text-xl">In today's rapidly evolving business environment, artificial intelligence (AI) is not just a tool but a transformative force reshaping how we work, collaborate, and innovate. Synth Assistant, with its advanced AI capabilities, is at the forefront of this revolution, enabling businesses and individuals to achieve more with less effort. This post explores how AI, particularly through solutions like Synth Assistant, is influencing the future of work.</p>
                        </div>
                        <div>
                            <h1 className="text-3xl">Embracing AI in the Modern Workplace</h1>
                            <p className="text-[#19363FB2] text-xl">In today's rapidly evolving business environment, artificial intelligence (AI) is not just a tool but a transformative force reshaping how we work, collaborate, and innovate. Synth Assistant, with its advanced AI capabilities, is at the forefront of this revolution, enabling businesses and individuals to achieve more with less effort. This post explores how AI, particularly through solutions like Synth Assistant, is influencing the future of work.</p>
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </main>
    )
}

export default SingleBlog