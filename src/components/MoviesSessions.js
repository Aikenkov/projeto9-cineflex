import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import styled from "styled-components"
import axios from 'axios';
import Container from "../theme/Container";
import Movie from "../theme/Movie";
import Footer from "./Footer";



function MovieSessionsTemplate() {
    const [sessions, setSessions] = useState([]);
    const [days, setDays] = useState(false);
    const params = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${params.idFilme}/showtimes`)
        promise.then(res => {
            setSessions(res.data)
            setDays(res.data.days)
        })
    }, [])


    return (
        <>
            {days != false ? (
                <AllSessions>
                    {days.map(item => {
                        return (
                            <WeekDaySessions key={item.id}>
                                <p>{item.weekday} - {item.date}</p>
                                <div>
                                    {(item.showtimes).map(value => {
                                        return <button key={value.id}>{value.name} </button>
                                    })}
                                </div>
                            </WeekDaySessions>
                        )
                    })}
                </AllSessions>)
                : (<h1>Carregando...</h1>)}
            <Footer>
                <SmallMovie>
                    <img src={sessions.posterURL} />
                </SmallMovie>
                <div>
                    <h2>{sessions.title}</h2>
                </div>
            </Footer>
        </>
    )
}

export default function MovieSessions() {
    return (
        <Container>
            <h1>Selecione o horário</h1>
            <MovieSessionsTemplate />
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
    
   
`;


const SmallMovie = styled(Movie)`
    width: 64px;
    height: 89px;
    margin: 0 15px 0 10px;
`