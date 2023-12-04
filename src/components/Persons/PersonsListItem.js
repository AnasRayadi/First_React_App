import React, {useContext, useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import DeleteButton from '../UI/Button/DeleteButton';
import useHttp from '../hoocks/use-http';
// import NewPerson from '../NewPerson/NewPerson';
// import axios from 'axios';
import PersonForm from '../NewPerson/PersonForm';
import DeletePersonModal from '../DeletePerson/DeletePersonModal';
import PersonContext from '../../Contexts/person-context';
import { Link } from 'react-router-dom';


const PersonsListItem = ({person}) => {

    const ctx = useContext(PersonContext)
    const [defaultPerson, setDefaultPerson] = useState(null)
    //{name:'test',age:'10',email:'anasriyadi@gmail.com',phone:'0603423232343'}
    const [formIsVisible , setFormIsVisible] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [deletedId, setDeletedId] = useState()

    const {isLoading ,error ,sendRequest} = useHttp()

    const getPerson =  (id) =>{
        const getDefaulData = (editedPerson) =>{
            setDefaultPerson(editedPerson)
        }
        sendRequest({url:`http://localhost:8080/api/v1/persons/${parseInt(id)}`, method:'get'},getDefaulData);
    }

    useEffect(()=>{
        if(defaultPerson !== null){
            setFormIsVisible(true)
        }
    },[defaultPerson])

    
    const deleteClickHandler = (id) => {
        setIsOpen(true)
        setDeletedId(id)
    }
    const confirmDeleteHandler = () =>{
        const getDefaulData = (deletedPerson) =>{
            console.log('Person Deleted');
        }
        sendRequest({url:`http://localhost:8080/api/v1/persons/${parseInt(deletedId)}`, method:'delete'},getDefaulData);
        setIsOpen(false)
        if(!error){
            const newData = ctx.persons.filter(person => person.id !== deletedId)
            ctx.setPersons(newData)
        }
    }
    
    const cancelDeleteHandler = ()=>{
        setIsOpen(false)
    }
    const hideFormHandler = ()=>{
        setFormIsVisible(false)
    }
    const submitFormHandler = (updatedPerson) =>{
        const updatePerson = () =>{
            ctx.refrechData()
            console.log('Updated!')
            setFormIsVisible(false)
        }
        sendRequest({url:`http://localhost:8080/api/v1/persons/${parseInt(defaultPerson.id)}`,method:'put' ,data:updatedPerson},updatePerson.bind(null,updatedPerson))
    }
    return (
        <>    
            <tr key={person.id}
                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                 >
                <td className="whitespace-nowrap px-6 py-4 font-medium">{person.id}</td>
                <td className="whitespace-nowrap px-6 py-4">{person.name}</td>
                <td className="whitespace-nowrap px-6 py-4">{person.age}</td>
                <td className="whitespace-nowrap px-6 py-4">{person.email}</td>
                <td className="whitespace-nowrap px-6 py-4">{person.phone}</td>
                <td className="whitespace-nowrap px-6 py-4"><Button input ={{onClick : () => getPerson(person.id) }}>Edit</Button> <DeleteButton input={{onClick : () => deleteClickHandler(person.id)}}>delete</DeleteButton>
                <Link to={`/${person.id}/Details`} className="inline-block  rounded bg-primary m-1 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal disabled:opacity-75 disabled:cursor-not-allowed text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
                    Details</Link></td>
                {formIsVisible && <PersonForm defaultData={defaultPerson} onSubmitForm={submitFormHandler} error = {error} loading={isLoading} onHideForm={hideFormHandler}/>}
                <DeletePersonModal isOpen={isOpen} onCancel={cancelDeleteHandler} onConfirm={confirmDeleteHandler}/>
                {/* {personContext.formIsVisible && <PersonForm defaultData={defaultPerson} onSubmitForm={submitFormHandler} error = {error} loading={isLoading} />} */}
            </tr>
        </>
    );
}

export default PersonsListItem;
