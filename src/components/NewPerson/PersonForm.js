import React from "react";
// import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import Modal from "../Modal/Modal";
import useInput from "../hoocks/use-input";

const PersonForm = (props) =>{
    const {
        value:enteredName,
        isValid:nameIsValid,
        hasError:nameIsInvalid,
        valueChangeHandler: nameChangeHandler,
        valueBlurHandler: nameBlurHandler,
        reset : resetName

    } = useInput(name => name.trim() !== '',props.defaultData?.name)

    const {
        value : enteredAge,
        isValid : ageIsValid,
        hasError : ageIsInvalid,
        valueChangeHandler : ageChangeHandler,
        valueBlurHandler : ageBlurHandler,
        reset : resetAge
    } = useInput(age => age >= 1 ,props.defaultData?.age)
    
    const {
        value : enteredEmail,
        isValid : emailIsValid,
        hasError : emailIsInvalid,
        valueChangeHandler : emailChangeHandler,
        valueBlurHandler : emailBlurHandler,
        reset : resetEmail
    } = useInput(email => email.trim() !=='' && email.includes('@') ,props.defaultData?.email)
    const {
        value : enteredPhone,
        isValid : phoneIsValid,
        hasError : phoneIsInvalid,
        valueChangeHandler : phoneChangeHandler,
        valueBlurHandler : phoneBlurHandler,
        reset : resetPhone
    } = useInput(phone => phone.trim() !== '' && phone.trim().length >= 10 , props.defaultData?.phone)
    
    const formIsValid = nameIsValid && ageIsValid && emailIsValid && phoneIsValid

    const nameError = nameIsInvalid && <p className="text-red-600 ml-2">Name must be not empty.</p>
    const ageError = ageIsInvalid && <p className="text-red-600 ml-2">Age must be not empty or under 1 .</p>
    const emailError = emailIsInvalid && <p className="text-red-600 ml-2">Email must be not empty and includes '@'</p>
    const phoneError = phoneIsInvalid && <p className="text-red-600 ml-2">Phone number must be not empty.</p>
    
    const submitFormHandler = event =>{
        event.preventDefault();
        if(!formIsValid){
            return;
        }
        const person = {
            name: enteredName,
            age:parseInt(enteredAge),
            email: enteredEmail,
            phone: enteredPhone,
        }
        props.onSubmitForm(person)
        console.log(person);
        resetName();
        resetAge();
        resetEmail();
        resetPhone();
    }
    
    return (
        // <Card>
            <Modal onHideForm={props.onHideForm}>
                <form onSubmit={submitFormHandler} className="block justify-center ">

                    <div className="flex justify-center">
                        <Input input ={{
                                        id:"fullName",
                                        type:"text",
                                        placeholder:"Full Name" ,
                                        value: enteredName ,
                                        onChange : nameChangeHandler ,
                                        onBlur : nameBlurHandler 
                                        }} 
                                        label = "Full Name" 
                                        error={nameError}
                                        />
                        
                        
                        <Input input={{
                                        id:"age",
                                        type:"number",
                                        placeholder:"Age",
                                        min:1 ,
                                        value:enteredAge ,
                                        onChange : ageChangeHandler ,
                                        onBlur : ageBlurHandler
                                        }} 
                                        label="Age" 
                                        error={ageError} />
                    </div>
                    <div className="flex justify-between ">
                        <Input input={{
                                        id:"email",
                                        type:"email", 
                                        placeholder:"Email" ,
                                        value:enteredEmail ,
                                        onChange : emailChangeHandler ,
                                        onBlur : emailBlurHandler
                                        }} 
                                        label="Email"
                                        error={emailError} />
                        <Input input={{
                                        id:"phone",
                                        type:"phone",
                                        placeholder:"Phone Number" ,
                                        value:enteredPhone ,
                                        onChange : phoneChangeHandler,
                                        onBlur : phoneBlurHandler
                                        }} 
                                        label="Phone Number" 
                                        error={phoneError}/>
                    </div>                
                    <div className="flex justify-between ">
                        <Button input={{type:"button" , onClick : props.onHideForm }} >Cancel</Button>
                        <Button input = {{type:"submit" , disabled:!formIsValid }} >{props.loading?'sending...': props.defaultData ? 'UPDATE':'ADD'}</Button>
                    </div>
                    <div>{props.error && <p>{props.error}</p>}</div>
                </form> 
            </Modal>
        // </Card>

        
            
            // <div className="flex justify-center">
            //             <div className="relative mb-3 w-[50%]">
            //                 <input
            //                     className="peer m-1 inline-block px-3 py-4 h-[50px] w-[95%] rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            //                     type="text" id="fullName" placeholder="Full Name" 
            //                     value={enteredName}
            //                     onChange={enteredNameHandler}
            //                 />
            //                 <label
            //                     htmlFor="name"
            //                     className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-3  text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            //                 >Full Name</label>
            //                 <p className="ml-1">error</p>
            //             </div>

            //             <div className="relative mb-3 w-[50%]">
            //                 <input
            //                     className="peer m-1 inline-block px-3 py-4 h-[50px] w-[95%] rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            //                     type="number" id="age" placeholder="Age" min={1} 
            //                     value={enteredAge}
            //                     onChange={enteredAgeHandler} 
            //                 />
            //                 <label
            //                     htmlFor="age"
            //                     className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-3  text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            //                 >Age</label>
            //                 <p className="ml-1">error</p>
            //             </div>
            //         </div>

            //         <div className="flex justify-center">
            //             <div className="relative mb-3 w-[50%]">
            //                 <input
            //                     className="peer m-1 inline-block px-3 py-4 h-[50px] w-[95%] rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            //                     type="text" id="email" placeholder="Email" 
            //                     value={enteredEmail}
            //                     onChange={enteredEmailHandler}
            //                 />
            //                 <label
            //                     htmlFor="email"
            //                     className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-3  text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            //                 >Email</label>
            //                 <p className="ml-1">error</p>
            //             </div>
            //             <div className="relative mb-3 w-[50%]">
            //                 <input
            //                     className="peer m-1 inline-block px-3 py-4 h-[50px] w-[95%] rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
            //                     type="text" id="phone" placeholder="Phone" 
            //                     value={enteredPhone}
            //                     onChange={enteredPhoneHandler}
            //                 />
            //                 <label
            //                     htmlFor="phone"
            //                     className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent p-3  text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            //                 >Phone Number</label>
            //                 <p className="ml-1">error</p>
            //             </div>

            //         </div>
            
    );
}
export default PersonForm