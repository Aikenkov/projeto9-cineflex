import styled from "styled-components"
import axios from 'axios';

function MovieTemplate() {



    return (
        <Movie>
            <h1>Selecione o filme</h1>
            <div>Selecione o filme</div>
        </Movie>
    )
}

export default function MoviesOptions() {
    return (
        <MovieTemplate />
    )
}

const Movie = styled.div`
background-color: black;
height: 100px;
width: 100px;
`