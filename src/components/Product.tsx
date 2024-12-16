

import Button from "./Button"

function Product({ val }) {
    return (
        <div className='w-full py-20 text-white'>
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Ensure val.title exists before accessing */}
                <h1 className="text-6xl capitalize font-medium">{val?.title || "Untitled"}</h1>
                <div className="w-full md:w-1/4 mt-10 md:mt-0">
                    {/* Ensure val.description exists before accessing */}
                    <p className="mb-10">{val?.description || "No description available."}</p>
                    <div className="flex items-center gap-5">
                        {/* Render buttons only if val.live or val.case exist */}
                        {val?.live && <Button title="Live Project" />}
                        {val?.case && <Button title="Case Study" />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product