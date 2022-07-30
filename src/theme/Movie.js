import styled from "styled-components"


export default function Movie({ children, height, margin, width }) {
    return (
        <Wrapper height={height} width={width} margin={margin}>{children}</Wrapper>
    )
}


const Wrapper = styled.div`
    box-sizing: border-box;
    margin: ${(props) => props.margin};
    padding: 8px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    img{
        height: 100%;
        width: auto;
    }
`;
