import React from "react";
import PersonList from "./PersonsList";
import Card from "../UI/Card/Card";
const Persons = (props) => {
    let personsList =
                      <Card> 
                          <div className='text-center font-bold text-xl'><h2>No person found. Start adding some!</h2></div>
                      </Card>;
                      
    if (props.data.length > 0) {
        personsList = (
            <PersonList data = {props.data} onHideForm={props.onHideForm}/>
        );
    }
    let content = personsList;

    if (props.error) {
      content = <div className='text-center font-bold text-xl'><button onClick={props.onFetch}>Try again</button></div>;
    }
    
    if (props.loading) {
      content =<div className='text-center font-bold text-xl'>Loading persons...</div> ;
    }

    return(
        <>
        {content}
        </>
    );
}
export default Persons