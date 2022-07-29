import styled from "styled-components";

export default function Footer({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}


const Wrapper = styled.div`
    height: 117px;
    width: 100vw;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0;
    left: 0;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;

    h2{
        font-size: 26px;
        color: #293845;
    }
`;