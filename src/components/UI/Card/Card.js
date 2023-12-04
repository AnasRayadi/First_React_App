import React from "react";
const Card = props => {
    return (
        <>
            <div className="flex items-center justify-center w-full" >

            <div
                className="block  w-[80%] my-4 py-6 px-14 rounded-lg bg-white text-left shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    {props.children}
            </div>
            </div>
            {/* <div className="container bg-white mx-auto my-6 h-80 w-1/2 px-1.5 py-4 shadow-slate-700 rounded-xl justify-center">{props.children}</div> */}
        </>
    );

}
export default Card