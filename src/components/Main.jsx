import React from 'react'
import videoBg from '../assets/brends.mp4'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  
  
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  position: relative;

 
`;

const Wrapper = styled.div`
 
  width: 100%;
  
  display: flex;
  overflow: hidden;
  margin-top: 20px;
  justify-content: center;

`;


const Video = styled.video`
 width: 100%;
 margin-top: 50px;
  
  
 
  `;
  
const Main = () => {
  return (
    <Container >
        <Wrapper>
        <Video src={videoBg} autoPlay loop muted />
        </Wrapper>
        </Container>
    
  )
}

export default Main