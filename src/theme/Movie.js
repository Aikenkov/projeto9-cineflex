import styled from "styled-components"


const Movie = styled.div`
    box-sizing: border-box;
    margin: 5px 15px;
    padding: 8px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    height: 209px;
    width: 145px;
    img{
        height: 100%;
        width: auto;
    }
`;

export default Movie;