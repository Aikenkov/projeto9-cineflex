import { BrowserRouter, Routes, Route } from "react-router-dom";

import ResetCss from "../theme/resetCss";
import GlobalStyle from '../theme/globalStyles';

import { useState } from 'react';
import Navbar from "./Navbar";
import MoviesOptions from "./MoviesOptions";
import MovieSessions from "./MoviesSessions";
import MovieSeats from "./MovieSeats";
import RequestSucess from "./RequestSucess";



export default function App() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [selected, setSelected] = useState([]);
    const [seats, setSeats] = useState([]);



    return (
        <>
            <ResetCss />
            <GlobalStyle />
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MoviesOptions />} />
                    <Route path="/sessoes/:idFilme" element={<MovieSessions />} />
                    <Route
                        path="/assentos/:idSessao"
                        element={<MovieSeats
                            selected={selected}
                            setSelected={setSelected}
                            seats={seats}
                            setSeats={setSeats}
                            name={name}
                            setName={setName}
                            cpf={cpf}
                            setCpf={setCpf}
                        />}
                    />
                    <Route
                        path="/sucesso"
                        element={
                            <RequestSucess
                                name={name}
                                cpf={cpf}
                                selected={selected}
                                seats={seats}
                            />
                        }
                    />
                </Routes>

            </BrowserRouter>
        </>
    )
}