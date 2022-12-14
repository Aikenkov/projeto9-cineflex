
import { useState } from "react";
import styled from "styled-components";

export default function Seat({ seat, selected, setSelected, selectedId, setSelectedId }) {
    const [color, setColor] = useState("#C3CFD9");
    const [border, setBorder] = useState("#7B8B99");
    const [clicked, setClicked] = useState(false);
    seat = { ...seat, clicked };

    let minorseat = seat.name
    if (minorseat < 10) {
        minorseat = "0" + minorseat
    }

    if (seat.isAvailable === true && seat.clicked === false) {
        return (
            <SeatButton color={color} border={border} onClick={selectSeat}>
                {minorseat}
            </SeatButton>
        );
    } else if (seat.clicked === true) {
        return (
            <SeatButton color={color} border={border} onClick={unselectSeat}>
                {minorseat}
            </SeatButton>
        );
    } else {
        return (
            <SeatButton color={"#FBE192"} border={"#F7C52B"}
                onClick={() => { alert("Este assento não está disponível") }}>
                {minorseat}
            </SeatButton>
        );
    }

    function selectSeat() {
        setSelected([...selected, seat.name]);
        setSelectedId([...selectedId, seat.id]);
        setColor("#8DD7CF");
        setBorder("#1AAE9E");
        setClicked(true);
    }
    function unselectSeat() {
        let ind = selected.indexOf(seat.name);
        let ind2 = selectedId.indexOf(seat.id);
        selected.splice(ind, 1);
        selectedId.splice(ind2, 1);
        setColor("#C3CFD9");
        setBorder("#7B8B99");
        setClicked(false);
    }
}



const SeatButton = styled.span`

  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 11px;
  display: flex;
  justify-content: center;
  color: black;
  margin-right: 5px;
  margin-bottom: 15px;
  align-items: center;
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.border};

`;