import { useState } from "react";

const useInput = (validate,defaultValue) =>{
    const [enteredValue, setEnteredValue] = useState(defaultValue || '');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validate(enteredValue)
    const valueIsInvalid = !valueIsValid && isTouched

    const valueChangeHandler = (event) =>{
        setEnteredValue(event.target.value)
    }
    const valueBlurHandler = () =>{
        setIsTouched(true)
    }
    const reset = () =>{
        setEnteredValue('')
        setIsTouched(false)
    }
    return {
        value : enteredValue,
        isValid : valueIsValid,
        hasError : valueIsInvalid,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}
export default useInput 