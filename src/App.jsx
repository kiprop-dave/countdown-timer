import React from 'react';
import styled from 'styled-components';
import CountDown from './components/countdown';
import { white, veryDarkBlue } from './utils/style';

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(/pattern-hills.svg),url(/bg-stars.svg);
  background-position: bottom,top;
  background-repeat: no-repeat, no-repeat;
  background-color: ${veryDarkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-evenly; */
  /* position: relative; */
`
const Title = styled.h2`
  color: ${white};
  letter-spacing: 5px;
  margin-top: 15vh;
  text-align: center;
`
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: 4rem;
`
const SocialIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  cursor: pointer;
`

function App() {

  return (
    <>
      <Page>
        <Title>
          WE'RE LAUNCHING SOON
        </Title>
        <CountDown />
        <Socials>
          <SocialIcon src='/icon-facebook.svg' alt='facebook' />
          <SocialIcon src='/icon-pinterest.svg' alt='pinterest' />
          <SocialIcon src='/icon-instagram.svg' alt='instagram' />
        </Socials>
      </Page>
    </>
  )
}

export default App
