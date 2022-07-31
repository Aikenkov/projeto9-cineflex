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
    setSeats,
    name,
    setName,
    cpf,
    setCpf,
    selectedId,
    setSelectedId }) {

    const { idSessao } = useParams();
    let navigate = useNavigate();




    useEffect(() => {
        setSelected([]);
        setName("");
        setCpf("");
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`
        );
        promise.then((res) => {
            setSeats(res.data);
        });
    }, []);

    function requestSeats(e) {
        e.preventDefault();
        let ids = selectedId.map(item => {
            return Number(item)
        });

        let data = {
            ids: ids,
            name: name,
            cpf: cpf,
        };
        console.log(data)

        const promise = axios.post(
            `https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`, data);
        promise.then(navigate("/sucesso"));
    }

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
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />
                    <form onSubmit={requestSeats}>
                        <Forms>
                            <h2>Nome do comprador</h2>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Digite seu Nome..."
                                required
                            />
                            <h2>CPF do comprador</h2>
                            <input
                                type="number"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                placeholder="Digite seu Cpf..."
                                required
                            />

                            <button type="submit">Reservar Assento(s)</button>
                        </Forms>
                    </form>
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


const Forms = styled.div`
  margin-top: 50px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  
 & ::placeholder{
    font-style: italic;
    color: #AFAFAF;
    font-size: 18px;
  }

  h2 {
    font-size: 18px;
    color: #293845;
    margin-bottom: 10px;
  }
  button {
    width: 225px;
    height: 42px;
    color: white;
    background-color: #e8833a;
    border: none;
    font-size: 18px;
    border-radius: 3px;
    cursor: pointer;
  }
  input {
    width: 300px;
    height: 51px;
    border-radius: 3px;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 18px;
    border: 1px solid #d4d4d4;
  }
`;