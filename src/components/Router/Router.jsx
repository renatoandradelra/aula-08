import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/details/:id" element={<DetailsPage />}/>
                <Route path="*" element={<ErrorPage />}/>
            </Routes>

        </BrowserRouter>

    )

};

export default Router;