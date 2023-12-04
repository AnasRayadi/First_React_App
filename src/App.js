import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import React from "react";
// import PersonLayout from "./PersonLayout/root";
import PersonApp from "./PersonsApp";
import PersonDetails from "./components/Persons/PersonDetails";



const App = () => {
  
  
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<PersonApp/>}/>
          <Route path={"/:id/Details"} element={<PersonDetails/>}/>
        </Routes>
      </BrowserRouter>
      <Outlet/>
    </>
    // <PersonLayout/>
  );
}
export default App;