import React from "react";
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
const Button = props => {
    return(
        <button
            // onClick={props.onclick}
            {...props.input}
            data-te-ripple-init
            data-te-ripple-color="light"
            className="inline-block  rounded bg-primary m-1 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal disabled:opacity-75 disabled:cursor-not-allowed text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
            
            {props.children}
        </button>
    );
}

export default Button