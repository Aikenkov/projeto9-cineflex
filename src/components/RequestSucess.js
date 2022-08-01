
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
export default function RequestSucess({ name, cpf, setCpf, selected, seats }) {
    useEffect(() => {
        window.scrollTo(0, 0);
        formatCPF(cpf);
    }, [])

    function formatCPF(cpf) {
        const currentCpf = cpf

        let formattedCpf;

        formattedCpf = currentCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,
            function (regex, argument1, argument2, argument3, argument4) {
                return argument1 + '.' + argument2 + '.' + argument3 + '-' + argument4;
            })
        setCpf(formattedCpf)
    }

    return (
        <Wraper>
            <h1>Pedido feito
                com sucesso!</h1>

            <Informations>
                <div>
                    <h2>Filme e sessão</h2>
                    <p>{seats.movie.title}</p>
                    <p>{seats.day.weekday} - {seats.name}</p>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    {selected.map((seat, index) => (
                        <p key={index}>Assento {seat}</p>
                    ))}
                </div>
                <div>
                    <h2>Comprador</h2>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </div>
            </Informations>
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </Wraper>
    )
}

const Wraper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 67px;

    h1{
        margin: 40px 0;
        font-weight: 700;
        font-size: 24px;
        color: #247A6B;
        text-align: center;
        line-height: 28px;
        letter-spacing: 1.5px;
    }
    h2{
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 15px;
    }
    p{
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 1.5px;
        margin-bottom: 6px;
    }
    button {
    margin-top: 50px;
    background-color: #e8833a;
    color: white;
    font-size: 18px;
    border-radius: 3px;
    border: none;
    width: 225px;
    height: 42px;
    cursor: pointer;
  }
`

const Informations = styled.div`

    display: flex;
    flex-direction: column;
    width: 85%;
    div{
        margin-bottom: 50px;
    }
    

`;