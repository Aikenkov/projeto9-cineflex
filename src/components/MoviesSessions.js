import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components"
import axios from 'axios';
import Container from "../theme/Container";
import Footer from "./Footer";
import Movie from "../theme/Movie";

export default function MovieSessions() {
    const [sessions, setSessions] = useState([]);
    const [days, setDays] = useState(false);
    const params = useParams();

    useEffect(() => {
        window.scrollTo(0, 0)
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`)
        promise.then(res => {
            setSessions(res.data)
            setDays(res.data.days)
        })
    }, [])

    return (
        <Container>
            <h1>Selecione o horário</h1>
            {days !== false ?
                <AllSessions>
                    {days.map(item => {
                        return (
                            <WeekDaySessions key={item.id}>
                                <p>{item.weekday} - {item.date}</p>
                                <div>
                                    {(item.showtimes).map(value => {
                                        return (
                                            <Link key={value.id} to={`/assentos/${value.id}`}>
                                                <button >{value.name} </button>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </WeekDaySessions>
                        )
                    })}
                </AllSessions>
                : <h1> Carregando... </h1>}
            <Footer>
                <Movie height="89px" width="64px" margin="0 15px 0 10px">
                    <img src={sessions.posterURL} alt="alt" />
                </Movie>
                <div>
                    <h2>{sessions.title}</h2>
                </div>
            </Footer>
            )
        </Container>
    )
}


const WeekDaySessions = styled.div`   
        height: 100px;
        margin-left: 20px;
        margin-bottom: 23px;
        div {
            display: flex;
        }
        p {
            margin-bottom: 23px;
            font-size: 20px;
        }
         button {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #FFFFFF;
            font-size: 18px;
            width: 82px;
            height: 43px;
            background-color: #E8833A;
            margin-right: 8px;
            border: none;
            border-radius: 3px;
            cursor: pointer;       
        }
`
const AllSessions = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    margin: 55px 0 130px;
`;