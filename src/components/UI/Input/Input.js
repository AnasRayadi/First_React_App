import React from "react";

const validClassInput = "peer m-1 inline-block px-3 py-4 h-[50px] w-[95%] rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
const invalidlassForInput = "peer m-1 inline-block px-3 py-4 h-[50px] w-[95%] rounded border border-solid border-danger bg-orange-100 bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-orange-300  focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-danger "
const validClassForLabel = "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-3  text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary" 
const invalidClassForLabel = "pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-3  text-danger-500  transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-danger "
const Input = props => {
    return (
           <>
            <div className="relative mb-3 w-[50%]">
                 <input
                    // className="peer m-1 inline-block px-3 py-4 h-[50px] w-[95%] rounded border border-solid border-neutral-300 bg-orange-100 bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary "
                    className={props.error ? invalidlassForInput : validClassInput}
                    {...props.input}
                />
                <label
                    htmlFor={props.input.id}
                    // className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-3  text-danger-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-danger "
                    className={props.error ? invalidClassForLabel : validClassForLabel}
                    >{props.label}</label>
                {/* {props.error && <p className="text-red-600 ml-2">error</p>} */}
                {props.error}
            </div>
           </>
    );
}
export default Input