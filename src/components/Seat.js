
import { useState } from "react";
import styled from "styled-components";

export default function Seat({ seat, selected, setSelected }) {
    const [color, setColor] = useState("#C3CFD9");
    const [border, setBorder] = useState("#7B8B99");
    const [clicked, setClicked] = useState(false);
    seat = { ...seat, clicked };


    if (seat.isAvailable === true && seat.clicked === false) {
        return (
            <SeatButton color={color} border={border}>
                {seat.name}
            </SeatButton>
        );
    } else if (seat.clicked === true) {
        return (
            <SeatButton color={color} border={border} >
                {seat.name}
            </SeatButton>
        );
    } else {
        return (
            <SeatButton color={"#FBE192"} border={"#F7C52B"} >
                {seat.name}
            </SeatButton>
        );
    }
}



const SeatButton = styled.span`
  font-size: 11px;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  color: black;
  margin-right: 5px;
  margin-bottom: 15px;
  align-items: center;
  border: 1px solid ${(props) => props.border};
  width: 26px;
  height: 26px;
  border-radius: 50%;
`;