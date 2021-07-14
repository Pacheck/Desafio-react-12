import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
`;

export const Container = styled.div`
    background-color: darkgray;
    width: 100%;
`;

export const CardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ActionsWrapper = styled.div``;
