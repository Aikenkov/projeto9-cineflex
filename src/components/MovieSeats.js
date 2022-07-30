import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Container from "../theme/Container";
import Footer from "./Footer";
import Movie from "../theme/Movie";
import ButtonSeat from "../theme/Seat";


function MovieSeatsTemplate() {
    const [session, setSession] = useState([]);
    const [seats, setSeats] = useState([]);
    const [day, setDay] = useState([]);
    const [movie, setMovie] = useState([]);
    const [selected, setSelected] = useState(false)
    const params = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${params.idSessao}/seats`)
        promise.then((res) => {
            setSession(res.data);
            setSeats(res.data.seats)
            setMovie(res.data.movie);
            setDay(res.data.day)
        })
    }, [])

    return (
        <>
            <Seats>
                {seats.map(item => {
                    return (
                        <ButtonSeat key={item.id} selected={selected} state={item.isAvailable} >{item.name}</ButtonSeat>
                    )
                })}
            </Seats>
            <Exemples>
                <div>
                    <button ></button>
                    <span>Selecionado</span>
                </div>
                <div>
                    <button ></button>
                    <span>Disponível</span>
                </div>
                <div>
                    <button ></button>
                    <span>Indisponível</span>
                </div>
            </Exemples>
            <Footer>
                <Movie height="89px" width="64px" margin="0 15px 0 10px">
                    <img src={movie.posterURL} />
                </Movie>
                <div>
                    <h2>{movie.title}</h2>
                    <h2>{day.weekday} - {session.name}</h2>
                </div>
            </Footer>
        </>
    )
}

export default function MovieSeats() {
    return (
        <Container>
            <h1>Selecione o(s) assento(s)</h1>
            <MovieSeatsTemplate />
        </Container>
    )
}



const Exemples = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    margin-top: 20px;

    button{
        border-radius: 50%;
        
        width: 26px;
        height: 26px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 50px;
    }

    & > :nth-child(1) button{
        background-color: #8DD7CF;
        border: solid 1px #1AAE9E;
    }
    & > :nth-child(2) button{
        background-color: #C3CFD9;
        border: solid 1px #808F9D;
    }
    & > :nth-child(3) button{
        background-color: #FBE192;
        border: solid 1px #F7C52B;
    }
`;

const Seats = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 25px 24px 0;
    height: 230px;
    width: 370px;
`;