import styled from "styled-components"


export default function ButtonSeat({ children, state, selected }) {
    return (
        <Wrapper selected={selected} state={state}>{children}</Wrapper>
    )
}


const Wrapper = styled.button`

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: #000000;
        width: 26px;
        height: 26px;
        margin: 9px 4px;
     
        background-color: ${props => props.state ? `#C3CFD9` : `#FBE192`};
        border: ${props => props.state ? `solid 1px #808F9D` : `solid 1px #F7C52B`};
            

    
`;