import React from "react";
import PersonForm from "./PersonForm";
import useHttp from "../hoocks/use-http";
const NewPerson = (props) =>{

    const {error,isLoading,sendRequest} = useHttp()
    
    const submitFormHandler = (newPerson) =>{
        const addPerson = (newPerson) =>{
            props.onAddPerson(newPerson)
        }
        sendRequest({url:'http://localhost:8080/api/v1/persons',method:'post' ,data:newPerson},addPerson.bind(null,newPerson))
    }

    return(
        <>
            <PersonForm onSubmitForm={submitFormHandler} error = {error} onHideForm={props.onHideForm} loading={isLoading} />
        </>
    );
}
export default NewPerson