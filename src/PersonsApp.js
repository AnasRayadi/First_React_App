import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import useHttp from "./components/hoocks/use-http";
import NewPerson from "./components/NewPerson/NewPerson";
import Persons from "./components/Persons/Persons";
import PersonContext from "./Contexts/person-context";
const PersonApp = () =>{
    const [persons, setPersons] = useState([])
    const [formIsVisible ,setFormIsVIsible] = useState(false)
  
  const showFormHandler = ()=>{
    setFormIsVIsible(true)
  }
  const hideFormHandler = ()=>{
    setFormIsVIsible(false)
  }

  const {isLoading ,error ,sendRequest:fetchPersons} = useHttp()

  const fetchData = ()=>{
    const submitData = (personsData) =>{
      setPersons(personsData)
      // console.log(personsData)
    }
    fetchPersons({url:'http://localhost:8080/api/v1/persons', method:'get'},submitData);
  }

  useEffect(() => {
   fetchData()
  }, [fetchPersons]);
 
  

  const refrechData = () =>{
    fetchData()
  }
  return (
    
    <PersonContext.Provider value={
      { persons,
        setPersons,
        formIsVisible,
        setFormIsVIsible,
        refrechData
      }
    }>
        <Header onShowForm={showFormHandler}/>
        {formIsVisible && <NewPerson onAddPerson={refrechData} onHideForm={hideFormHandler} />}
        <Persons data={persons} error = {error} loading = {isLoading} onFetch={fetchPersons} onHideForm={hideFormHandler}/>
        {/* <PersonList data={persons} onShowForm={showFormHandler} /> */}
    </PersonContext.Provider>
    
  );

}
export default PersonApp