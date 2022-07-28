import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components"
import axios from 'axios';
import Container from "../theme/Container";
import Movie from "../theme/Movie";



function MovieSessionsTemplate() {
    const [sessions, setSessions] = useState([])

    const params = useParams();


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`)
        promise.then(res => {
            setSessions(res.data)
        })
    }, [])


    return (
        <Container>
            <h1>Selecione o horário</h1>
            <Footer>
                <TesteMovie>
                    <img src={sessions.posterURL} />
                </TesteMovie>
                <h2>{sessions.title}</h2>
            </Footer>
        </Container>
    )
}

export default function MovieSessions() {
    return <MovieSessionsTemplate />
}

const Footer = styled.div`
    height: 117px;
    width: 100vw;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0;
    left: 0;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;

    h2{
        font-size: 26px;
        color: #293845;
    }
`;

const TesteMovie = styled(Movie)`
    width: 64px;
    height: 89px;
    margin: 0 15px 0 10px;
`