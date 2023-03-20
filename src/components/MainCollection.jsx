import react from "react";
import styled from "styled-components";
import {mobile} from "../responsive"
import {Link} from "react-router-dom";
const Container = styled.div`
  background: url("./images/ayo-ogunseinde-6W4F62sN_yI-unsplash.jpg")
      center;
  background-size: cover;
   height: 1100px; 
   width: 100%;

  
 ${mobile({ height:"600px",})}

`;

const Prescription = styled.div`
margin:0;
   height: 200px; 
   width: 330px;
   position: relative;
   bottom: -800px;
   margin-left: 80px;
 ${mobile({ 
bottom:"-380px",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  marginLeft:"10px",
   width: "150px",
})}
`;
const P = styled.p`
color:white;
font-size:35px;
text-shadow:0 0 8px black;
font-weight:600;
 ${mobile({ fontSize:"20px",})}
`;
const P2 = styled.p`
color:white;
font-size:25px;
text-shadow:0 0 8px black;
font-weight:500;
 //${mobile({  fontSize:"14px",})}
`;

const LittleContainer = styled.div`
display: flex;
align-items: center;
width: 300px;
height: 70px;
 //${mobile({ width:"120px", height: "150px",})}
`;
const Span = styled.span`
color:white;
font-size:20px;
text-shadow:0 0 8px black;
margin-right: 20px;
 //${mobile({ display:"none"})}
`;
const Button = styled.button`
border: 2px solid white;
color: black;
font-size:20px;
width: 180px;
height: 50px;
padding: 10px;
background-color: white ;
cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 //${mobile({ fontSize:"16px",})}
`; 


const Collection = () => {
  return (
        <Container>
         <Prescription>
         <P className="stolengirlclub">Клуб украденных невест</P>
         <P2 >Ограниченный выпуск</P2>
         <LittleContainer>
         <Span >Новая коллекция</Span> 
         <Button> <Link style={{textDecoration:"none", color:"black"}}to="/products/Клуб украденных невест">перейти</Link></Button>
         </LittleContainer>
         </Prescription>
         </Container>
  )
}

export default Collection;