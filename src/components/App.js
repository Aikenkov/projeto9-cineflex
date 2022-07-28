import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import Navbar from "./Navbar";
import MoviesOptions from "./MoviesOptions";



export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            {/* <MoviesOptions /> */}
            <Routes>
                <Route path="/" element={<MoviesOptions />} />
            </Routes>
        </BrowserRouter>
    )
}