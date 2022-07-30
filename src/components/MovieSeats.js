import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Container from "../theme/Container";
import Footer from "./Footer";
import Movie from "../theme/Movie";

function MovieSeatsTemplate() {
    const [session, setSession] = useState([]);
    const [seats, setSeats] = useState([]);
    const params = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`)
        promise.then((res) => {
            setSession(res.data);
            setSeats(res.data.seats)
        })
    }, [])



    return (
        <>
            <h1>tela 3</h1>
            <Footer>
                <Movie height="89px" width="64px" margin="0 15px 0 10px">
                    <img src={session.movie.posterURL} />
                </Movie>
                <div>
                    <h2>{session.movie.title}</h2>
                    <h2>{session.day.weekday} - {session.name}</h2>
                </div>
            </Footer>
        </>
    )
}

export default function MovieSeats() {
    return (
        <>
            <MovieSeatsTemplate />
        </>
    )
}


