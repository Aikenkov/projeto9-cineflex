import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Container from "../theme/Container";
import Footer from "./Footer";
import Movie from "../theme/Movie";
import Seats from "./Seats";



export default function MovieSeats({
    selected,
    setSelected,
    seats,
    setSeats, }) {

    const { idSessao } = useParams();
    let navigate = useNavigate();


    useEffect(() => {
        setSelected([]);
        /* setName("");
        setCpf(""); */
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
        );
        promise.then((res) => {
            setSeats(res.data);
        });
    }, []);


    return (
        <Container>
            <h1>Selecione o(s) assento(s)</h1>
            {seats.length === 0 ? (
                "carregando"
            ) : (
                <>
                    <Seats
                        seats={seats.seats}
                        selected={selected}
                        setSelected={setSelected}
                    />
                    <Footer>
                        <Movie height="89px" width="64px" margin="0 15px 0 10px">
                            <img src={seats.movie.posterURL} alt="alt" />
                        </Movie>
                        <div>
                            <h2>{seats.movie.title}</h2>
                            <h2>{seats.day.weekday} - {seats.name}</h2>
                        </div>
                    </Footer>
                </>
            )}

        </Container>
    )
}