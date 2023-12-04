import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import PersonApp from "../PersonsApp"
import PersonDetails from '../components/Persons/PersonDetails'
function PersonLayout() {
    return  <>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<PersonApp/>}/>
                        <Route path={"/:id/Details"} element={<PersonDetails/>}/>
                    </Routes>
                </BrowserRouter>
                <Outlet/>
            </>
}
export default PersonLayout