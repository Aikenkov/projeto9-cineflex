import styled from "styled-components"
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Container from "../theme/Container";
import Movie from "../theme/Movie";

function MoviesList() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
        promise.then(res => {
            setMovies(res.data)
        })

    }, [])

    return (
        <Movies>
            {movies.map(item => {
                return (
                    <Link to={`/sessoes/${item.id}`} key={item.id}>
                        <Movie height="209px" width="145px" margin="5px 15px">
                            <img src={item.posterURL} alt='tome' />
                        </Movie>
                    </Link>
                )
            })}
        </Movies>

    )
}

export default function MoviesOptions() {
    return (
        <Container>
            <h1>Selecione o filme</h1>
            <MoviesList />
        </Container >

    )
}


const Movies = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 55px 20px 0;

`

