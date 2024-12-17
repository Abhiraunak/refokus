import { motion } from "framer-motion";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
function Card({ width, start, para, hover = "false" }) {
    return (
        <motion.div whileHover={{
            backgroundColor: hover === "true" && "#7443ff",
            padding: "25px",
        }} className={`bg-zinc-800 p-5 rounded-xl ${width}  min-h-[30rem] flex flex-col justify-between`}>

            <div className="w-full">
                <div className="flex justify-between items-center">
                    <h3>heading one</h3>
                    <HiMiniArrowSmallRight />
                </div>
                <h1 className="text-3xl font-medium mt-10">Whatever heading</h1>
            </div>
            <div className="bottmeText w-full mt-60">
                {start && (
                    <>
                        <h1 className="text-6xl font-semibold tracking-tight leading-none">Start the Project</h1>
                        <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-500">Contact us</button>
                    </>
                )}
                {para && (
                    <>
                        <p className="text-sm text-zinc-500 font-medium">Here add some text for testing purpose</p>
                    </>
                )}
            </div>
        </motion.div>
    )
}

export default Card