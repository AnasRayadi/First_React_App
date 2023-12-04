import React from "react";
import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });
const DeleteButton = props => {
    return(
        <button
            {...props.input}
            data-te-ripple-init
            data-te-ripple-color="light"
            className="inline-block rounded bg-danger m-1 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#ca3b3b] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(202, 59, 59, 0.3),0_4px_18px_0_rgba(202, 59, 59, 0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(202, 59, 59, 0.3),0_4px_18px_0_rgba(202, 59, 59, 0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(202, 59, 59, 0.3),0_4px_18px_0_rgba(202, 59, 59, 0.2)] ">
            {props.children}
        </button>
    );
}
export default DeleteButton