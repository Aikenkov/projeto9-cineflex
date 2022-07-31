
import styled from "styled-components";
import Seat from "./Seat";

export default function Seats({ seats, selected, setSelected }) {

    return (
        <Wraper>
            <AllSeats>
                {seats.map((seat, index) => (
                    <Seat
                        seat={seat}
                        key={index}
                        index={index}
                        selected={selected}
                        setSelected={setSelected}
                    />
                ))}
            </AllSeats>
            <Exemples>
                <div>
                    <button ></button>
                    <span>Selecionado</span>
                </div>
                <div>
                    <button></button>
                    <span>Disponível</span>
                </div>
                <div>
                    <button ></button>
                    <span>Indisponível</span>
                </div>
            </Exemples>
        </Wraper>
    )
}

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px 30px;

  div {
    display: flex;
    justify-content: space-between;
  }
  
 
`;

const AllSeats = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
   max-width: 360px;
   margin-top: 30px;
`;

const Exemples = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 350px;
    margin-top: 5px;
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