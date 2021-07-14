import styled from 'styled-components';

export const Container = styled.div`
    max-width: 350px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 20px 0px;
    background-color: #eee;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 0.5em gray;

    ${props => props.isBlurred ? 'filter: blur(3px);' : 'filter: none;'}

    :hover {
        transform: scale(1.05,1.05);
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
        filter: none;
    }
`;

export const MovieInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin: 5px 50px;
`;

export const Overview = styled.h3`
    font-size: 16px;
    font-weight: 300;
    width: 90%;
`;

export const Image = styled.img`
    width: 50%;
    align-self: center;
    margin: 10px 0px;
`;