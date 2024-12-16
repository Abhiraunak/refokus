import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function Button({title='Get Started'}) {
    return (
        <div className="button min-w-40 px-4 py-2 bg-zinc-100 rounded-full text-black flex items-center justify-between">
            <span className="text-sm font-medium">{title}</span>
            <HiOutlineArrowNarrowRight />
        </div>
    )
}

export default Button