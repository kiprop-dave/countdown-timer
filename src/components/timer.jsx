import React from 'react';
import styled from 'styled-components';
import { darkDesBlue, softRed, grayishBlue } from '../utils/style';

const Container = styled.div`
    height: 10rem;
    width: 8.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    /* border: solid 1px yellow; */

    @media screen and (max-width: 600px){
        width: 7rem;
    }
`
const Time = styled.div`
    background-color: ${darkDesBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70%;
    width: 100%;
    /* padding: 15% 0 0 0; */
    border-radius: 10px;

    .time{
        font-size: 80px;
        color: ${softRed};
        text-align: center;

        @media screen and (max-width: 600px){
            font-size: 60px;
        }
    }
`

const Label = styled.h3`
    color: ${grayishBlue};
    letter-spacing: 3px;
    font-size: 14px;

    @media screen and (max-width: 600px){
        letter-spacing: 2px;
    }
`


function Timer({ label, time }) {

    const display = time < 10 ? `0${time}` : time // checks if the digit is less than 10 and adds a 0 infront of it

    return (
        <>
            <Container>
                <Time>
                    <h1 className='time'>{display}</h1>
                </Time>
                <Label>{label}</Label>
            </Container>
        </>
    )
}

export default Timer
