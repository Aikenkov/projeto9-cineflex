import styled from "styled-components"
import axios from 'axios';
import { useState, useEffect } from 'react';

/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM1TYXF-IlqTCvBs408b2ZW2wL8wK59S4yMw&usqp=CAU.png"
 */
function MovieTemplate() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
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
                        <Movie key={item.id}>
                            <img src={item.posterURL} alt='tome' />
                        </Movie>
                    )
                })}
            </MoviesList>
        </Container>
    )
}

export default function MoviesOptions() {
    return (
        <MovieTemplate />
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;

    h1{
        font-weight: 400;
        font-size: 24px;
        text-align: Center;
        padding: 55px 0 ;
    }

`

const MoviesList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 20px;

`

const Movie = styled.div`
    box-sizing: border-box;
    margin: 5px 15px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    height: 209px;
    width: 145px;
    img{
        height: 193px;
        width: 129px;
    }
`