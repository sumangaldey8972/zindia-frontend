import { Route, Routes } from "react-router-dom"
import LandingPage from "../Pages/LandingPage/LandingPage"
import ProjectDetails from "../Pages/ProjectDetails/ProjectDetails"


const AllRoutes = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/:name' element={<ProjectDetails />} />
            </Routes>
        </>
    )
}

export default AllRoutes