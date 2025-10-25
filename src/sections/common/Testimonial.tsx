import clsx from "clsx";
import { motion } from "motion/react"
interface IProp {
    reviews: { name: string; designation: string; review: string, img: string }[]
}
function Testimonial({ reviews }: IProp) {


    return (
        <section className="py-10 mx-auto mt-[50px] md:mt-[120px] font-pp-mori-regular overflow-x-hidden px-2 md:px-0">
            <div className="text-center space-y-2">
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#7F7F7F] uppercase tracking-widest text-[10.5px] md:text-sm">Testimonials</motion.p>
                <motion.h1 className="text-[30px] md:text-[40px] font-pp-mori-semibold font-semibold"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >Our customer reviews</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#00000080] text-[12px] md:text-[16px]">See what other clients are saying about their experience with Credex</motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-[#00000080] text-[10px] md:text-[14px]">

                    <p>
                        (<b>Note</b>: Names, photos, and company names are representative due to NDA. Results are real, identities are anonymized.)
                    </p>
                </motion.p>
            </div>

            <div
                className="pt-12 md:pt-24 flex gap-x-2 animate-scroll"
                style={{ willChange: "transform" }}

            >
                {[...reviews, ...reviews].map(({ designation, name, review, img }) => (
                    <ReviewCard designation={designation} name={name} review={review} imgSrc={img} />
                ))}
                {reviews.map(({ designation, name, review, img }) => (
                    <ReviewCard designation={designation} name={name} review={review} imgSrc={img} />
                ))}
            </div>
        </section>
    )
}

function ReviewCard({ designation, name, review, imgSrc }: { name: string; designation: string; review: string, imgSrc: string }) {
    // function generateAvatarPattern(seed?: string) {
    //     const size = 5
    //     const colors = ["#0FF395", "#F15A42", "#FFCE45", "#4CC9F0", "#7C3AED", "#22D3EE"]
    //     const random = seed
    //         ? () => {
    //             let hash = 0
    //             for (let i = 0; i < seed.length; i++) {
    //                 hash = seed.charCodeAt(i) + ((hash << 5) - hash)
    //             }
    //             return (hash = (hash & 0xfffffff) / 0xfffffff)
    //         }
    //         : Math.random
    //     const color = colors[Math.floor(random() * colors.length)]
    //     const pattern = Array(size)
    //         .fill(0)
    //         .map(() => Array(size).fill(0).map(() => (random() > 0.5 ? color : "transparent")))
    //     return { pattern, color }
    // }

    // const { pattern } = generateAvatarPattern()
    // const blockSize = 80 / pattern.length

    return (
        <div className="rounded-2xl border-1 border-[#19363F73] bg-[#19363F0D] w-[185px] h-[300px] md:w-[330px] md:h-[420px] p-[18px] md:p-8 flex flex-col justify-between shrink-0">
            <p className={clsx("text-[12px] md:text-[16px]", {

            })}

            >“{review}”</p>
            <div className="flex gap-x-2 md:gap-x-4 mt-4 items-center">
                <div className="shrink-0 rounded-full overflow-hidden border border-gray-200 size-[25px] md:size-[50px]">
                    <img src={imgSrc} alt="" className="scale-125 object-cover object-top" />
                </div>
                <div className="">
                    <p className="text-[#1A1A1A] font-medium text-[9px] md:text-[16px]">{name}</p>
                    <p className="text-[#7F7F7F] text-[7px] md:text-sm">{designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
