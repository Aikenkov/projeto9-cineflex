import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResetCss from "../theme/resetCss";
import GlobalStyle from '../theme/globalStyles';

import Navbar from "./Navbar";
import MoviesOptions from "./MoviesOptions";
import MovieSessions from "./MoviesSessions";
import MovieSeats from "./MovieSeats";



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
                    <Route path="/assentos/:idSessao" element={<MovieSeats />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}