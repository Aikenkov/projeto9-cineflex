import styled from "styled-components"
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Container from "../theme/Container";
import Movie from "../theme/Movie";


/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1TYXF-IlqTCvBs408b2ZW2wL8wK59S4yMw&usqp=CAU.png"
 */
function MovieTemplate() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
        promise.then(res => {
            setMovies(res.data)
        })
    }, [])

    return (
        <Container>
            <h1>Selecione o filme</h1>
            <MoviesList>
                {movies.map(item => {
                    return (
                        <Link to={`/sessoes/${item.id}`} key={item.id}>
                            <Movie >
                                <img src={item.posterURL} alt='tome' />
                            </Movie>
                        </Link>
                    )
                })}
            </MoviesList>
        </Container >
    )
}

export default function MoviesOptions() {
    return (
        <MovieTemplate />
    )
}


const MoviesList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 20px;

`

