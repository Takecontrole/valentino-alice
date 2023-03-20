import React from "react";
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { init } from "ityped";



const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  background-color: #C9ADA7;
  height: 80px;
`;
const Center = styled.div`
width: 260px
  
  
`;

const Logo = styled.h1`
  font-weight: bold;
  
        font-size: 60px;
        @include mobile{
          font-size: 20px;
        }
        span {
          font-size: inherit;
          color: #fcf5f5;
        }
        .ityped-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
            50%{
                opacity: 1;
            }
            75%{
                opacity: 0.5;
            }
            100%{
                opacity: 0;
            }
        }
      
`;


const ShopName = () => {
  const textRef = useRef();
  
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["valentino.", "valentino.",],
    });
  }, []);
  return (
    <Container>
       <Center>
          <Logo className="logo"><span style={{color:"white"}} ref={textRef}></span></Logo>
        </Center>
        </Container>
    )
}
export default ShopName