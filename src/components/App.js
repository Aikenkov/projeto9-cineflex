import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResetCss from "../theme/resetCss";
import GlobalStyle from '../theme/globalStyles';

import Navbar from "./Navbar";
import MoviesOptions from "./MoviesOptions";
import MovieSessions from "./MoviesSessions";




export default function App() {
    return (
        <>
            <ResetCss />
            <GlobalStyle />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MoviesOptions />} />
                    <Route path="/sessoes/:idFilme" element={<MovieSessions />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}