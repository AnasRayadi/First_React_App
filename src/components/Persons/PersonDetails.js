import { Link, useParams } from 'react-router-dom';
import useHttp from '../hoocks/use-http';
import { useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
const PersonDetails = () => {
    const params = useParams()
    const [person, setPerson] = useState({})
    
    const id = params.id
    const {sendRequest} = useHttp()
    const getPerson =  () =>{
        const getData = (editedPerson) =>{
            setPerson(editedPerson)
        }
        sendRequest({url:`http://localhost:8080/api/v1/persons/${parseInt(id)}`, method:'get'},getData);
    }
    useEffect(()=>{
        getPerson()
    },[sendRequest])
    return (
            <Card>
                <Card>
                    <table className="table-auto">
                    <tbody>
                        <tr>
                            <td>Id :</td>
                            <td>{person.id}</td>
                        </tr>
                        <tr>
                            <td>Full Name :</td>
                            <td>{person.name}</td>
                        </tr>
                        <tr>
                            <td>Age :</td>
                            <td>{person.age}</td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td>{person.email}</td>
                        </tr>
                        <tr>
                            <td>Phone :</td>
                            <td>{person.phone}</td>
                        </tr>
                        
                    </tbody>
                    </table>
                </Card>
                <Link to={'/'} className="inline-block rounded bg-primary m-1 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal disabled:opacity-75 disabled:cursor-not-allowed text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] ">
                Go Back</Link>
            </Card>
    );
}

export default PersonDetails;
