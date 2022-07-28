import styled from "styled-components"


export default function Navbar() {
    return (
        <Header><h1>CINEFLEX</h1></Header>
    )
}

const Header = styled.div`
    width: 100vw;
    height: 67px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    position: fixed;
    top: 0;
    left: 0;

    h1{
        font-size: 34px;
        color: #E8833A;
    }
`


