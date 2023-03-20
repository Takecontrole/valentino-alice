import React from "react";
import styled from "styled-components"

import { mobile } from "../responsive";
import  Signature from "./signature.png"
const Loader = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  display: flex;
  animation: taadaa 1s infinite;
`;
function Loading() {
    return (
      <Loader>
     
     <img src={Signature} style={{width:"200px"}}/>
    
      </Loader>
    );
}

export default Loading;