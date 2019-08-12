import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    background-color: #3a3a3a;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: -1.5vh;
    height: 75px;
    color: white;
    display: grid;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 30px;
    text-align: center;
    color: white;
`;
export const TitleDiv = props => {
    return (
        <StyleDiv>
            <Title>{props.name}</Title>
        </StyleDiv>
    );
};
